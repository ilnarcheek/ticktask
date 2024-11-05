import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenterStart } from "../../../styles/styledHelpers";
import { IProject } from "../../../types/IProject";
import { formatDate } from "../../../utils/functions";
import { useAppDispatch } from "../../../store/hooks";
import { fetchProjectData } from "../../../store/slices/currentProjectSlice";

const Button = styled.button`
  ${flexCenterStart}
  flex-shrink: 0;
  flex-direction: column;
  align-items: start;
  color: var(--fc-white);
  padding: 2rem;
  border-radius: var(--br-m);
  background-color: var(--bg-black);
  width: 20rem;
  height: 20rem;
  gap: 0.5rem;
  transition: all 0.3s ease-out;
  text-align: start;

  &:hover {
    transform: scale(1.05);
    background-color: #202020;
  }
`;

const Title = styled.span`
  font-size: var(--fs-l);
  font-weight: 500;
`;
const Description = styled.span`
  font-size: var(--fs-s);
  margin-bottom: 1rem;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 1rem;
`;

interface ProjectButtonProps {
  project: IProject;
}

function ProjectButton({ project }: ProjectButtonProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { title, description, id, start_date, end_date } = project;

  const handleClick = () => {
    navigate(`/project/${id}`);
    dispatch(fetchProjectData(id));
  };

  return (
    <Button onClick={handleClick}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {/* <span>
        {blocks
          ? `Блоков сделано: ${blocks.filter((block) => block.isDone).length}/${
              blocks.length
            }`
          : "Проект пуст"}
      </span> */}
      <DateContainer>
        <span>С: {formatDate(start_date)}</span>
        {end_date && <span>По: {formatDate(end_date)}</span>}
      </DateContainer>
    </Button>
  );
}

export default ProjectButton;
