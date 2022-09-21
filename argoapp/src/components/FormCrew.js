import './form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

/**
 * Form crew component - allow the user to set crew member name and add it
 * in the app.
 *
 * @component
 */
class FormCrew extends React.Component {

  constructor(props) {
    super(props);
    // Initializing
    this.state = {memberName: '', buttonText : "add member", variant : "primary"};
    // Bind func to component
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.addCrewMember = this.addCrewMember.bind(this);

  }


  /**
   * async - request API to add member
   * Handle user feedback
   * @param  {type} e event on submit
   */
  async addCrewMember(e)
  {
    e.preventDefault();
    // Add crew member to DB
    try {
      // Perform request
      await axios.post('http://192.168.1.22:5000/add-crew-member',
      {
        name: this.state.memberName
      });
      // Refresh app
      window.location.reload(false);
    // On request error, update uploading button
    } catch (e) {
      this.setState({buttonText: "retry", variant: "danger"});
    }
  }

  /**
   * handleUpdateText - Update crew member name
   *
   * @param  {type} event input text event
   */
  handleUpdateText(event)
  {
    // Update memberName according to form input
    this.setState({memberName: event.target.value});
  }

  /**
   * render - render crew list component
   *
   * @return {type}  component rendering
   */
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
            <Button type="submit" className="button submitButton" variant={this.state.variant} >{this.state.buttonText}</Button>
            </div>

          </Col>
          </Form.Group>
      </Form>
  </Container>
    );
  }

};

export default FormCrew;
