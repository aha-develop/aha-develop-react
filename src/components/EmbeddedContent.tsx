import React from "react";

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
  aspectRatio = 16 / 9,
}: EmbeddedContentProps) => (
  <div style={{ position: "relative", paddingTop: `${100 / aspectRatio}%` }}>
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <iframe
        src={aha.sanitizeUrl(src)}
        width="100%"
        height="100%"
        allowTransparency
        allowFullScreen
        style={{
          border: "1px solid var(--theme-primary-border)",
          clipPath: "inset(1px 1px);",
        }}
      >
        Unable to load content
      </iframe>
    </div>
  </div>
);
