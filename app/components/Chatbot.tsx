"use client";

import { useEffect, useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto open after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Auto close after 8 seconds
      setTimeout(() => setIsOpen(false), 8000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`chatbot-popup ${isOpen ? 'active' : ''}`}>
        <div className="chatbot-header">
          <span>💬 Chat with us</span>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="chatbot-body">
          <div className="chatbot-message bot">
            <p>Hello! How can we help you with your insulation project?</p>
          </div>
          <div className="chatbot-quick-replies">
            <button onClick={() => window.location.href = '/contact'}>Get Quote</button>
            <button onClick={() => window.location.href = '/services'}>Services Info</button>
            <button onClick={() => window.location.href = '/contact'}>Talk to Expert</button>
          </div>
        </div>
        <div className="chatbot-footer">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>

      <button className="chatbot-trigger" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
    </>
  );
}
