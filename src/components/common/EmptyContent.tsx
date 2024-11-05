import styled from "styled-components";
import { flexCenterCenter } from "../../styles/styledHelpers";

const EmptyContainer = styled.div`
  ${flexCenterCenter}
  height: 100%;
  font-size: var(--fs-l);
`;

interface EmptyContentProps {
  children: string;
}

function EmptyContent({ children }: EmptyContentProps) {
  return (
    <EmptyContainer>
      <p>{children}</p>
    </EmptyContainer>
  );
}

export default EmptyContent;
