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
        onBlur={({ target }) => {
          if (onChange) {
            onChange({
              target: { value: target.value },
            } as React.ChangeEvent<HTMLInputElement>);
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            const target = event.target as HTMLInputElement;
            target.blur();
          }
        }}
        style={{
          width: "calc(100% - 6px)",
          borderColor: "transparent",
          color: "var(--theme-primary-text)",
          background: "var(--theme-primary-background)",
          marginLeft: 4,
        }}
        {...props}
      />
    </>
  );
};
