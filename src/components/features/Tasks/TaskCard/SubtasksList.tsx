import { IconContext } from "react-icons";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { LiaCircleSolid } from "react-icons/lia";
import styled from "styled-components";
import { ISubtask } from "../../../../types/IData";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.7rem;
  width: 100%;
`;

const Item = styled.li<{ $isPrimary: boolean }>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.7rem;
  font-size: var(--fs-s);
  width: 100%;
  color: ${(props) =>
    props.$isPrimary ? "var(--fc-black)" : "var(--fc-gray)"};

  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
`;

interface SubtasksListProps {
  subtasks: ISubtask[] | null;
  isPrimary: boolean;
}

function SubtasksList({ subtasks = null, isPrimary }: SubtasksListProps) {
  if (!subtasks) return null;

  return (
    <IconContext.Provider value={{ size: "2rem" }}>
      <List>
        {[...subtasks]
          .sort((a, b) => Number(b.isDone) - Number(a.isDone))
          .map((subtask, i) => (
            <Item $isPrimary={isPrimary} key={i}>
              {subtask.isDone ? (
                <Icon>
                  <HiMiniCheckCircle />
                </Icon>
              ) : (
                <Icon>
                  <LiaCircleSolid strokeWidth={2} />
                </Icon>
              )}
              <p>{subtask.description}</p>
            </Item>
          ))}
      </List>
    </IconContext.Provider>
  );
}

export default SubtasksList;
