import React from "react";

export interface DrawerInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onInput: React.FormEventHandler<HTMLInputElement>;
}

/**
 * Simple component for recreating the UI/UX of an Aha! record drawer input.
 */
export const DrawerInput = ({
  label,
  onChange,
  ...props
}: DrawerInputProps) => {
  return (
    <>
      <style>
        {`
          .DrawerInput--input::placeholder {
            color: var(--theme-accent-icon);
            padding-left: 3px;
          }
        `}
      </style>
      <input
        className="DrawerInput--input"
        aria-label={label}
        onBlur={(event: React.BlurEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        onKeyDown={(event: React.KeyDownEvent<HTMLInputElement>) => {
          if (event.key === "Enter") {
            event.target.blur();
          }
        }}
        style={{
          width: "calc(100% - 6px)",
          borderColor: "transparent",
          color: "var(--theme-primary-text)",
          marginLeft: 4,
        }}
        {...props}
      />
    </>
  );
};
