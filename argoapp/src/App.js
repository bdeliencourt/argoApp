import './App.css';
import Router from './components/Router';
import Container from 'react-bootstrap/Container';


const App = () => {

  return (
    <Container fluid className="appContainer">
      <Router />
    </Container>
  );

};
export default App;
