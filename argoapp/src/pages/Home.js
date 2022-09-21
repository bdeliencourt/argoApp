import './home.css';
import CrewList from '../components/CrewList';
import FormCrew from '../components/FormCrew';
import Container from 'react-bootstrap/Container';

/**
 * Home page component : contains all components crew list and form
 *
 * @component
 */
const Home = () => {

  /**
   * render - render crew list component
   *
   * @return {type}  component rendering
   */
  return (
    <Container>
      <div id="titleContainer" className="display-4 mb-5 mt-n3">
        <h2>
          Welcome aboard Jason 🌊🏛️ <br/>
          <small className="text-muted lead">Manage your crew with the app! </small>
        </h2>
      </div>

      <Container className="crewContainer px-2 py-3" fluid>
        <CrewList />
      </Container>
        <FormCrew />
    </Container>
  );

};
export default Home;
