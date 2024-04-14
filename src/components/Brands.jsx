import { Container, Row, Col } from "react-bootstrap";

import { DiVim } from "react-icons/di";
import { DiStackoverflow } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { DiDotnet } from "react-icons/di";
import { DiApple } from "react-icons/di";

const Brands = () => {
  return (
    <Container
      id="featured"
      fluid
      className="scroll-container d-flex align-items-center justify-content-center flex-column"
      style={{ height: "40vh", backgroundColor: "#F8F9FA" }}
    >
      <Row>
        <Col>
          <p className="text-center">
            Used and loved by people at brilliant companies
          </p>
        </Col>
      </Row>
      <Row className="scroll-row">
        <Col className="scroll-col">
          {/* <img src="brand1.png" alt="Brand 1" className="brand-icon" /> */}
          <DiVim className="brand-icon" />
        </Col>
        <Col className="scroll-col">
          {/* <img src="brand2.png" alt="Brand 2" className="brand-icon" /> */}
          <DiStackoverflow className="brand-icon" />
        </Col>
        <Col className="scroll-col">
          {/* <img src="brand3.png" alt="Brand 3" className="brand-icon" /> */}
          <DiSass className="brand-icon" />
        </Col>

        <Col className="scroll-col">
          {/* <img src="brand3.png" alt="Brand 3" className="brand-icon" /> */}
          <DiNpm className="brand-icon" />
        </Col>

        <Col className="scroll-col">
          {/* <img src="brand3.png" alt="Brand 3" className="brand-icon" /> */}
          <DiDotnet className="brand-icon" />
        </Col>

        <Col className="scroll-col">
          {/* <img src="brand3.png" alt="Brand 3" className="brand-icon" /> */}
          <DiApple className="brand-icon" />
        </Col>
        {/* Add more brand icons as needed */}
      </Row>
    </Container>
  );
};

export default Brands;
