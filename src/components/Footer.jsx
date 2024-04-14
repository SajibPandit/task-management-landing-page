import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "10vh",
        backgroundColor: "#F8F9FA",
      }}
    >
      <p className="text-center">Copyright &copy;2024. All Rights Reserved</p>
    </Container>
  );
}

export default Footer;
