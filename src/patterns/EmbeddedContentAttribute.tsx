import React from "react";
import { DrawerInput } from "../components/DrawerInput";
import { EmbeddedContent } from "../components/EmbeddedContent";

export type LinkUpdatedCallback = (url: string) => Promise<string>
export interface EmbeddedContentAttributeProps {
  identifier: string;
  record: Aha.RecordUnion;
  fields: { [index: string]: unknown };
  product: string;
  placeholder: string | undefined;
  /** Optional async function that allows component to modify supplied user input before saving */
  onLinkUpdated?: LinkUpdatedCallback
}

/**
 * Fully-featured component for displaying embedded content associated with an
 * Aha! Record. Collects a URL as user input, stores it as extension data on the
 * record, and displays the URL at a fixed aspect ratio when set.
 * 
 */
export const EmbeddedContentAttribute = ({ identifier, record, fields, product, placeholder, onLinkUpdated = Promise.resolve }: EmbeddedContentAttributeProps) => {
  const fieldName = `${product.replace(/\s+/g, '')}:link`
  const src = fields[fieldName] as string

  const openLink = () => {
    const sanitized = aha.sanitizeUrl(src)
    window.open(sanitized, "_blank", "noopener,noreferrer")
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
    record.clearExtensionField(identifier, fieldName)
  }

  if (!src) {
    return (
      <DrawerInput
        label={`${product} link`}
        placeholder={placeholder}
        onInput={setLink}
      />
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gridGap: 10 }}>
      <EmbeddedContent src={src} />
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