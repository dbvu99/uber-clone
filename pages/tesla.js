import styled from "styled-components";
import Section from "../partials/Section";
import Header from "../partials/tesla/Header";
import carInfo from "../props/tesla/carInfo.json";

export default function Tesla() {
  return (
    <Container>
      <Header></Header>
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
