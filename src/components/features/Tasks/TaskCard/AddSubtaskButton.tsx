import { HiOutlinePlus } from "react-icons/hi";
import styled from "styled-components";

const Container = styled.div<{ $isPrimary: boolean }>`
  border-top: 1px solid
    ${(props) =>
      props.$isPrimary ? "var(--bg-blue-light)" : "var(--border-card)"};
  padding: 1rem 0;
  width: 100%;
  color: var(--fc-black);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: start;
  text-align: start;
  padding: 0.5rem 0.5rem;
  border-radius: var(--br-s);
  width: 100%;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

interface AddSubtaskButtonProps {
  isPrimary: boolean;
}

function AddSubtaskButton({ isPrimary }: AddSubtaskButtonProps) {
  return (
    <Container $isPrimary={isPrimary}>
      <Button>
        <HiOutlinePlus size="2rem" />
        <span>подзадача</span>
      </Button>
    </Container>
  );
}

export default AddSubtaskButton;
