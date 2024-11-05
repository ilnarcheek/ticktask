import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";

const Container = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-bottom: var(--border-2);
`;

const Search = styled.input`
  color: var(--fc-black);
  font-size: var(--fs-m);
  border-radius: 0;
  width: 50%;

  &::placeholder {
    color: var(--fc-gray);
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

function SearchBar() {
  return (
    <Container>
      <HiMagnifyingGlass size="2.4rem" />
      <Search type="text" placeholder="Введите название задачи..." />
    </Container>
  );
}

export default SearchBar;
