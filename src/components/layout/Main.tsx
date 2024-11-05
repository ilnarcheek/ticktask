import styled from "styled-components";
import TasksBoard from "./main/TasksBoard";
import TaskActions from "./main/TaskActions";
import ProjectInfo from "./main/AboutProject";

const StyledMain = styled.main`
  grid-row: 2/3;
  grid-column: 3/4;

  padding: 2rem;
  background-color: var(--bg-gray-0);
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Main() {
  return (
    <StyledMain>
      <ProjectInfo />
      <TaskActions />
      <TasksBoard />
    </StyledMain>
  );
}

export default Main;
