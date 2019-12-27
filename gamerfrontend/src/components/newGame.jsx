import React, {Component} from 'react'
import { Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { Redirect } from 'react-router-dom';

class NewGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            genre: "",
            platform: "",
            image: "",
            redirect: false,
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/gamelist' />
        }
      }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("SUBMITTED FORM")
        this.props.createGame(this.state);
        this.renderRedirect();

    }
    render(){
        return(
            <div className="Newform">
              <div className='testNew'></div>
              <div className="formGroup">
                <h1 className="formh1">New Form</h1>
              <Form onSubmit = {this.handleSubmit} className="formsection">
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
          <Label for="exampleEmail2" sm={2}>Image</Label>
          <Col sm={5}>
                <Input type="text" name="image" onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        </Form>
        <Button className="formbutton">Add Game</Button>
        </div>
        <div className='testNew'></div>
        <div className='train2'></div>
        <div class="footer">©2019 Gamer Bank Privacy | Security | Terms and Conditions</div>
    </div>
        )
    }
}
export default NewGame