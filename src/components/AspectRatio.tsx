import React from "react";

export interface AspectRatioProps {
  aspectRatio: number;
  children: any;
}

export const AspectRatio = ({ aspectRatio, children }: AspectRatioProps) => (
  <div style={{ position: 'relative', paddingTop: `${100 / aspectRatio}%` }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  </div>
);
