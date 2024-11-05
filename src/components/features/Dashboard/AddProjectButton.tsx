import { HiOutlinePlus } from "react-icons/hi2";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: var(--br-m);
  background-color: var(--bg-black);
  white-space: nowrap;
  width: 20rem;
  min-height: 5rem;
  position: relative;
  transition: all 0.3s ease-out;

  &::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 4rem;
    border-radius: var(--br-full);
    border: 2px solid var(--bg-white);
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  &:hover {
    transform: scale(1.05);
    background-color: #202020;

    &::after {
      opacity: 1;
    }
  }
`;

interface AddProjectButtonProps {
  onClick: () => void;
}

function AddProjectButton({ onClick }: AddProjectButtonProps) {
  return (
    <Button onClick={onClick}>
      <HiOutlinePlus size="3rem" color="var(--bg-white)" />
    </Button>
  );
}

export default AddProjectButton;
