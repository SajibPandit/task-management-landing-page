import { Container } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import { BiLogoMagento } from "react-icons/bi";

function Footer() {
  return (
    <div style={{
      minHeight: "10vh",
      padding: '20px 0px',
      backgroundColor: "#F8F9FA",
    }}>
      <Container
        className="footer"

      >
        <div>
          <div><BiLogoMagento className="footer-logo" /></div>
          <p className="text-center">Copyright &copy;2024. All Rights Reserved</p>
        </div>

        <div>
          <SocialLinks />
        </div>
      </Container>
    </div>
  );
}

export default Footer;
