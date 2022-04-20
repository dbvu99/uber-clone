import styled from "styled-components";
import carInfo from "../../props/tesla/carInfo.json";
function Header() {
  return (
    <Container>
      <a>
        <img src="/tesla/images/logo.svg"></img>
      </a>
      <Menu>
        {carInfo.map((item) => (
          <li key={item.id}>
            <a>{item.title}</a>
          </li>
        ))}
      </Menu>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  position: fixed;
  display: flex;
  min-height: 60px;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;

  li {
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 10px;
    white-space: nowrap;
  }
`;
