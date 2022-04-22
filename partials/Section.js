import { useEffect } from "react";
import styled from "styled-components";
const Section = ({ id, title, description, image, leftButton = "Custom Order", rightButton = "Existing Inventory" }) => {
  const elementId = "header-" + id;
  const textId = "textItem-" + id;
  const pId = "p-" + id;
  // console.log(id);

  useEffect(() => {
    const header1 = document.getElementById(elementId);
    const p1 = document.getElementById(pId);
    const observingTextItem = document.getElementById(textId);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // this is not an ideal solution for sliding up and down because it causes element to enter view port, but it's good to know
          // if (entry.isIntersecting) {
          //   header1.classList.add("slideUp-animate");
          // } else {
          //   header1.classList.remove("slideUp-animate");
          // }
          console.log(id, entry.intersectionRatio);
          if (entry.intersectionRatio === 1) {
            header1.classList.add("slideUp-animate");
            // observingTextItem.classList.add("slideUp-animate");
          }
          if (entry.intersectionRatio === 0) {
            header1.classList.remove("slideUp-animate");
            // observingTextItem.classList.remove("slideUp-animate");
          }
        });
      },
      {
        threshold: [0, 1], // when the element is at 0% start hidding it, when the element is at 100% start showing it
        rootMargin: "-50px", //shrink the view box by 50px
      }
    );
    // don't forget to add the observer to the element
    observer.observe(header1);
    // observer.observe(observingTextItem);
  }, []);

  return (
    <Wrappper bgImage={image}>
      <ItemText>
        <Header1 id={elementId}>{title}</Header1>
        {description && <Normal id={pId}>{description}</Normal>}
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          {rightButton && <RightButton>{rightButton}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/tesla/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrappper>
  );
};

export default Section;

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
