import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { flexCenterStart } from "../../styles/styledHelpers";
import Button from "../common/Button";
import EmptyContent from "../common/EmptyContent";
import BlockLists from "../ui/BlockLists";

const Container = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
  border-right: var(--border-2);
  min-width: 20rem;
  max-width: 25rem;
  height: 100%;
`;

const TitleContainer = styled.div`
  ${flexCenterStart}
  padding: 1.5rem 2rem;
  height: 100%;
  max-height: 7rem;
  border-bottom: var(--border-2);
`;

const Title = styled.h3`
  font-size: var(--fs-l);
  color: var(--fc-black);
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  padding: 2rem;

  & button {
    width: 100%;
  }
`;

function ProjectNav() {
  // const { title, blocks } = useAppSelector(
  //   (state) => state.currentProject.currentProject
  // );
  const title = "sadasdas";
  const blocks = "";

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      {blocks ? <BlockLists /> : <EmptyContent>Проект пуст</EmptyContent>}
      <ButtonContainer>
        <Button onClick={() => console.log("click")}>Блок</Button>
      </ButtonContainer>
    </Container>
  );
}

export default ProjectNav;
