"use client";
import React from 'react';

interface FloatingWhatsAppProps {
  phoneNumber: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ phoneNumber }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="floating-whatsapp-container">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="floating-whatsapp-btn"
      >
        <span className="floating-whatsapp-glass">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <circle cx="18" cy="18" r="18" fill="url(#wa-gradient)" />
            <g filter="url(#wa-shadow)">
              <path d="M27.5 18c0-5.247-4.253-9.5-9.5-9.5s-9.5 4.253-9.5 9.5c0 1.77.51 3.43 1.39 4.87L8 28l5.25-1.36A9.46 9.46 0 0 0 18 27.5c5.247 0 9.5-4.253 9.5-9.5z" fill="#fff" />
              <path d="M14.5 13.5c.2-.45.4-.45.6-.45h.5c.2 0 .4 0 .6.45.2.45.7 1.7.8 1.95.1.25.05.4-.05.55-.1.15-.25.35-.4.5-.15.15-.3.3-.15.6.15.3.7 1.1 1.45 1.75.95.85 1.7 1.1 2 .95.3-.15.45-.5.6-.7.15-.2.3-.2.5-.1.2.1 1.3.65 1.6.8.3.15.3.3.25.55-.05.25-.2.85-.7 1.1-.5.25-1.1.25-1.8.1-.4-.1-.9-.25-1.5-.45-2.7-1.05-4.5-3.8-4.65-4-.15-.2-.7-1.1-.7-2.1s.7-1.6.95-1.9c.25-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.45z" fill="#25D366" />
            </g>
            <defs>
              <radialGradient id="wa-gradient" cx="0" cy="0" r="1" gradientTransform="rotate(90 0 18) scale(18)" gradientUnits="userSpaceOnUse">
                <stop stopColor="#25D366" />
                <stop offset="1" stopColor="#128C7E" />
              </radialGradient>
              <filter id="wa-shadow" x="4" y="8" width="28" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#128C7E" floodOpacity="0.15" />
              </filter>
            </defs>
          </svg>
        </span>
      </a>
      <span className="floating-whatsapp-tooltip">Chat with us!</span>
      <style>{`
        .floating-whatsapp-container {
          position: fixed;
          bottom: 100px;
          right: 12px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (min-width: 768px) {
          .floating-whatsapp-container {
            bottom: 32px;
            right: 32px;
            z-index: 1000;
          }
        }
        .floating-whatsapp-btn {
          position: relative;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.25);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18);
          cursor: pointer;
          transition: transform 0.2s;
          animation: pulse 1.5s infinite;
          backdrop-filter: blur(6px);
        }
        @media (min-width: 768px) {
          .floating-whatsapp-btn {
            width: 68px;
            height: 68px;
          }
        }
        .floating-whatsapp-glass {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          box-shadow: 0 2px 8px rgba(37,211,102,0.10);
        }
        @media (min-width: 768px) {
          .floating-whatsapp-glass {
            width: 60px;
            height: 60px;
          }
        }
        .floating-whatsapp-btn:hover {
          transform: scale(1.10) rotate(-6deg);
          box-shadow: 0 12px 32px 0 rgba(31,38,135,0.22);
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.25); }
          70% { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .floating-whatsapp-tooltip {
          display: none;
        }
        @media (min-width: 768px) {
          .floating-whatsapp-tooltip {
            display: block;
            margin-top: 8px;
            padding: 6px 14px;
            background: rgba(18,140,126,0.95);
            color: white;
            border-radius: 16px;
            font-size: 0.95rem;
            font-weight: 500;
            box-shadow: 0 2px 8px rgba(0,0,0,0.10);
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
          }
          .floating-whatsapp-btn:hover + .floating-whatsapp-tooltip {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingWhatsApp;
