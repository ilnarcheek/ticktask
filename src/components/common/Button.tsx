import { HiMiniPlus } from "react-icons/hi2";
import styled from "styled-components";
import { commonButton } from "../../styles/styledHelpers";

const StyledButton = styled.button<{ $icon: boolean }>`
  color: var(--fc-white);
  background-color: var(--bg-black);
  ${commonButton};
  display: ${(props) => (props.$icon ? "flex" : "inline-block")};

  &:hover {
    background-color: var(--bg-gray-2);
  }
`;

interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  icon?: boolean;
}

function Button({ children, onClick, icon = true }: ButtonProps) {
  return (
    <StyledButton $icon={icon} onClick={onClick}>
      {children}
      {icon && <HiMiniPlus size="2rem" />}
    </StyledButton>
  );
}

export default Button;
