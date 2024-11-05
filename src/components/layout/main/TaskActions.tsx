import styled from "styled-components";
import Button from "../../common/Button";
import SortButton from "../../features/Tasks/Filters/SortButton";
import FilterButton from "../../features/Tasks/Filters/FilterButton";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

function TaskActions() {
  return (
    <Container>
      <Button onClick={() => console.log("click task")}>Задача</Button>
      <SortButton />
      <FilterButton />
    </Container>
  );
}

export default TaskActions;
