export const themes = {
  light: {
    label: "light",
    className: "theme-light",
  },
  dark: {
    label: "dark",
    className: "theme-dark",
  },
  nature: {
    label: "nature",
    className: "theme-nature",
  },
  space: {
    label: "space",
    className: "theme-space",
  },
  pastel: {
    label: "pastel",
    className: "theme-pastel",
  },
  altoContraste: {
    label: "contrast",
    className: "theme-high-contrast",
  },
} as const;

export type ThemeKey = keyof typeof themes;
