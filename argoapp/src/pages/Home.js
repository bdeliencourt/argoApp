import './home.css';
import CrewList from '../components/CrewList';
import FormCrew from '../components/FormCrew';
import Container from 'react-bootstrap/Container';

const Home = () => {

  return (
    <Container>
      <div id="titleContainer" className="display-4 mb-5 mt-n3">
        <h2>
          Welcome aboard Jason 🌊🏛️ <br/>
          <small class="text-muted lead">Manage your crew with the app! </small>
        </h2>
      </div>

      <Container className="crewContainer px-2 pt-2" fluid>
        <CrewList />
      </Container>
        <FormCrew />
    </Container>
  );

};
export default Home;
