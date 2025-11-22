import "./ChatButton.css";

export default function ChatButton({ onClick }) {
  return <div className="chat-float-btn" onClick={onClick}>💬</div>;
}
