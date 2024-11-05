import styled from "styled-components";
import StackedAvatars from "../../../common/StackedAvatars";
import { ITask } from "../../../../types/IData";

const Bottom = styled.div<{ $isPrimary: boolean }>`
  padding: 1rem 1.5rem;
  background-color: ${(props) =>
    props.$isPrimary ? "var(--bg-blue)" : "var(--bg-white)"};
  border-top: 1px solid
    ${(props) =>
      props.$isPrimary ? "var(--bg-blue-light)" : "var(--border-card)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface CardBottomProps {
  data: Pick<ITask, "isPrimary">;
}

function CardBottom({ data }: CardBottomProps) {
  const { isPrimary } = data;

  return (
    <Bottom $isPrimary={isPrimary}>
      <StackedAvatars
        size="small"
        background={isPrimary ? "var(--bg-blue)" : "var(--bg-white)"}
      />
    </Bottom>
  );
}

export default CardBottom;
