import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ITask } from "../../../../types/IData";
import CardTop from "./CardTop";
import CardBody from "./CardBody";
import CardBottom from "./CardBottom";

const StyledCard = styled.div<{ $isDragging: boolean; $isPrimary: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: var(--br-m);
  overflow: hidden;
  margin: 1rem 1rem;

  filter: ${(props) =>
    props.$isDragging
      ? "drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.5))"
      : props.$isPrimary
      ? `drop-shadow( 1px  0px 0px var(--bg-black)) 
        drop-shadow(-1px  0px 0px var(--bg-black))
        drop-shadow( 0px  1px 0px var(--bg-black)) 
        drop-shadow( 0px -1px 0px var(--bg-black))`
      : `drop-shadow( 2px  0px 0px var(--border-card)) 
        drop-shadow(-2px  0px 0px var(--border-card))
        drop-shadow( 0px  2px 0px var(--border-card)) 
        drop-shadow( 0px -2px 0px var(--border-card))`};
`;

interface CardProps {
  task: ITask;
  index: number;
}

function Card({ task, index }: CardProps) {
  const { title, description, tags, endDate, subtasks, isPrimary } = task;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <StyledCard
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          $isDragging={snapshot.isDragging}
          $isPrimary={isPrimary}
        >
          <CardTop data={{ tags, isPrimary }} />
          <CardBody
            data={{ title, description, endDate, subtasks, isPrimary }}
          />
          <CardBottom data={{ isPrimary }} />
        </StyledCard>
      )}
    </Draggable>
  );
}

export default Card;
