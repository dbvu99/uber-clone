import React, { useEffect, useState } from "react";import tw from "tailwind-styled-components";
import Map from "../partials/Map";
import { useRouter } from "next/router";
import RideSelector from "../partials/RideSelector";
import Link from "next/link";
const Confirm = () => {
	const router = useRouter();
	const { pickup, dropoff } = router.query;
	const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
	const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

	const getPickupCoordinates = (pickup) => {
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
				new URLSearchParams({
					access_token:
						"pk.eyJ1IjoiZGJ2dTUzMSIsImEiOiJjbDIyaTEzdzkwZDQxM2ptYm4wOHpjY2lzIn0.eDnLit0F4TTbXxkHqn1Iew",
					limit: 1,
				})
		)
			.then((res) => res.json())
			.then((data) => setPickupCoordinates(data.features[0].center));
	};
	const getDropoffCoordinates = (dropoff) => {
		fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
				new URLSearchParams({
					access_token:
						"pk.eyJ1IjoiZGJ2dTUzMSIsImEiOiJjbDIyaTEzdzkwZDQxM2ptYm4wOHpjY2lzIn0.eDnLit0F4TTbXxkHqn1Iew",
					limit: 1,
				})
		)
			.then((res) => res.json())
			.then((data) => setDropoffCoordinates(data.features[0].center));
	};
	useEffect(() => {
		getPickupCoordinates(pickup);
		getDropoffCoordinates(dropoff);
	}, [pickup, dropoff]);

	return (
		<Wrapper>
			<ButtonContainer>
				<Link href="./search" passHref>
					<BackButton src="../arrow-left.png" />
				</Link>
			</ButtonContainer>
			<Map
				pickupCoordinates={pickupCoordinates}
				dropoffCoordinates={dropoffCoordinates}
			/>
			<RideContainer>
				<RideSelector
					pickupCoordinates={pickupCoordinates}
					dropoffCoordinates={dropoffCoordinates}
				/>
				<ConfirmButtonContainer>
					<ConfirmButton>Confirm UberX</ConfirmButton>
				</ConfirmButtonContainer>
			</RideContainer>
		</Wrapper>
	);
};

export default Confirm;
const Wrapper = tw.div`flex flex-col h-screen relative`;
const RideContainer = tw.div`flex-1 flex flex-col h-1/2`;
const ConfirmButtonContainer = tw.div` `;
const ConfirmButton = tw.div`bg-black text-white my-4 mx-4 py-4 text-center text-xl`;
const ButtonContainer = tw.div` bg-white px-2 py-2 rounded-full absolute top-4 left-4 z-10 cursor-pointer`;
const BackButton = tw.img`h-4 w-4 `;

