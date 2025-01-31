import { ImPieChart } from "react-icons/im";
import SearchOrder from "../../features/Order/SearchOrder";
import {
  Container,
  HeaderNavlink,
  ListContainer,
  LogoContainer,
} from "./style";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div>
        <LogoContainer>
          <NavLink to="/">
            <ImPieChart size={40} color="#ff674d" />
          </NavLink>
        </LogoContainer>
        <ListContainer>
          <li>
            <HeaderNavlink to="/menu">Menu</HeaderNavlink>
          </li>
          <li>
            <HeaderNavlink to="/order/new">Order</HeaderNavlink>
          </li>
          <li>
            <HeaderNavlink to="/cart">Cart</HeaderNavlink>
          </li>
        </ListContainer>
      </div>

      <SearchOrder />
    </Container>
  );
};

export default Header;
