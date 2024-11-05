import styled from "styled-components";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import SearchBar from "../layout/SearchBar";
import ProjectNav from "../layout/ProjectNav";
import Main from "../layout/Main";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  grid-template-rows: 7rem 1fr;
  width: 100%;
  height: 100dvh;
`;

const SidebarContainer = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;

  display: flex;
  flex-direction: column;

  max-width: 25rem;
`;

function Project() {
  return (
    <StyledContainer>
      <SidebarContainer>
        <Header />
        <Sidebar />
      </SidebarContainer>
      <SearchBar />
      <ProjectNav />
      <Main />
    </StyledContainer>
  );
}

export default Project;
