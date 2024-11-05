import { HiChevronDown } from "react-icons/hi";
import { HiBarsArrowDown } from "react-icons/hi2";
import styled from "styled-components";
import {
  commonButton,
  commonButtonWhite,
} from "../../../../styles/styledHelpers";

const Button = styled.button`
  ${commonButton};
  ${commonButtonWhite}
`;

function SortButton() {
  return (
    <Button>
      <HiBarsArrowDown size="2rem" />
      <span>Сортировка</span>
      <HiChevronDown color={"var(--bg-gray-2)"} size="2.4rem" />
    </Button>
  );
}

export default SortButton;
