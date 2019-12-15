import React, {Component} from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap'

class NewGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            genre: "",
            platform: "",
            image: ""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit=(e)=>{
     
        e.preventDefault();
        console.log("SUBMITTED FORM")
        this.props.createGame(this.state);
    }

    render(){
        return(
            <div>
              <h1>New Game</h1> 
              <Form onSubmit={this.handleSubmit}>
  <Row>
    <Col>
      <Form.Control  name= "title" placeholder="Title" onChange={this.handleChange} />
    </Col>
    <Col>
      <Form.Control  name= "genre" placeholder="Genre"  onChange={this.handleChange}/>
    </Col>
  </Row>
  <Button>Add Game</Button>
</Form>
    </div>
        )
    }
}
export default NewGame