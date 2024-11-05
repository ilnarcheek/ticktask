import styled from "styled-components";

const Container = styled.div``;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Image = styled.div<{ $size: string; $background: string }>`
  border-radius: var(--br-full);
  border: 2px solid ${(props) => props.$background};
  background-color: red;
  width: ${(props) => (props.$size === "small" ? "3rem" : "4rem")};
  height: ${(props) => (props.$size === "small" ? "3rem" : "4rem")};

  &:not(:first-child) {
    margin-left: ${(props) => (props.$size === "small" ? "-1rem" : "-2rem")};
  }
`;

const NumberOfUsers = styled.div<{ $size: string; $background: string }>`
  width: ${(props) =>
    props.$size === "small" ? "calc(3rem - 2px)" : "calc(4rem - 2px)"};
  height: ${(props) =>
    props.$size === "small" ? "calc(3rem - 2px)" : "calc(4rem - 2px)"};
  background-color: var(--bg-black);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--br-full);
  margin-left: ${(props) => (props.$size === "small" ? "-1rem" : "-2rem")};

  & span {
    font-size: ${(props) =>
      props.$size === "small" ? "var(--fs-m)" : "var(--fs-l1)"};
    color: var(--bg-white);
  }
`;

interface StackedAvatarsProps {
  size?: string;
  background: string;
  // users: string[]
}

function StackedAvatars({ size = "medium", background }: StackedAvatarsProps) {
  const users = [1, 2, 3, 4, 6, 7];

  return (
    <Container>
      <List>
        {users.map((user, i) => {
          if (i <= 3)
            return (
              <Image $size={size} $background={background} key={user}></Image>
            );
          if (i === 4 && users.length === 5)
            return (
              <Image $size={size} $background={background} key={user}></Image>
            );
          if (i === 5)
            return (
              <NumberOfUsers $size={size} $background={background} key={"end"}>
                <span>{users.length - 4}</span>
              </NumberOfUsers>
            );
          else return;
        })}
      </List>
    </Container>
  );
}

export default StackedAvatars;
