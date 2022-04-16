import tw from "tailwind-styled-components/dist/tailwind";

export default function Home() {
  return <Wrapper>
    <Map>Map</Map>
    <ActionItems>Start</ActionItems>
  </Wrapper>;
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const Map = tw.div`
  grow shrink bg-red-300
`
const ActionItems = tw.div`
  grow shrink bg-red-200
`