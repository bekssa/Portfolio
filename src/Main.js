import React, { useState } from "react";
import ModalWindow from "./ModalWindow";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <header>
        <a href="/">About me</a>
        <a href="/projects">Projects</a>

        <button className="btn" onClick={handleOpenModal}>
          Contact
        </button>

        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{ color: "#4824ff", fontSize: "40px" }}>Contacts</h2>
        </ModalWindow>

        <a
          href="https://t.me/uraaasdu"
          target="_blank"
          className="icon telegram"
        />
        <a
          href="https://github.com/bekssa"
          target="_blank"
          className="icon github"
        />
        <a
          href="https://www.linkedin.com/in/bekassyl-suierkulov-477b442b7/"
          target="_blank"
          className="icon linkedin"
        />
        <a
          href="https://docs.google.com/document/d/1pxUQcupNWPsU4EeANrdF3p9d_0gfGm0nIa1c4T3CAzo/edit?usp=sharing"
          target="_blank"
          className="icon cv"
        />

        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>
    </div>
  );
}

export default Main;
