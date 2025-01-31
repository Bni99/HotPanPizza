import { ImPieChart } from "react-icons/im";
import SearchOrder from "../../features/Order/SearchOrder";
import { HeaderList } from "../../features/styles/Lists";
import {
  HeaderNavlink,
  StyledHeaderLogoNavlink,
} from "../../features/styles/Links";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <div>
        <StyledHeaderLogoNavlink to="/">
          <ImPieChart size={40} />
        </StyledHeaderLogoNavlink>
        <HeaderList>
          <li>
            <HeaderNavlink to="/menu">Menu</HeaderNavlink>
          </li>
          <li>
            <HeaderNavlink to="/order/new">Order</HeaderNavlink>
          </li>
          <li>
            <HeaderNavlink to="/cart">Cart</HeaderNavlink>
          </li>
        </HeaderList>
      </div>

      <SearchOrder />
    </Container>
  );
};

export default Header;
