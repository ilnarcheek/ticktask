import { HiChevronDown } from "react-icons/hi";
import { HiOutlineFunnel } from "react-icons/hi2";
import styled from "styled-components";
import {
  commonButton,
  commonButtonWhite,
} from "../../../../styles/styledHelpers";

const Button = styled.button`
  ${commonButton}
  ${commonButtonWhite}
`;

function FilterButton() {
  return (
    <Button>
      <HiOutlineFunnel size="2rem" />
      <span>Фильтр</span>
      <HiChevronDown color={"var(--bg-gray-2)"} size="2.4rem" />
    </Button>
  );
}

export default FilterButton;
