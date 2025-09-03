import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "aha-box": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
