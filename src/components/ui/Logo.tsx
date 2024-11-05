import styled from "styled-components";

const Image = styled.img<{ $size: string }>`
  font-size: var(--fs-m);
  width: ${(props) => props.$size};
`;

interface LogoProps {
  size: string;
}

function Logo({ size }: LogoProps) {
  return <Image $size={size} src="Logo.svg" alt="Tick-Task logo" />;
}

export default Logo;
