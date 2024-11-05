import styled from "styled-components";
import { ITask } from "../../../../types/IData";
import { clipPath, flexCenterCenter } from "../../../../styles/styledHelpers";
import Tag from "../../../common/Tag";

const Top = styled.div<{ $isPrimary: boolean }>`
  ${flexCenterCenter}
  background-color: ${(props) =>
    props.$isPrimary ? "var(--bg-blue)" : "var(--bg-white)"};
  flex-wrap: wrap;
  padding: 0.8rem;
  padding-right: 0;
  gap: 0.5rem;
  width: fit-content;
  max-width: calc(100% - 6rem);
  position: relative;

  &::before {
    ${clipPath}
    width: 4rem;
    background-color: ${(props) =>
      props.$isPrimary ? "var(--bg-blue)" : "var(--bg-white)"};
  }
`;

interface CardTopProps {
  data: Pick<ITask, "tags" | "isPrimary">;
}

function CardTop({ data }: CardTopProps) {
  const { tags, isPrimary } = data;

  return (
    <Top $isPrimary={isPrimary}>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} isPrimary={isPrimary} />
      ))}
    </Top>
  );
}

export default CardTop;
