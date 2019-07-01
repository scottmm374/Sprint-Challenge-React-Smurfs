import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
// import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const { name, age, height } = this.state
    this.props.addSmurfInfo(this.state)
    console.log('newsmurf', name, age, height)

    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Container>
        <Form onSubmit={this.addSmurf}>
          <FormGroup>
            <Label for='name'>Smurfy Name</Label>
            <Input
              onChange={this.handleInputChange}
              placeholder="Enter name"
              value={this.state.name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for='age'>Smurfy Age</Label>
            <Input
              onChange={this.handleInputChange}
              placeholder="Enter age"
              value={this.state.age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <Label for='height'>Smurfy Height</Label>
            <Input
              onChange={this.handleInputChange}
              placeholder="Enter height"
              value={this.state.height}
              name="height"
            />
          </FormGroup>
          <Button color='warning' type="submit">Add to the village</Button>

        </Form>
        </Container>
        
      </div>
    );
  }
}

export default SmurfForm;


