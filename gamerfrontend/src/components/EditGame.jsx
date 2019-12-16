import React, {Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col, Form, FormGroup, Label, Input } from 'reactstrap';

class EditGame extends Component {

    constructor(props){
        super(props);
        this.state={
            modal:false,
            title: props.gamer.title,
            genre:props.gamer.genre,
            platform:props.gamer.platform,
            image:props.gamer.image
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
        
    handleSubmit= async (e)=>{
        e.preventDefault();
        console.log("Ready to Edit")
        const validUpdate = await this.props.updateGames(this.props.gamer.id, this.state);
        if(validUpdate === true){
            this.toggle(); 
        }
    }


  render(){
  return (
    <div>
<Button color="danger" onClick={this.toggle}>EDIT {this.props.gamer.title}</Button>
      <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form onSubmit = {this.handleSubmit}>
        <FormGroup row>
          <Label className="labelEdit" sm={2}> Title</Label>
          <Col sm={10}>
                <Input type="text" name="title"  className="LoginForm" onChange={this.handleChange} value={this.state.title}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="labelEdit" sm={2}>Genre</Label>
          <Col sm={10}>
                <Input type="text" name="genre"  className="LoginForm" onChange={this.handleChange} value={this.state.genre}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="labelEdit" sm={2}> Platform</Label>
          <Col sm={10}>
                <Input type="text" name="platform"  className="LoginForm" onChange={this.handleChange} value={this.state.platform}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label className="labelEdit" sm={2}> Image</Label>
          <Col sm={10}>
                <Input type="text" name="image"  className="LoginForm" onChange={this.handleChange} value={this.state.image}/>
                </Col>
        </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>UPDATE GAME</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
}

export default EditGame;