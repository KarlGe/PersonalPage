import { styled } from "@linaria/react";
import { mediaQueries } from "../../../helpers/styleHelpers";

type GridWrapperProps = {
  columns: number;
};

export const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  ${mediaQueries.sm} {
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  }
`;

type GridItemProps = {
  columns: number;
  rows: number;
};

export const GridItem = styled.div<GridItemProps>`
  ${mediaQueries.sm} {
    grid-row: span ${(props) => props.rows};
    grid-column: span ${(props) => props.columns};
  }
`;
