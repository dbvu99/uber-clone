import styled from "styled-components";
import Section from "../partials/Section";

export default function Tesla() {
  return (
    <Container>
      <Section></Section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  background: red;
`;
