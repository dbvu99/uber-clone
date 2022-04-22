import { useEffect } from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";
const Section = ({ id, title, description, image, leftButton = "Custom Order", rightButton = "Existing Inventory" }) => {
  const elementId = "header-" + id;
  // console.log(id);

  useEffect(() => {
    const header1 = document.getElementById(elementId);
    // const header1 = document.getElementById(elementId);
    // const header1 = document.getElementById(elementId);
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
          }
          if (entry.intersectionRatio === 0) {
            header1.classList.remove("slideUp-animate");
          }
        });
      },
      {
        threshold: [0, 1], // when the element is at 0% start hidding it, when the element is at 100% start showing it
        rootMargin: "-50px", //shrink the view box by 50px
      }
    );

    observer.observe(header1);
  }, []);

  return (
    <Wrappper bgImage={image}>
      {/* <Fade ssrFadeout bottom> */}
      <ItemText>
        <Header1 id={elementId}>{title}</Header1>
        {description && <Normal>{description}</Normal>}
      </ItemText>
      {/* </Fade> */}
      <Buttons>
        {/* <Fade ssrFadeout bottom> */}
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          {rightButton && <RightButton>{rightButton}</RightButton>}
        </ButtonGroup>
        {/* </Fade> */}
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
  transition: transform 0.5s ease-in-out, opacity 0.75s ease-in-out;
  transform: translateY(100%);
  opacity: 0;
  animation: slideUp 0.5s ease-in-out; // animation on page load

  &.slideUp-animate {
    transform: translateX(0);
    opacity: 1;
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
