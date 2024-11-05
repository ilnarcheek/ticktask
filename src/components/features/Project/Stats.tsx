import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";
import { getSubtasksCount } from "../../../utils/functions";
import { useAppSelector } from "../../../store/hooks";

const Container = styled.div`
  background-color: var(--bg-black);
  border-radius: var(--br-full);
  padding: 1rem;
  padding-left: 2rem;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  width: 20rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
`;

const Title = styled.span`
  font-size: var(--fs-s);
  color: var(--fc-gray);
  font-weight: 500;
`;

const Counter = styled.span`
  color: var(--bg-white);
`;

const ProgressBar = styled(CircularProgressbar)`
  width: 4rem;
`;

function Stats() {
  // const { tasks } = useAppSelector((state) => state.currentBlock.currentBlock);
  // const [numberOfDone, numberOfAll] = getSubtasksCount(tasks);

  const numberOfDone = 10;
  const numberOfAll = 20;

  return (
    <Container>
      <Info>
        <Title>Подзадачи</Title>
        <Counter>
          {numberOfDone} из {numberOfAll}
        </Counter>
      </Info>
      <ProgressBar
        maxValue={numberOfAll}
        value={numberOfDone}
        strokeWidth={15}
        styles={buildStyles({
          pathColor: "var(--bg-white)",
          trailColor: "var(--bg-gray-2)",
          strokeLinecap: "round",
        })}
      />
    </Container>
  );
}

export default Stats;
