import React from "react";import tw from "tailwind-styled-components";
const Search = () => {
	return (
		<Wrapper>
			<ButtonContainer>
				<BackButton src="https://clipground.com/images/android-back-button-icon-clipart.png" />
			</ButtonContainer>
			<InputContainer>
				<FromToIcons>
					<Circle src="" />
					<Line />
					<Square src="" />
				</FromToIcons>
				<InputBoxes>
					<Input placeholder="Enter pickup location" />
					<Input placeholder="Where to?" />
				</InputBoxes>
				<PlusIcon>
					<Div1 />
					<Div2 />
				</PlusIcon>
			</InputContainer>
			<SavedPlaces>
				<StarIcon src="https://cdn.onlinewebfonts.com/svg/img_359362.png" />
				Saved Places
			</SavedPlaces>
            
		</Wrapper>
	);
};

export default Search;
const Wrapper = tw.div` bg-gray-200 h-screen `;
const ButtonContainer = tw.div` bg-white px-4 py-2 `;
const BackButton = tw.img`h-6`;
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
