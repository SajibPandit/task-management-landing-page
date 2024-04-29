import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Connector from '../assets/connector.png'

const Home = () => {
  return (
    <Container style={{ height: "90vh" }} className="snap-container">
      <Row className="h-100 d-flex align-items-center justify-content-between item">
        <Col md={6} className="text-center">
          <Image src={Connector} className="img-fluid" rounded />
        </Col>
        <Col md={6} className="text-center">
          <h1>Effortless Task Management for Teams and Individuals</h1>
          <p>
            Effortless task management for teams and individuals, streamline
            workflows, meet deadlines achieve more with ease
          </p>

          <div>
            <Button variant="secondary" className="m-2">
              Get Started
            </Button>
            <Button variant="outline-secondary">Learn More</Button>
          </div>
        </Col>
      </Row>


      <Row className="h-100 d-flex align-items-center justify-content-between item">
        <Col md={6} className="text-center">
          <h1>Effortless Task Management for Teams and Individuals</h1>
          <p>
            Effortless task management for teams and individuals, streamline
            workflows, meet deadlines achieve more with ease
          </p>

          <div>
            <Button variant="secondary" className="m-2">
              Get Started
            </Button>
            <Button variant="outline-secondary">Learn More</Button>
          </div>
        </Col>

        <Col md={6} className="text-center">
          <Image src={Connector} className="img-fluid" rounded />
        </Col>
      </Row>

      <Row className="h-100 d-flex align-items-center justify-content-between item">
        <Col md={6} className="text-center">
          <Image src={Connector} className="img-fluid" rounded />
        </Col>
        <Col md={6} className="text-center">
          <h1>Effortless Task Management for Teams and Individuals</h1>
          <p>
            Effortless task management for teams and individuals, streamline
            workflows, meet deadlines achieve more with ease
          </p>

          <div>
            <Button variant="secondary" className="m-2">
              Get Started
            </Button>
            <Button variant="outline-secondary">Learn More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
