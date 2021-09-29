import {
  FlattenSimpleInterpolation,
  css,
} from "styled-components";

type Type =
  | "desktop"
  | "desktopMedium"
  | "greaterThanPhone"
  | "greaterThanTablet"
  | "phone"
  | "tablet";

const types: Record<Type, string> = {
  desktop: "@media only screen and (min-width: 991px)",
  desktopMedium: "min-width: 1121px",
  greaterThanPhone: "@media (min-width: 768px)",
  greaterThanTablet: "@media (min-width: 991px)",
  phone: "@media only screen and (max-width: 767px)",
  tablet:
    "@media only screen and (min-width: 768px) and (max-width: 991px)",
};

const mediaQuery = (
  type: Type,
  style: FlattenSimpleInterpolation | string,
): FlattenSimpleInterpolation =>
  css`
    ${types[type]} {
      ${style}
    }
  `;

export default mediaQuery;
