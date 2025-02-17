import { ImPieChart } from "react-icons/im";
import { Container } from "./style";
import { colors } from "../../utils";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className="footer-main-container">
        <div className="footer-heading-container">
          <div>
            <ImPieChart size={48} color={colors.orange} />
            <h1>Hot pan pizza</h1>
          </div>
          <p>© 2025 Hot pan Pizza. All rights reserved.</p>
        </div>
        <ul>
          <li>About us :</li>
          <li>
            <Link to="/our-company">Our Company</Link>
          </li>
        </ul>

        <ul>
          <li>Available in :</li>
          <li>Chandigarh</li>
          <li>Mohali</li>
          <li>Ludhiana</li>
          <li>Punjab</li>
          <li>Shimla</li>
        </ul>

        <ul>
          <li>Quick Links :</li>
          <li>Menu</li>
          <li>Best Sellers</li>
          <li>Order</li>
        </ul>

        <ul className="social-links">
          <li className="social-links-heading">Social links :</li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
