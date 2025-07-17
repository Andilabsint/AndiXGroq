import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andilabs AI Chatbot",
  description: "AI-powered chatbot by Andilabs Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%23ADD8E6'/><path d='M30 60 Q50 40 70 60' stroke='%23000080' stroke-width='3' fill='none'/><circle cx='50' cy='45' r='8' fill='%23000080'/></svg>" />
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #ADD8E6 0%, #ffffff 50%, #ADD8E6 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .header {
            background: linear-gradient(90deg, #000080 0%, #ADD8E6 100%);
            padding: 1rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 3px solid #000080;
          }

          .logo-container {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .logo {
            width: 50px;
            height: 50px;
            background: #ADD8E6;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid #ffffff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          }

          .logo svg {
            width: 30px;
            height: 30px;
          }

          .logo-text {
            color: #ffffff;
            font-size: 1.8rem;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          }

          .header-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .theme-toggle {
            background: #ffffff;
            border: 2px solid #000080;
            color: #000080;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }

          .theme-toggle:hover {
            background: #000080;
            color: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          }

          .help-button {
            background: #ffffff;
            color: #000080;
            border: 2px solid #000080;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }

          .help-button:hover {
            background: #000080;
            color: #ffffff;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          }

          .main-content {
            flex: 1;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          /* Dark mode styles */
          .dark-mode {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%);
            color: #ffffff;
          }

          .dark-mode .header {
            background: linear-gradient(90deg, #0f1419 0%, #1a1a2e 100%);
            border-bottom: 3px solid #ADD8E6;
          }

          .dark-mode .logo {
            background: #1a1a2e;
            border: 3px solid #ADD8E6;
          }

          .dark-mode .logo svg circle:first-child {
            fill: #1a1a2e;
          }

          .dark-mode .logo svg path {
            stroke: #ADD8E6;
          }

          .dark-mode .logo svg circle:last-child {
            fill: #ADD8E6;
          }

          .dark-mode .theme-toggle {
            background: #1a1a2e;
            border: 2px solid #ADD8E6;
            color: #ADD8E6;
          }

          .dark-mode .theme-toggle:hover {
            background: #ADD8E6;
            color: #1a1a2e;
          }

          .dark-mode .help-button {
            background: #1a1a2e;
            color: #ADD8E6;
            border: 2px solid #ADD8E6;
          }

          .dark-mode .help-button:hover {
            background: #ADD8E6;
            color: #1a1a2e;
          }

          @media (max-width: 768px) {
            .header {
              padding: 1rem;
            }
            
            .logo-text {
              font-size: 1.4rem;
            }
            
            .main-content {
              padding: 1rem;
            }
          }
        `}</style>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="header">
          <div className="logo-container">
            <div className="logo">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="#ADD8E6"/>
                <path d="M30 60 Q50 40 70 60" stroke="#000080" strokeWidth="3" fill="none"/>
                <circle cx="50" cy="45" r="8" fill="#000080"/>
              </svg>
            </div>
            <div className="logo-text">Andilabs AI</div>
          </div>
          <div className="header-controls">
            <button className="theme-toggle" id="themeToggle">🌙</button>
            <a href="https://www.andilabs.education/#home" className="help-button" target="_blank" rel="noopener noreferrer">
              Help
            </a>
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>
        
        <Toaster />
        
        <script dangerouslySetInnerHTML={{
          __html: `
            function toggleTheme() {
              const body = document.body;
              const themeToggle = document.getElementById('themeToggle');
              
              body.classList.toggle('dark-mode');
              
              if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '☼';
              } else {
                themeToggle.textContent = '🌙';
              }
            }
            
            document.getElementById('themeToggle').addEventListener('click', toggleTheme);
          `
        }} />
      </body>
    </html>
  );
}
