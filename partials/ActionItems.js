import tw from "tailwind-styled-components/dist/tailwind";

export default function ActionItems({children}) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = tw.div`
  flex-1 p-4
`;
