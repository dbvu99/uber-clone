import tw from "tailwind-styled-components/dist/tailwind";import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { useEffect } from "react";
import Map from "../partials/Map";
import ActionItems from "../partials/ActionItems";
import Link from "next/link";

export default function Home() {
	return (
		<Wrapper>
			<Map></Map>
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
							<ActionButtonImage src="https://th.bing.com/th/id/R.7fe6a3d0b64ab825d92700ccbe1a9e18?rik=y6QlzFxZSmTFBQ&pid=ImgRaw&r=0" />
							Ride
						</ActionButton>
					</Link>
					<ActionButton>
						<ActionButtonImage src="https://th.bing.com/th/id/R.eab5b750b2078bd5bb25de3dcee1b778?rik=o%2bAwYe9WNGc2Iw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbicycle%2fbicycle_PNG5376.png&ehk=WZRAgR0IYSJN0fI998HQYps6mQk3W6KGyAwGU3YaGi8%3d&risl=&pid=ImgRaw&r=0" />
						wheels
					</ActionButton>
					<ActionButton>
						<ActionButtonImage src="https://webstockreview.net/images/calendar-icon-png-transparent-12.png" />
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
