import styled from "styled-components";
import { IColumn, ITask } from "../../../types/IData";
import { StrictModeDroppable } from "../../../utils/StrictModeDroppable";
import Card from "./TaskCard/Card";
import { flexCenterStart } from "../../../styles/styledHelpers";

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  flex-shrink: 0;
`;

const HeaderContainer = styled.div`
  ${flexCenterStart}
  margin-bottom: 1rem;
  padding-left: 1rem;
  gap: 0.5rem;

  & sup {
    font-size: var(--fs-s);
    transform: translateY(-0.5rem);
  }
`;

const Icon = styled.div<{ $color: string }>`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.$color};
  border-radius: var(--br-full);
`;

const Header = styled.h2`
  font-size: var(--fs-l1);
`;

const StyledCols = styled.div<{ $isDraggingOver: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: var(--br-l);
  padding: 0.5rem 0;
  min-height: 25rem;

  transition: background-color 0.3s ease-in-out;
  transition: box-shadow 0.3s ease-in-out;
  background-color: ${(props) =>
    props.$isDraggingOver ? "rgba(0, 0, 0, 0.05)" : "none"};
  box-shadow: ${(props) =>
    props.$isDraggingOver ? "inset 0px 0px 10px rgba(0, 0, 0, 0.2)" : "none"};
`;

interface TaskColsProps {
  column: IColumn;
  tasks: ITask[];
  isDropDisabled: boolean;
}

function Cols({ column, tasks, isDropDisabled }: TaskColsProps) {
  return (
    <Col>
      <HeaderContainer>
        <Icon $color={column.color} />
        <Header>{column.title}</Header>
        <sup>({tasks.length})</sup>
      </HeaderContainer>
      <StrictModeDroppable
        droppableId={column.id}
        isDropDisabled={isDropDisabled}
      >
        {(provided, snapshot) => (
          <StyledCols
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </StyledCols>
        )}
      </StrictModeDroppable>
    </Col>
  );
}

export default Cols;
