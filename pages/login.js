import React, { useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";
const Login = () => {
    const router = useRouter();
    useEffect(() => {
        onAuthStateChanged(auth,user=> {
            if (user) {
                router.push("/");
            }
        });
    },[])
	return (
		<Wrapper>
			<UberLogo src="../logo.png" />
			<Title> Login in to access your account</Title>
			<HeadImage src="../login-img.png" />
			<SignInButton onClick={()=>signInWithPopup(auth,provider)} > Sign in with Google</SignInButton>
		</Wrapper>
	);
};

export default Login;
const Wrapper = tw.div`flex flex-col h-screen bg-gray-200 h-screen w-screen p-4`;
const SignInButton = tw.button`bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer`;
const UberLogo = tw.img`h-20 w-auto object-contain`;
const Title = tw.div`text-5xl pt-4 text-gray-500`;
const HeadImage = tw.img`object-contain w-full mt-4`;
