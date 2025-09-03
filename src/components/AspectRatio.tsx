import React from "react";

import "./../index.css";

export interface AspectRatioProps {
  aspectRatio: number;
  children: any;
}

export const AspectRatio = ({ aspectRatio, children }: AspectRatioProps) => (
  <div style={{ position: "relative", paddingTop: `${100 / aspectRatio}%` }}>
    <div className="AspectRatio--content">{children}</div>
  </div>
);
