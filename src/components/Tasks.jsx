import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Tasks() {
  const [key, setKey] = useState("home");

  return (
    <Container
      id="tasks"
      className="d-flex justify-content-center my-2"
      style={{ minHeight: "60vh" }}
    >
      <div style={{ width: "100%" }}>
        <Tabs
          id="centered-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="text-center"
          fill
        >
          <Tab eventKey="home" title="Home">
            <Card className="my-2">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Tab content for Home</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card className="my-2">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Tab content for Home</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="profile" title="Profile">
            <Card className="my-2">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Tab content for Profile</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <Card className="my-2">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Tab content for Contact</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default Tasks;
