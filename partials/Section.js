import { useEffect } from "react";
import styled from "styled-components";
import applyRevealEffect from "../utils/applyRevealEffect";
const Section = ({ id, title, description = "", image, leftButton = "Custom Order", rightButton = "Existing Inventory" }) => {
  const elementId = "header-" + id;
  const pId = "p-" + id;
  const leftBtn = "left-btn-" + id;
  const rightBtn = "right-btn-" + id;
  // console.log(id);

  useEffect(() => {
    applyRevealEffect(elementId);
    applyRevealEffect(pId);
    applyRevealEffect(leftBtn, { threshold: [0, 1], marginRoot: "0px" });
    applyRevealEffect(rightBtn, { threshold: [0, 1], marginRoot: "0px" });
  }, []);

  return (
    <Wrappper bgImage={image}>
      <ItemText>
        <Header1 id={elementId}>{title}</Header1>
        <Normal id={pId}>{description}</Normal>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton id={leftBtn}>{leftButton}</LeftButton>
          {rightButton && <RightButton id={rightBtn}>{rightButton}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/tesla/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrappper>
  );
};

export default Section;

const RevealAnimation = styled.div`
  &.slideUp-animate {
    animation: slideUp 0.75s ease-in-out forwards;
  }

  &:not(.slideUp-animate) {
    animation: slideDown 0.75s ease-in-out forwards;
  }
`;

const Wrappper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${({ bgImage }) => `url(/tesla/images/${bgImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Header1 = styled.h1`
  font-size: 2rem;
  color: black;
  text-shadow: 0 0 31px white;

  &.slideUp-animate {
    animation: slideUp 0.75s ease-in-out forwards;
  }

  &:not(.slideUp-animate) {
    animation: slideDown 0.75s ease-in-out forwards;
  }
`;

const Normal = styled.p`
  text-shadow: 0 0 31px white;

  &.slideUp-animate {
    animation: slideUp 0.75s ease-in-out forwards;
  }

  &:not(.slideUp-animate) {
    animation: slideDown 0.75s ease-in-out forwards;
  }
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
  font-size: 14px;

  &.slideUp-animate {
    animation: slideUp 0.75s ease-in-out forwards;
  }

  &:not(.slideUp-animate) {
    animation: slideDown 0.75s ease-in-out forwards;
  }
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
