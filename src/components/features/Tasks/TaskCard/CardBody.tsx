import styled from "styled-components";
import { ITask } from "../../../../types/IData";
import Tag from "../../../common/Tag";
import SubtasksList from "./SubtasksList";
import AddSubtaskButton from "./AddSubtaskButton";

const Body = styled.div<{ $isPrimary: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${(props) =>
    props.$isPrimary ? "var(--bg-blue)" : "var(--bg-white)"};
  padding: 1rem 1.5rem 0;
  border-radius: 0 var(--br-m) 0 0;
  gap: 1rem;
`;

const Title = styled.p`
  font-size: var(--fs-l);
  color: var(--fc-black);
  font-weight: 500;
`;

const Description = styled.p<{ $isPrimary: boolean }>`
  color: ${(props) =>
    props.$isPrimary ? "var(--fc-black)" : "var(--fc-gray)"};
  font-size: var(--fs-m);
  margin-bottom: 0.8rem;
`;

interface CardBodyProps {
  data: Omit<ITask, "id" | "tags">;
}

function CardBody({ data }: CardBodyProps) {
  const { title, description, endDate, subtasks, isPrimary } = data;

  return (
    <Body $isPrimary={isPrimary}>
      <Title>{title}</Title>
      <Description $isPrimary={isPrimary}>{description}</Description>
      <Tag time={endDate} isPrimary={isPrimary} />
      <SubtasksList subtasks={subtasks} isPrimary={isPrimary} />
      <AddSubtaskButton isPrimary={isPrimary} />
    </Body>
  );
}

export default CardBody;
