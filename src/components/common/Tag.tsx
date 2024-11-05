import { HiClock } from "react-icons/hi2";
import styled from "styled-components";
import { getColorByTime, getTime } from "../../utils/functions";

const StyledTag = styled.div<{ $color: string[] }>`
  font-size: var(--fs-s1);
  background-color: ${(props) => props.$color[0]};
  padding: 0.5rem 0.7rem;
  border-radius: var(--br-full);
  width: fit-content;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.$color[1]};
`;

interface TagProps {
  time?: string;
  text?: string;
  isPrimary: boolean;
}

function Tag({ time = "", text = "", isPrimary }: TagProps) {
  if (time) {
    const formattedTime = getTime(time);
    const color = isPrimary
      ? ["var(--bg-blue-light)", "var(--fc-white)"]
      : getColorByTime(time);

    return (
      <StyledTag $color={color}>
        <HiClock />
        <span>{formattedTime}</span>
      </StyledTag>
    );
  }

  return (
    <StyledTag
      $color={
        isPrimary
          ? ["var(--bg-white)", "var(--fc-black)"]
          : ["var(--bg-blue-light-1)", "var(--fc-blue)"]
      }
    >
      <span>{text}</span>
    </StyledTag>
  );
}

export default Tag;
