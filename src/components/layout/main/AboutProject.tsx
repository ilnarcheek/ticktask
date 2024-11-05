import styled from "styled-components";
import StackedAvatars from "../../common/StackedAvatars";
import Description from "../../features/Project/Description";
import EndsToday from "../../features/Project/EndsToday";
import Stats from "../../features/Project/Stats";

const Container = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: minmax(50rem, 1fr) max-content min-content;
  grid-template-rows: repeat(2, min-content);
`;

const UsersSubstasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-row: 1/-1;
  align-self: self-end;
`;

function AboutProject() {
  return (
    <Container>
      <Description />
      <EndsToday />
      <UsersSubstasksContainer>
        <StackedAvatars background="var(--bg-gray-0)" />
        <Stats />
      </UsersSubstasksContainer>
    </Container>
  );
}

export default AboutProject;
