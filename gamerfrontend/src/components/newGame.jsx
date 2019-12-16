import React, {Component} from 'react'
import { Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';

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
              <Form onSubmit = {this.handleSubmit}>
            <FormGroup row>
                <Label for="exampleEmail2" sm={2}> Game Title</Label>
                <Col sm={5}>
                <Input type="text" name="title" onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail2" sm={2}> Genre</Label>
                <Col sm={5}>
                <Input type="text" name="genre"onChange={this.handleChange}/>
                </Col>
            </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Platform</Label>
          <Col sm={5}>
                <Input type="text" name="platform" onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>image</Label>
          <Col sm={5}>
                <Input type="text" name="image" onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        <Button>Add Game</Button>
        </Form>
    </div>
        )
    }
}
export default NewGame