import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Toaster } from "./ui/sonner";

interface ChatProps {
  messages: Array<{
    content: string;
    isUser: boolean;
  }>;
  onSendMessage: (message: string) => void;
  isTyping: boolean;
}

export function Chat({ messages, onSendMessage, isTyping }: ChatProps) {
  return (
    <div className="chat-container">
      <div className="chat-messages" id="chatMessages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? "user" : "bot"}`}
          >
            <div className="message-avatar">
              {message.isUser ? (
                <span>U</span>
              ) : (
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" fill="#ADD8E6"/>
                  <path d="M30 60 Q50 40 70 60" stroke="#000080" stroke-width="3" fill="none"/>
                  <circle cx="50" cy="45" r="8" fill="#000080"/>
                </svg>
              )}
            </div>
            <div className="message-bubble">{message.content}</div>
          </div>
        ))}
      </div>

      {isTyping && (
        <div className="typing-indicator">
          <div className="message-avatar">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="#ADD8E6"/>
              <path d="M30 60 Q50 40 70 60" stroke="#000080" stroke-width="3" fill="none"/>
              <circle cx="50" cy="45" r="8" fill="#000080"/>
            </svg>
          </div>
          <span>AI is thinking</span>
          <div className="typing-dots">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        </div>
      )}

      <div className="input-container">
        <Textarea
          placeholder="Type your message here..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              const input = e.target as HTMLInputElement;
              if (input.value.trim()) {
                onSendMessage(input.value);
                input.value = "";
              }
            }
          }}
        />
        <Button
          onClick={() => {
            const input = document.querySelector(".message-input") as HTMLInputElement;
            if (input.value.trim()) {
              onSendMessage(input.value);
              input.value = "";
            }
          }}
        >
          <svg className="beaker-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2v6l-4 4v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8l-4-4V2H9zm2 0h2v5.5l4 4V20H7v-8.5l4-4V2z"/>
            <circle cx="12" cy="16" r="1"/>
            <circle cx="9" cy="18" r="1"/>
            <circle cx="15" cy="17" r="1"/>
          </svg>
        </Button>
      </div>
    </div>
  );
}
