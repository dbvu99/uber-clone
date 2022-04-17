import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";
import Map from "../partials/Map";
import ActionItems from "../partials/ActionItems";

export default function Home() {
  return (
    <Wrapper>
      <Map></Map>
      <ActionItems></ActionItems>
      123
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;
