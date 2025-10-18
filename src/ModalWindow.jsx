import React, { useState, useCallback, useEffect } from "react";
import "./ModalWindow.css";

const ModalWindow = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 600);
      document.removeEventListener("keydown", handleKeyDown);
      return () => clearTimeout(timer);
    }
  }, [show, handleKeyDown]);

  if (!isVisible && !show) return null;

  return (
    <div className={`modal-backdrop ${show ? "show" : ""}`} onClick={onClose}>
      <div
        className={`modal-content slide-right ${show ? "show" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
