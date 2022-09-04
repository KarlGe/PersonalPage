import { dimensions } from "../config/vars";

export const mediaQueries = {
  xs: `@media screen and (min-width: ${dimensions.breakpoints.xs})`,
  sm: `@media screen and (min-width: ${dimensions.breakpoints.sm})`,
  md: `@media screen and (min-width: ${dimensions.breakpoints.md})`,
  lg: `@media screen and (min-width: ${dimensions.breakpoints.lg})`,
  xl: `@media screen and (min-width: ${dimensions.breakpoints.xl})`,
};
