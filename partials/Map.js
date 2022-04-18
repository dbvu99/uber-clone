import tw from "tailwind-styled-components/dist/tailwind";import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";

// get token by creating an account
mapboxgl.accessToken =
	"pk.eyJ1IjoiZGJ2dTUzMSIsImEiOiJjbDIyaTEzdzkwZDQxM2ptYm4wOHpjY2lzIn0.eDnLit0F4TTbXxkHqn1Iew";

export default function Map(props) {
	// only run the first type the app loaded
	console.log("props", props);
	const { pickupCoordinates, dropoffCoordinates } = props;
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map", // container ID
			style: "mapbox://styles/mapbox/streets-v11", // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9, // starting zoom
		});

		if (pickupCoordinates) {
			addToMap(map, pickupCoordinates);
		}
		if (dropoffCoordinates) {
			addToMap(map, dropoffCoordinates);
		}
    if(pickupCoordinates && dropoffCoordinates){
        map.fitBounds([
            pickupCoordinates,
            dropoffCoordinates
        ],{
          padding:60
        })
    }
	}, [pickupCoordinates, dropoffCoordinates]);
	{
		/* map container for mapboxgl */
	}

	const addToMap = (map, coordinates) => {
		const marker1 = new mapboxgl.Marker()
			.setLngLat([12.554729, 55.70651])
			.setLngLat(coordinates)
			.addTo(map);
	};
	return <Wrapper id="map">Map</Wrapper>;
}

const Wrapper = tw.div`
  grow shrink bg-red-300
`;
