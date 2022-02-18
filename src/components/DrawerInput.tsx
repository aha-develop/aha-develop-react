import React from "react";

export interface DrawerInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onInput: React.FormEventHandler<HTMLInputElement>;
}

/**
 * Simple component for recreating the UI/UX of an Aha! record drawer input.
 */
export const DrawerInput = ({ label, onInput, ...props }: DrawerInputProps) => {
  return (
    <input
      aria-label={label}
      onInput={onInput}
      style={{
        width: "calc(100% - 6px)",
        borderColor: "transparent",
      }}
      {...props}
    />
  );
};
