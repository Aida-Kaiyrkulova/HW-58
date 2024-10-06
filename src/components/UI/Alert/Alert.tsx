import React from "react";

interface Props {
  type: "primary" | "success" | "danger" | "warning";
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
  const alertClass = `alert alert-${type} mt-2 d-sm-flex justify-content-between`;

  return (
    <div className={alertClass} role="alert">
      {children}
      {onDismiss && (
        <button
          type="button"
          className="close border-0 bg-transparent"
          onClick={onDismiss}
          aria-label="close"
        >
          <span aria-hidden="true">x</span>
        </button>
      )}
    </div>
  );
};

export default Alert;