import React, {Component} from 'react'

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
                <div key = {gamer.id}>
                    <h1>{gamer.title}</h1>
                </div>
            )
        })
        return(
            <div>
                <h1>Game List React</h1>
                {gamer}
            </div>
        )
    }

}
export default gameList