import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
}
export const Alert = ({ children, onClose }: Prop) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
