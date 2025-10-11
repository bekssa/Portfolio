import React, { useState, useCallback, useEffect } from "react";
import "./ModalWindow.css";

const ModalWindow = ({ show, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 800);
      document.removeEventListener("keydown", handleKeyDown);
      return () => clearTimeout(timer);
    }
  }, [show, handleKeyDown]);

  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={`modal-backdrop ${show ? "show" : ""}`}
      style={{ display: isVisible }}
      onClick={onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close modal"
        ></button>
        {children}
        <div style={{ display: "flex" }}>
          <a
            href="https://t.me/uraaasdu"
            target="_blank"
            className="icon telegram"
          />
          <a className="social telegram">Telegram</a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSGMhtwGnrKbrzkHCFLPLWTtCKBNWZtwFmTqptqjxsFhjkRjlkVRXqJKNZHzjptMrplTHTst"
            target="_blank"
            className="icon mail"
          />
          <a className="social email">Email</a>
          <a
            href="https://wa.me/87479799098"
            target="_blank"
            className="icon whatsapp"
          />
          <a className="social whatsapp">WhatsApp</a>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
