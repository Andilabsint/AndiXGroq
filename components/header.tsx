import Link from "next/link";
import { ThemeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="#ADD8E6"/>
            <path d="M30 60 Q50 40 70 60" stroke="#000080" stroke-width="3" fill="none"/>
            <circle cx="50" cy="45" r="8" fill="#000080"/>
          </svg>
        </div>
        <div className="logo-text">Andilabs AI</div>
      </div>
      <div className="header-controls">
        <ThemeToggle />
        <Button
          variant="secondary"
          href="https://www.andilabs.education/#home"
          target="_blank"
        >
          Help
        </Button>
      </div>
    </header>
  );
};
