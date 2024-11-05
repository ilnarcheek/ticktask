import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import List from "../features/Tasks/List";

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  padding: 2rem;
`;

function BlockLists() {
  const { blocks } = useAppSelector(
    (state) => state.currentProject.currentProject
  );

  const onGoing = blocks.filter((block) => {
    if (!block.isDone) return block;
  });
  const done = blocks.filter((block) => {
    if (block.isDone) return block;
  });

  return (
    <TasksContainer>
      <List blocks={blocks} type="all" />
      {onGoing ? <List blocks={onGoing} type="onGoing" /> : null}
      {done ? <List blocks={done} type="done" /> : null}
    </TasksContainer>
  );
}

export default BlockLists;
