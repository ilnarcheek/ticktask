import { HiCalendarDays } from "react-icons/hi2";
import styled from "styled-components";
import { getLatestEndDate, getSubtasksCount } from "../../../utils/functions";
import { useAppSelector } from "../../../store/hooks";
import { clipPath } from "../../../styles/styledHelpers";

const HeaderContainer = styled.div`
  grid-row: 1 / 2;

  color: var(--fc-black);
  font-weight: 500;
  background-color: #ffd262;
  padding: 1.5rem 0 1rem 2rem;
  width: fit-content;
  border-radius: var(--br-m) 0 0 0;
  position: relative;

  &::after {
    ${clipPath}
    background-color: #ffd262;
    width: 5rem;
  }
`;

const Header = styled.h3`
  font-size: var(--fs-l1);
`;

const InfoContainer = styled.div`
  grid-row: 2 / 3;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffd262;
  padding: 1.5rem 2rem;
  border-radius: 0 var(--br-m) var(--br-m);
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;

  & p {
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translate(65%, -30%);
    width: 50rem;
    height: 50rem;
    border: 15px solid #fdc842;
    border-radius: 50%;
    background-color: transparent;
  }

  &::before {
    content: "";
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translate(65%, -30%);
    width: 60rem;
    height: 60rem;
    border: 15px solid #fdc842;
    border-radius: 50%;
    background-color: transparent;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: var(--fs-s);
`;

const Progress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 15rem;
  height: 5px;
  border-radius: 5px;
  background-color: var(--bg-gray-1);
  overflow: hidden;

  &::-webkit-progress-value {
    background-color: var(--bg-black);
    border-radius: 0.5rem;
  }

  &::-webkit-progress-bar {
    background-color: var(--bg-gray-1);
    border-radius: 0.5rem;
  }

  &::-moz-progress-bar {
    background-color: var(--bg-black);
    border-radius: 0.5rem;
  }
`;

function Description() {
  // const { title: blockTitle, tasks } = useAppSelector(
  //   (state) => state.currentBlock.currentBlock
  // );
  // const { title: projectTitle } = useAppSelector(
  //   (state) => state.currentProject.currentProject
  // );

  // const endDate = getLatestEndDate(tasks);
  // const [numberOfDone, numberOfAll] = getSubtasksCount(tasks);
  // const percenatage = Math.round((numberOfDone / numberOfAll) * 100);

  const blockTitle = "sadasd";
  const projectTitle = "dasdasdas";
  const endDate = "dasdasd";
  const percenatage = 10;

  return (
    <>
      <HeaderContainer>
        <Header>{blockTitle}</Header>
      </HeaderContainer>
      <InfoContainer>
        <p>
          {projectTitle} / {blockTitle}
        </p>
        <Date>
          <HiCalendarDays />
          <p>До: {endDate}</p>
        </Date>
        <ProgressContainer>
          <Progress id="current-project" max={100} value={percenatage} />
          <label htmlFor="current-project">{percenatage}% Готово</label>
        </ProgressContainer>
      </InfoContainer>
    </>
  );
}

export default Description;
