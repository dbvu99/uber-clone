import React, { useState } from "react";import tw from "tailwind-styled-components";
import Link from "next/link";
const Search = () => {
	const [pickup, setPickup] = useState("");
	const [dropoff, setDropoff] = useState("");
	return (
		<Wrapper>
			<Link href="./" passHref>
				<ButtonContainer>
					<BackButton src="./arrow-left.png" />
				</ButtonContainer>
			</Link>
			<InputContainer>
				<FromToIcons>
					<Circle src="" />
					<Line />
					<Square src="" />
				</FromToIcons>
				<InputBoxes>
					<Input
						placeholder="Enter pickup location"
						value={pickup}
						onChange={(e) => setPickup(e.target.value)}
					/>
					<Input
						placeholder="Where to?"
						value={dropoff}
						onChange={(e) => setDropoff(e.target.value)}
					/>
				</InputBoxes>
				<PlusIcon>
					<Div1 />
					<Div2 />
				</PlusIcon>
			</InputContainer>
			<SavedPlaces>
				<StarIcon src="./star.png" />
				Saved Places
			</SavedPlaces>
			<Link
				href={{
					pathname: "/confirm",
					query: {
						pickup: pickup,
						dropoff: dropoff,
					},
				}}
				passHref
			>
				<ConfirmButtonContainer>
					Confirm Locations
				</ConfirmButtonContainer>
			</Link>
		</Wrapper>
	);
};

export default Search;
const Wrapper = tw.div` bg-gray-200 h-screen `;
const ButtonContainer = tw.div` bg-white px-4 py-2 `;
const BackButton = tw.img`h-6 cursor-pointer`;
const InputContainer = tw.div` bg-white px-2 py-2 flex items-center px-4`;
const FromToIcons = tw.div`w-6 mr-2 flex flex-col justify-center items-center`;
const Circle = tw.div`w-2.5 h-2.5 bg-gray-400 rounded-full `;
const Line = tw.div` w-0.5 h-10 bg-gray-400  `;
const Square = tw.div`w-2 h-2 bg-black `;
const InputBoxes = tw.div`flex flex-col flex-1`;
const Input = tw.input`h-8 bg-gray-200 my-1 rounded-2 p-2 outline-none border-none`;
const PlusIcon = tw.div`w-11 h-11 bg-gray-200 rounded-full relative ml-2`;
const Div1 = tw.div` h-1 bg-black absolute inset-x-1 top-5`;
const Div2 = tw.div`w-1 bg-black  absolute inset-y-1 left-5`;
const SavedPlaces = tw.div`flex items-center bg-white px-4 py-2 mt-1`;
const StarIcon = tw.img` w-10 p-2 rounded-full mr-2`;
const ConfirmButtonContainer = tw.div` bg-black text-white text-center mt-2 mx-4 px-3 py-3 text-2xl cursor-pointer`;
