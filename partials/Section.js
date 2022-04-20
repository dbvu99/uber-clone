import styled from "styled-components";
const Section = () => {
  return (
    <Wrappper>
      <ItemText>
        <Header1>Model X</Header1>
        <Normal>Order Online for Touchless Delivery</Normal>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Test</LeftButton>
          <RightButton>Test</RightButton>
        </ButtonGroup>
        <DownArrow src="/tesla/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrappper>
  );
};

export default Section;

const Wrappper = styled.div`
  background: blue;
  height: 100vh;
  width: 100%;
  background-image: url("/tesla/images/model-x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Header1 = styled.h1`
  font-size: 2rem;
  color: black;
  text-shadow: 0 0 31px white;
`;

const Normal = styled.p`
  text-shadow: 0 0 31px white;
`;

const LeftButton = styled.div`
  background-color: rgb(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  text-align: center;
`;
