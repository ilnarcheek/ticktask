import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import styled from "styled-components";
import { IBlockInfo } from "../../../types/IProject";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Category = styled.button`
  font-size: var(--fs-m);
  color: var(--fc-gray);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LisContainer = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$isOpen ? "1fr" : "0fr")};
  transition: all 0.3s ease-in;
  width: 100%;
`;

const StyledList = styled.ul`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Item = styled.li`
  position: relative;
`;

const TaskButton = styled.button`
  text-align: start;
  padding: 1rem 1.5rem;
  white-space: nowrap;
  width: 100%;
  border-radius: var(--br-s);
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: var(--fc-black);
    background-color: var(--bg-gray-1);
  }
`;

const ChevronIcon = styled(HiChevronDown)<{ $isOpen: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

interface ListProps {
  type: string;
  blocks: IBlockInfo[];
}

function List({ type, blocks }: ListProps) {
  const [isOpen, setIsOpen] = useState(true);

  const expandList = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Container>
      <Category onClick={expandList}>
        {type === "all"
          ? "Весь проект"
          : type === "done"
          ? "Готовы"
          : "В работе"}
        <ChevronIcon $isOpen={isOpen} size="2rem" color="var(--bg-gray-2)" />
      </Category>
      <LisContainer $isOpen={isOpen}>
        <StyledList>
          {blocks.map((block) => (
            <Item key={block.id}>
              <TaskButton>{block.title}</TaskButton>
            </Item>
          ))}
        </StyledList>
      </LisContainer>
    </Container>
  );
}

export default List;
