import styled from "styled-components";
import NavMenu from "../ui/NavMenu";
import SearchBarMini from "../ui/SearchBarMini";

const StyledSidebar = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  border-right: var(--border-2);
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SearchBarMini />
      <NavMenu />
    </StyledSidebar>
  );
}

export default Sidebar;
