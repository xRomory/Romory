export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export type LetterGlitchProps = {
  className?: string;
  glitchColors: string[];
  glitchSpeed: number;
  centerVignette: boolean;
  outerVignette: boolean;
  smooth: boolean;
}