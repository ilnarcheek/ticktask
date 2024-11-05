import styled from "styled-components";
import { flexCenterStart } from "../../styles/styledHelpers";
import Logo from "../ui/Logo";

const StyledHeader = styled.header`
  ${flexCenterStart}
  height: 7rem;
  padding: 2rem;
  gap: 2rem;
  color: var(--fc-black);
  font-size: var(--fs-l1);
  font-weight: 500;
  border-right: var(--border-2);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo size="4rem" />
    </StyledHeader>
  );
}

export default Header;
