import tw from "tailwind-styled-components/dist/tailwind";import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";
import Map from "../partials/Map";
import ActionItems from "../partials/ActionItems";
import Link from "next/link";

export default function Home() {
	return (
		<Wrapper>
			<Map/>
			<ActionItems>
				<Header>
					<UberLogo src="https://th.bing.com/th/id/OIP.yWamn7vr-vdRyiMyybGyDwHaCl?pid=ImgDet&rs=1" />
					<Profile>
						<Name> Tom </Name>
						<UberImage src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2000-de-thuong.jpg" />
					</Profile>
				</Header>
				<ActionButtons>
					<Link href="./search" passHref>
						<ActionButton>
							<ActionButtonImage src="./car.png" />
							Ride
						</ActionButton>
					</Link>
					<ActionButton>
						<ActionButtonImage src="./car1.png" />
						wheels
					</ActionButton>
					<ActionButton>
						<ActionButtonImage src="./calendar.png" />
						Reserve
					</ActionButton>
				</ActionButtons>
				<InputButton>where to?</InputButton>
			</ActionItems>
		</Wrapper>
	);
}

const Wrapper = tw.div`flex flex-col h-screen`;
const Header = tw.div`flex justify-between items-center`;
const UberLogo = tw.img` h-14`;
const Profile = tw.div`flex items-center`;
const Name = tw.div`mr-4 text-sm`;
const UberImage = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px`;
const ActionButtons = tw.div`flex mt-4 `;
const ActionButton = tw.div`bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center rounded-lg transform hover:scale-105 transition`;
const ActionButtonImage = tw.img`h-3/5`;
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-3 flex items-center mt-8 `;
