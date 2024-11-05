import styled from "styled-components";

const Container = styled.div`
  grid-row: 1 / -1;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--bg-gray-1);
  border-radius: var(--br-m);
`;

const Header = styled.h4`
  color: var(--fc-black);
  font-size: var(--fs-l);
  font-weight: 500;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function EndsToday() {
  return (
    <Container>
      <Header>Последний день:</Header>
      <List>
        <li>Секс секс секс секс секс фывфы</li>
        <li>Секс секс секс секс секс фывфы</li>
        <li>Секс секс секс секс секс фывфы</li>
        <li>Секс секс секс секс секс фывфы</li>
      </List>
    </Container>
  );
}

export default EndsToday;
