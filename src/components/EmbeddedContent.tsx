import React from "react";
import { AspectRatio } from "./AspectRatio";

import "./../index.css";

export interface EmbeddedContentProps {
  src: string;
  aspectRatio?: number;
}

/**
 * Embeds content via an iframe. Constrains element size based on aspect ratio. Sanitizes user input.
 * @param src URL of content to embed
 * @param aspectRatio Optional aspect ratio for content expressed as a float. Defaults to 16:9 (1.7778)
 */
export const EmbeddedContent = ({
  src,
  aspectRatio = 4 / 3,
}: EmbeddedContentProps) => {
  if (!src) {
    return (
      <aha-box>
        <p>No URL provided</p>
      </aha-box>
    );
  }

  return (
    <AspectRatio aspectRatio={aspectRatio}>
      <iframe
        src={aha.sanitizeUrl(src)}
        width="100%"
        height="100%"
        allowTransparency
        allowFullScreen
        className="EmbeddedContent--iframe"
      >
        Unable to load content
      </iframe>
    </AspectRatio>
  );
};
