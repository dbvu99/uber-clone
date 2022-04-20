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
  background: red;
`;
