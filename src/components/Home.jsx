import { Container, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <Container style={{ height: "90vh" }}>
      <Row className="h-100 d-flex align-items-center justify-content-center">
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

          {/* <Row className="justify-content-between">
            <Button variant="primary" className="col-auto mr-2">
              Button 1
            </Button>
            <Button variant="secondary" className="col-auto">
              Button 2
            </Button>
          </Row> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
