import tw from "tailwind-styled-components/dist/tailwind";
import React, { useEffect, useState } from "react";
import Map from "../partials/Map";
import ActionItems from "../partials/ActionItems";
import Link from "next/link";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth, provider } from "../firebase";
export default function Home() {
	const [u, setU] = useState(null);
	const router = useRouter();
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setU({
					name: user.displayName,
					photoUrl: user.photoURL,
				});
			} else {
				setU(null);
				router.push("./login");
			}
		});
	}, []);

	return (
		<Wrapper>
			<Map />
			<ActionItems>
				<Header>
					<UberLogo src="./logo.png" />
					<Profile>
						<Name> {u && u.name} </Name>
						<UberImage src={u && u.photoUrl} onClick={()=>signOut(auth)} />
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
const UberImage = tw.img`h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer`;
const ActionButtons = tw.div`flex mt-4 `;
const ActionButton = tw.div`bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center rounded-lg transform hover:scale-105 transition`;
const ActionButtonImage = tw.img`h-3/5`;
const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-3 flex items-center mt-8 `;
