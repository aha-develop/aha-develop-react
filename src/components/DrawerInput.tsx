import React from "react";

import "./../index.css";

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
        {...props}
      />
    </>
  );
};
