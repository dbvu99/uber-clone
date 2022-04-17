import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";
import Map from "../partials/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  grow shrink bg-red-200
`;
