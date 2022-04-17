import tw from "tailwind-styled-components/dist/tailwind";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";

// get token by creating an account
mapboxgl.accessToken = "pk.eyJ1IjoiZGJ2dTUzMSIsImEiOiJjbDIyaTEzdzkwZDQxM2ptYm4wOHpjY2lzIn0.eDnLit0F4TTbXxkHqn1Iew";

export default function Map() {
  // only run the first type the app loaded
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }, []);

  {
    /* map container for mapboxgl */
  }
  return <Wrapper id="map">Map</Wrapper>;
}

const Wrapper = tw.div`
  grow shrink bg-red-300
`;
