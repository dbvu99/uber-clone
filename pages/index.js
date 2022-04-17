import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";

mapboxgl.accessToken = "pk.eyJ1IjoiZGJ2dTUzMSIsImEiOiJjbDIyaTEzdzkwZDQxM2ptYm4wOHpjY2lzIn0.eDnLit0F4TTbXxkHqn1Iew";

export default function Home() {
  // only run the first type the app loaded
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }, []);

  return (
    <Wrapper>
      {/* map container for mapboxgl */}
      <Map id="map">Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const Map = tw.div`
  grow shrink bg-red-300
`;
const ActionItems = tw.div`
  grow shrink bg-red-200
`;
