import React from "react";
import { DrawerInput } from "../components/DrawerInput";
import { EmbeddedContent } from "../components/EmbeddedContent";

export type LinkUpdatedCallback = (url: string) => string | Promise<string>;
export interface EmbeddedContentAttributeProps {
  identifier: string;
  record: Aha.RecordUnion;
  fields: { [index: string]: unknown };
  product: string;
  placeholder: string | undefined;
  /** Optional function that allows component to modify supplied user input before saving */
  onLinkUpdated?: LinkUpdatedCallback;
  aspectRatio?: number;
  fieldName?: string;
  transformValue: (value: string) => string;
}

/**
 * Fully-featured component for displaying embedded content associated with an
 * Aha! Record. Collects a URL as user input, stores it as extension data on the
 * record, and displays the URL at a fixed aspect ratio when set.
 *
 */
export const EmbeddedContentAttribute: React.FC<
  EmbeddedContentAttributeProps
> = ({
  identifier,
  record,
  fields,
  product,
  placeholder,
  onLinkUpdated = (v) => v,
  aspectRatio = 4 / 3,
  fieldName = `${product.replace(/\s+/g, "")}:link`,
  transformValue = (v) => v,
}) => {
  let src = fields[fieldName] as string;

  const openLink = () => {
    const sanitized = aha.sanitizeUrl(src);
    window.open(sanitized, "_blank", "noopener,noreferrer");
  };

  const setLink = (value: string) => {
    if (!value) return;

    Promise.resolve(value)
      .then(onLinkUpdated)
      .then((value) => {
        record.setExtensionField(identifier, fieldName, value);
      });
  };

  const removeLink = () => {
    record.clearExtensionField(identifier, fieldName);
  };

  if (!src) {
    return (
      <DrawerInput
        label={`${product} link`}
        placeholder={placeholder}
        onChange={setLink}
      />
    );
  }

  src = transformValue(src);

  return (
    <div
      style={{
        display: "grid",
        alignItems: "start",
        gridTemplateColumns: "1fr auto",
        gridGap: 10,
      }}
    >
      <EmbeddedContent src={src} aspectRatio={aspectRatio} />
      <aha-menu>
        <aha-button slot="control" kind="secondary" size="mini">
          <aha-icon icon="fa-solid fa-ellipsis"></aha-icon>
        </aha-button>
        <aha-menu-content>
          <aha-menu-group>
            <aha-menu-item>
              <aha-button kind="plain" onClick={openLink}>
                View in {product}
              </aha-button>
            </aha-menu-item>
          </aha-menu-group>
          <aha-menu-group>
            <aha-menu-item type="danger">
              <aha-button kind="plain" onClick={removeLink}>
                <aha-icon icon="fa fa-trash" />
                Remove
              </aha-button>
            </aha-menu-item>
          </aha-menu-group>
        </aha-menu-content>
      </aha-menu>
    </div>
  );
};
