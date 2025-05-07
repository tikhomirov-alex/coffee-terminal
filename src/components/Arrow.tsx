import type { CSSProperties } from "react";
import type React from "react";

interface ArrowProps {
  color: React.CSSProperties['color'];
}

export const Arrow: React.FC<ArrowProps & CSSProperties> = ({ color, ...style }) => {
  return (
    <svg style={{ ...style }} xmlns="http://www.w3.org/2000/svg" width="451" height="610" viewBox="0 0 451 610" fill="none">
      <path d="M218.508 -330C248.903 -299.605 450.19 143.082 450.19 143.082L149.764 609.904H0L185.795 151.761L72.0636 -330H218.508Z" fill={color} />
    </svg>
  );
};
