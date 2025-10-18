import React, { useState } from "react";
import ModalWindow from "./ModalWindow";
import ChatWithAI from "./chat";
import "./index.css";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <header>
        <a href="/">About me</a>
        <a href="/projects">Projects</a>

        <a
          href="https://t.me/uraaasdu"
          target="_blank"
          className="icon telegram"
          rel="noreferrer"
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

        <button className="btn" onClick={handleOpenModal}>
          Contact
        </button>

        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>

      <div className="main-block">
        <div className="first-block">
          <h1>
            Bekassyl Suierkulov <br />
            <span className="job">Frontend Developer</span>
          </h1>
          <h2 className="second-block">
            I build <span style={{ color: "#4824ff" }}>clickable</span> and{" "}
            <span style={{ color: "#4824ff" }}>user-friendly</span> websites.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
