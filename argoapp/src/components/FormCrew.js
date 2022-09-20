import './form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class FormCrew extends React.Component {

  constructor(props) {
    super(props);
    this.state = {memberName: ''};
    // Bind func to component
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.addCrewMember = this.addCrewMember.bind(this);

  }


  async addCrewMember()
  {
    // Add crew member to DB
    let res = await axios.post('http://192.168.1.22:5000/add-crew-member',
    {
      name: this.state.memberName
    });
  }


  handleUpdateText(event)
  {
    // Update memberName according to form input
    this.setState({memberName: event.target.value});
  }

  render()
  {
    return(

    <Container fluid>
      <Form onSubmit= {this.addCrewMember} className="formContainer">
        <Form.Group as={Row}>
          <Col  md={10}>
            <Form.Control type="text" value={this.state.memberName} onChange={this.handleUpdateText} placeholder="Enter your crew name" alt="Nom argonaute" required />
          </Col>

          <Col md={2}  className="py-3 py-sm-0">
          <div className="d-grid">
            <Button type="submit" className="button submitButton">add member</Button>
            </div>

          </Col>
          </Form.Group>
      </Form>
  </Container>
    );
  }

};

export default FormCrew;