import React, { ReactNode } from "react";

export type SendToAIProps = {
  label: string;
  button: ReactNode;
  alert?: ReactNode;
  icon?: ReactNode;
  footer?: ReactNode;
};

export const SendToAI = ({
  label,
  button,
  alert,
  icon,
  footer,
}: SendToAIProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {alert}
      <div
        style={{
          display: "flex",
          paddingLeft: "7px",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              gap: "6px",
              flex: "1 0 auto",
              alignItems: "center",
            }}
          >
            {icon} {label}
          </div>
          {button}
        </div>
        {footer ? (
          <div style={{ color: "var(--theme-secondary-text)" }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
};
