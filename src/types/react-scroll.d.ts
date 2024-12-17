
declare module 'react-scroll' {
  export interface ScrollProps {
    duration?: number; // Use the actual type, e.g., 'number'
    delay?: number;
    smooth?: boolean | string;
    offset?: number;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  }

  export function scroller(): ScrollProps;
  export function animateScroll(): ScrollProps;
}
