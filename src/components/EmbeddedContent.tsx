import React from "react";

interface AspectRatioProps {
  aspectRatio: number;
  children: any;
}

const AspectRatio = ({ aspectRatio, children }: AspectRatioProps) => (
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
    )
  }

  return (
    <AspectRatio aspectRatio={aspectRatio}>
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
    </AspectRatio>
  )
}
