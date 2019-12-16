import React, {Component} from 'react'
import EditGame from '../components/EditGame'
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, Row, Col, Container} from 'reactstrap';

class gameList extends Component{
    constructor(){
        super()
        this.state = {
            gamer: []
        }
    }
    componentDidMount(){
        console.log("Component Did Mount")
        this.getGames();
    }

    getGames = async()=>{
        try {
            const gamer = await fetch ('http://localhost:3001/gamers')
            const data = await gamer.json();
            console.log("DATA that comes back from getGames",data)
            this.setState({
                gamer: data
            })
            
        } catch (error) {
            console.log(error) 
        }
    }

    updateGames = async(id,formData)=>{
        try {
            const updateGames = await fetch (`http://localhost:3001/gamers/${id}`,{
                method: "PUT",
                body: JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await updateGames.json();
            console.log("UPDATED DATA thats been PARSED",data)
            this.setState({
                gamer: this.state.gamer.map(gamer => gamer.id === id?
                    data: gamer)
            })   
        } catch (error) {
            console.log(error)    
        }
    }

    deleteGame = async(id) =>{
        try {
            await fetch(`http://localhost:3001/gamers/${id}`,{
                method: "DELETE"
            })
            this.setState({
                gamer: this.state.gamer.filter(gamer=> gamer.id !== id)
            })
            
        } catch (error) {
            console.log(error)   
        }
    }
    render(){
        let gamer = this.state.gamer.map(gamer => {
            console.log("gamer", gamer)
            return(
                <div>
                <Col sm ="4" key = {gamer.id} >
                <Card>
                <CardBody>
                    <CardImg top width = "50"  src={gamer.image} alt="Card image cap" />
                        <h3>{gamer.title}</h3>
            <CardSubtitle>PLATFORM:{gamer.platform}</CardSubtitle>
            <EditGame gamer={gamer} updateGames ={this.updateGames}/>
                        <Button  outline color="danger" onClick={()=>{this.deleteGame(gamer.id)}}>DELETE</Button>
                    </CardBody>
                    </Card>
                    </Col> 
                    </div>
                
            )})
        return(
            <div>
                <div className="section-header">
                    <h2 className="section-header_title">GAME STORE</h2>
                </div>
               <Row>
                {gamer}
                </Row>

            </div>
        )
    }

}
export default gameList