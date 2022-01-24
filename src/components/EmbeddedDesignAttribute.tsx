import React from "react";

export type LinkUpdatedCallback = (url: string) => Promise<string>

interface AspectRatioProps {
  width: number;
  height: number;
  children: any;
}

interface EmbeddedDesignInputProps {
  product: string;
  placeholder: string | undefined;
  onInput: React.FormEventHandler<HTMLInputElement>;
}

export interface EmbeddedDesignAttributeProps {
  identifier: string;
  record: Aha.RecordUnion;
  fields: { [index: string]: unknown };
  product: string;
  placeholder: string | undefined;
  /** Optional async function that allows component to modify supplied user input before saving */
  onLinkUpdated?: LinkUpdatedCallback
}

const AspectRatio = ({ width, height, children }: AspectRatioProps) => (
  <div style={{ position: "relative", paddingTop: `${100 * height / width}%` }} >
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
      {children}
    </div>
  </div>
)

const EmbeddedDesignInput = ({ product, placeholder, onInput }: EmbeddedDesignInputProps) => {
  return (
    // @ts-expect-error: component definitions aren't available in this package. How do we install them?
    <aha-field label={`${product} link`}>
      <input onInput={onInput} placeholder={placeholder} />
    { /* @ts-expect-error: component definitions aren't available in this package. How do we install them? */ }
    </aha-field>
  )
}

export const EmbeddedDesign = ({ src }: { src: string }) => (
  <AspectRatio width={16} height={9}>
    <iframe
      src={src}
      width="100%"
      height="100%"
      allowTransparency
      allowFullScreen
      style={{ border: '1px solid var(--theme-primary-border)', clipPath: "inset(1px 1px);" }}
    >
    </iframe>
  </AspectRatio>
)

export const EmbeddedDesignAttribute = ({ identifier, record, fields, product, placeholder, onLinkUpdated = Promise.resolve }: EmbeddedDesignAttributeProps) => {
  const fieldName = `${product.replace(/\s+/g, '')}:link`
  const src = fields[fieldName] as string

  const openLink = () => {
    window.open(src, "_blank", "noopener,noreferrer")
  }

  const setLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    if (!value) return

    onLinkUpdated(value)
      .then(value => {
        record.setExtensionField(identifier, fieldName, value)
      })
  }

  const removeLink = () => {
    // @ts-expect-error: `clearExtensionField` definition is missing from ApplicationModel interface
    record.clearExtensionField(identifier, fieldName)
  }

  if (!src) {
    return (
      <EmbeddedDesignInput 
        product={product}
        placeholder={placeholder}
        onInput={setLink}
      />
    )
  }

  if (src) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gridGap: 10 }}>
        <EmbeddedDesign src={src} />
        <aha-menu>
          <aha-button slot="button" type="attribute" size="small">
            <aha-icon icon="fa-solid fa-ellipsis"></aha-icon>
          </aha-button>
          <aha-menu-item onClick={openLink}>
            View in {product}
          </aha-menu-item>
          <aha-menu-item onClick={removeLink}>
            Remove
          </aha-menu-item>
        </aha-menu>
      </div>
    )
  }
}