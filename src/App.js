import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Row, Col, Container } from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom';

// import NavComponent from './components/navBar'
import AboutMe from './components/aboutMe'
import MyWork from './components/myWork'
import ContactInfo from './components/contactInfo';





function App() {
  return (
    <div className="background">
      <Container>
        <Router>
          <Row>
            <Col xs={12} md={9} className="column"><AboutMe/><MyWork/></Col>
            <Col xs={12} md={3}><ContactInfo/></Col>
          </Row>
        </Router>
      </Container>
    </div>
  );
}

export default App;
