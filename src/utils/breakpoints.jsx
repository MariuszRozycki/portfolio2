export const breakpoints = {
  tablet: "480px",
  laptop: "768px",
  desktop: "1024px",
  large: "1200px",
  extraLarge: "1440px",
};

export const device = {
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  large: `(min-width: ${breakpoints.large})`,
  extraLarge: `(min-width: ${breakpoints.extraLarge})`,
};
