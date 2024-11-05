import { ReactNode } from "react";
import styled from "styled-components";

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const Message = styled.p`
  position: absolute;
  bottom: -1.5rem;
  color: var(--fc-red);
  font-size: var(--fs-s);
`;

interface InputContainerProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
  message?: string;
}

function InputContainer({
  label,
  htmlFor,
  children,
  message = "",
}: InputContainerProps) {
  return (
    <StyledInputContainer>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      <Message>{message}</Message>
    </StyledInputContainer>
  );
}

export default InputContainer;
