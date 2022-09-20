import './crewlist.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import axios from "axios";

class CrewList extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      crew: [],
      isLoadingVisible: true
    };
  }

  getCrewMemberList()
  {
    // Get members crew list
    axios.get("http://192.168.1.22:5000/get-crew-member-list/")
    // On response
    .then((response) => {
      // load member list into crew state and disable loading spinner
      this.setState({
        crew : response.data.map(member => member["name"]),
        isLoadingVisible : false
      });
    }).catch(err =>{
      console.log("Error");
    });
  }

  // Get crew member list on mounted
  componentDidMount()
  {
    this.getCrewMemberList();
  }

  // Format crew list, return array of 3 elements array
  formatCrewListForDisplay()
  {
    let formatedList = [];

    // Slice crew member array into arrays of 3 elements
    // last array could be < 3 elements
    // if state.crew.length is not multiple of 3)
    for(let i = 0; i < this.state.crew.length; i += 3)
    {
      formatedList.push(this.state.crew.slice(i, i+3));
    }

    return formatedList;
  }

  render()
  {
    return(
      <Container>
      {/*Display loading spinner if loading in progress */}
      <Container className={this.state.isLoadingVisible?"visible":"visually-hidden"}>
            <Spinner animation="grow" variant="secondary" role="status" />
            <h2 class="h2">Crew loading is in progress...</h2>
      </Container>

      {/*Display empty crew notification if database is empty*/}
      <Container className={(!this.state.isLoadingVisible && this.state.crew.length === 0)?"visible":"visually-hidden"}>
            <h1 class="h1 errorColor"> :/ </h1>
            <h6 class="lead"> Sorry but your crew is empty. </h6>
            <h8 class="blockquote-footer"> Recruit some folks to join the adventure and add his name right below !</h8>
      </Container>

      {/* Display crew member list once loaded */}
      <Container className={(!this.state.isLoadingVisible && this.state.crew.length > 0)?"visible":"visually-hidden"}>
        {this.state.crew.length > 0 &&
          // Iterate on array of 3 to 1 elements
          this.formatCrewListForDisplay().map((subCrew,index) => {
          return(
            <Row>
              {
                // For each member
                subCrew.map((member, index) => {
                return(
                  <Col xs={4} sm={true} className="memberContainer px-sm-3 py-sm-1 py-2">
                    <Row  className="memberContent px-sm-3 py-sm-3 py-2 ">
                        <Col  sm={2}>
                        <img className="avatarContainer" alt={"Picture of" + {member}} src= {"https://ui-avatars.com/api/?bold=true&color=ffffff&name=" + member + "&size=32&rounded=true&background=0099bc"}/>
                        </Col>
                        <Col className="text-truncate" sm={10}>
                        <small className="lead-4">{member}</small>
                        </Col>
                    </Row>
                  </Col>
                );
              })}
            </Row>
          );
        })}
        </Container>
    </Container>
    );
  }

};

export default CrewList;
