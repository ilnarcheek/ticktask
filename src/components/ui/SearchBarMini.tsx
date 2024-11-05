import { HiMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";
import { flexCenterStart } from "../../styles/styledHelpers";

const SearchContainer = styled.div`
  ${flexCenterStart}
  background-color: var(--bg-gray-1);
  border-radius: var(--br-s);
  padding: 1rem 1.5rem 1rem 1rem;
  gap: 1rem;
`;

const SearchInput = styled.input`
  color: var(--fc-black);
  width: 100%;

  &::placeholder {
    color: var(--fc-gray);
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

function SearchBarMini() {
  return (
    <SearchContainer>
      <HiMagnifyingGlass size="2.4rem" />
      <SearchInput type="text" placeholder="Поиск" />
    </SearchContainer>
  );
}

export default SearchBarMini;
