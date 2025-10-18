import { useState } from "react";

const ChatWithAI = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Привет! 👋 Чем могу помочь?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Здесь можно подключить реальный API, пока — имитация
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "ИИ ответ: " + input },
      ]);
    }, 800);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`chat-message ${m.from === "user" ? "user" : "bot"}`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Напишите сообщение..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Отправить</button>
      </div>
    </div>
  );
};

export default ChatWithAI;
