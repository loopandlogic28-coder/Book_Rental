
// import React, { useState, useEffect, useRef } from "react";
// import "./ChatBot.css";

// export default function ChatBot() {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       from: "bot",
//       text: "Hey! I'm BookDow Assistant 📚 — powered by Google Gemini. How can I help you today?",
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [typing, setTyping] = useState(false);
//   const chatEndRef = useRef(null);

//   const suggestions = [
//     "What is BookDow?",
//     "Book return policy",
//     "Cancellation policy",
//     "Donate your book",
//     "Founder of BookDow",
//   ];

//   async function sendMessage(textOverride) {
//     const finalText = textOverride || input;
//     if (!finalText.trim()) return;

//     const userMsg = {
//       id: Date.now(),
//       from: "user",
//       text: finalText,
//     };

//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");
//     setTyping(true);

//     try {
//       const res = await fetch("http://localhost:4000/api/chatbot", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt: finalText }),
//       });

//       const data = await res.json();

//       const botMsg = {
//         id: Date.now() + 1,
//         from: "bot",
//         text: data.reply,
//       };

//       setTyping(false);
//       setMessages((prev) => [...prev, botMsg]);
//     } catch (err) {
//       setTyping(false);
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 2, from: "bot", text: "Server error 😢" },
//       ]);
//     }
//   }

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, typing]);

//   return (
//     <div className="chatbot-container">
//       <div className="chat-header">BookDow Assistant</div>

//       <div className="chat-window">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`bubble ${msg.from === "user" ? "bubble-user" : "bubble-bot"}`}
//           >
//             {msg.text}
//           </div>
//         ))}

//         {typing && (
//           <div className="bubble bubble-bot typing">
//             <span className="dot"></span>
//             <span className="dot"></span>
//             <span className="dot"></span>
//           </div>
//         )}

//         <div ref={chatEndRef}></div>
//       </div>

//       <div className="suggestions">
//         {suggestions.map((s, i) => (
//           <button className="chip" key={i} onClick={() => sendMessage(s)}>
//             {s}
//           </button>
//         ))}
//       </div>

//       <div className="input-area">
//         <input
//           placeholder="Type a message…"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button onClick={() => sendMessage()}>➤</button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: "Hey! I'm BookDow Assistant 📚 — powered by Google Gemini. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  const suggestions = [
    "What is BookDow?",
    "Book return policy",
    "Cancellation policy",
    "Donate your book",
    "Founder of BookDow",
  ];

  async function sendMessage(textOverride) {
    const finalText = textOverride || input;
    if (!finalText.trim()) return;

    const userMsg = {
      id: Date.now(),
      from: "user",
      text: finalText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("http://localhost:4000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalText }),
      });

      const data = await res.json();

      const botMsg = {
        id: Date.now() + 1,
        from: "bot",
        text: data.reply,
      };

      setTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 2, from: "bot", text: "Server error 😢" },
      ]);
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        <div className="chat-header">BookDow Assistant</div>

        <div className="chat-window">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`bubble ${
                msg.from === "user" ? "bubble-user" : "bubble-bot"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {typing && (
            <div className="bubble bubble-bot typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>

        <div className="suggestions">
          {suggestions.map((s, i) => (
            <button className="chip" key={i} onClick={() => sendMessage(s)}>
              {s}
            </button>
          ))}
        </div>

        <div className="input-area">
          <input
            placeholder="Type a message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={() => sendMessage()}>➤</button>
        </div>
      </div>
    </div>
  );
}
