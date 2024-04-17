import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, FloatingLabel } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import FilterMenu from "./FilterMenu";

function Tasks() {
  const [key, setKey] = useState("facebook");
  const [filter, setFilter] = useState('');

  const handleFilterSelect = (option) => {
    setFilter(option);
  };


  const filterMenus = [
    {
      id: 1,
      title: 'Most Popular',
      key: 'mostPopular'
    }, {
      id: 2,
      title: 'Popular',
      key: 'popular'
    }, {
      id: 3,
      title: 'Likes',
      key: 'likes'
    }, {
      id: 4,
      title: 'Comments',
      key: 'comments'
    }, {
      id: 5,
      title: 'Subscribe',
      key: 'subscribe'
    }, {
      id: 6,
      title: 'Posts',
      key: 'posts'
    },
  ]

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
          <Tab eventKey="facebook" title="Facebook">
            <Card className="my-2">
              <Row>
                <Col style={{ padding: '20px' }} md={3}>
                  {/* <Form.Select aria-label="Default select example">
                    <option>Filter Options</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select> */}




                  {/* <FloatingLabel controlId="floatingSelect" label="Filter Options">
                    <Form.Select aria-label="Floating label select example">
                      <option>Select</option>

                      {data.map((d, i) => (
                        <option index={i} value={d.key}>{d.title}</option>
                      ))}
                    </Form.Select>
                  </FloatingLabel> */}
                  <label className="menu-label">Filter Options:</label>

                  <FilterMenu
                    options={['Most Popular', 'Popular Likes', 'Comments', 'Subscribe', 'Views', 'Linkes']}
                    onSelect={handleFilterSelect}
                  />
                </Col>
                <Col md={8}>
                  <Row>
                    <Col md={6}>
                      <Card className="m-2">
                        <Card.Body>
                          <Card.Title>Tab content for Home</Card.Title>
                          <Card.Text>
                            With supporting text below as a natural lead-in to additional
                            content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="m-2">
                        <Card.Body>
                          <Card.Title>Tab content for Home</Card.Title>
                          <Card.Text>
                            With supporting text below as a natural lead-in to additional
                            content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={6}>
                      <Card className="m-2">
                        <Card.Body>
                          <Card.Title>Tab content for Home</Card.Title>
                          <Card.Text>
                            With supporting text below as a natural lead-in to additional
                            content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={6}>
                      <Card className="m-2">
                        <Card.Body>
                          <Card.Title>Tab content for Home</Card.Title>
                          <Card.Text>
                            With supporting text below as a natural lead-in to additional
                            content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={6}>
                      <Card className="m-2">
                        <Card.Body>
                          <Card.Title>Tab content for Home</Card.Title>
                          <Card.Text>
                            With supporting text below as a natural lead-in to additional
                            content.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>

                </Col>
              </Row>
            </Card>
          </Tab>

          <Tab eventKey="youtube" title="YouTube">
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
          <Tab eventKey="instagram" title="Instagram">
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

          <Tab eventKey="twitter" title="Twitter">

          </Tab>
          <Tab eventKey="linkedIn" title="LinkedIn">

          </Tab>
          <Tab eventKey="links" title="Links">

          </Tab>


        </Tabs>
      </div>
    </Container>
  );
}

export default Tasks;
