import styled from "styled-components";
import Section from "../partials/Section";
import carInfo from "../props/tesla/carInfo.json";

export default function Tesla() {
  return (
    <Container>
      {carInfo.map((info) => (
        <Section {...info} key={info.id}></Section>
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-image: url("/tesla/images/model-s-blur.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
