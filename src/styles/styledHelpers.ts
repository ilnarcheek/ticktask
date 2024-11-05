import { css } from "styled-components";

export const commonButton = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-radius: var(--br-s);
  white-space: nowrap;
`;

export const commonButtonWhite = css`
  background-color: var(--bg-white);
  border: var(--border-1);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
`;

export const flexCenterCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexCenterStart = css`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const clipPath = css`
  content: "";
  position: absolute;
  height: calc(100% + 2px);
  bottom: -1px;
  left: calc(100% - 1px);
  clip-path: url("#card-clip");
`;
