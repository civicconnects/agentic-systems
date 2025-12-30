"use client";

import React, { useEffect, useState } from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';

interface SiteTourProps {
  onChatOpen?: () => void;
}

export default function SiteTour({ onChatOpen }: SiteTourProps) {
  const [driver, setDriver] = useState<any>(null);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  // Check localStorage only on client-side to prevent hydration errors
  useEffect(() => {
    const tourSeen = localStorage.getItem('tourSeen');
    setHasSeenTour(tourSeen === 'true');
  }, []);

  useEffect(() => {
    // Check if window.driver is loaded (from the CDN script)
    const initDriver = () => {
      if ((window as any).driver) {
        const driverObj = (window as any).driver.js.driver({
          showProgress: true,
          animate: true,
          steps: [
            // STEP 1: WELCOME
            {
              element: 'body',
              popover: {
                title: 'Welcome to Agentic Systems',
                description: 'Your new AI Workforce awaits. Let us give you a quick 30-second tour of the facility.',
                side: "left",
                align: 'start'
              }
            },

            // STEP 2: THE AGENTS (Home Page)
            {
              element: '#agent-grid',
              popover: {
                title: 'The Specialists',
                description: 'These are pre-trained AI employees (HR, Sales, Ops). You can click them to run a live demo right now.',
                side: "top"
              }
            },

            // STEP 3: CUSTOM BUILDER (Navbar)
            {
              element: '#custom-builder-link',
              popover: {
                title: 'The AI Factory',
                description: 'Need something unique? Click here to build a custom agent trained on YOUR proprietary data.',
                side: "bottom"
              }
            },

            // STEP 4: TUTORIALS (Navbar)
            {
              element: '#tutorials-nav',
              popover: {
                title: 'Learning Center',
                description: 'New to AI? Download our PDF guides or watch video walkthroughs here.',
                side: "bottom"
              }
            },

            // STEP 5: THE CONCIERGE (Floating Widget)
            {
              element: '#chat-widget',
              popover: {
                title: 'The Concierge',
                description: 'Need help? Our AI Concierge is always here to assist and book strategy calls. Just click to chat!',
                side: "left"
              }
            }
          ]
        });

        setDriver(driverObj);

        // 🚀 AUTO-START LOGIC - only run if tour hasn't been seen
        if (!hasSeenTour) {
          setTimeout(() => {
            driverObj.drive();
            localStorage.setItem('tourSeen', 'true');
            setHasSeenTour(true);
          }, 3000); // Wait 3 seconds before starting
        }
      }
    };

    // Poll for the CDN script to load
    const interval = setInterval(() => {
      if ((window as any).driver) {
        initDriver();
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [hasSeenTour]);

  const startTour = () => {
    if (driver) driver.drive();
  };

  const handleChatClick = () => {
    console.log("🖱️ Concierge Widget Clicked");
    if (onChatOpen) {
      console.log("✅ Calling onChatOpen callback");
      onChatOpen();
    } else {
      console.error("❌ onChatOpen prop is missing in SiteTour");
    }
  };

  return (
    <>
      {/* 🚀 GLOBAL EVENT LISTENER FOR FOOTER BUTTON */}
      <div id="tour-trigger" onClick={startTour} className="hidden"></div>

      {/* 🛎️ THE CONCIERGE WIDGET (Step 5 Target) */}
      <div
        id="chat-widget"
        className="fixed bottom-6 right-6 z-40 p-1 rounded-full shadow-2xl cursor-pointer transition-transform hover:scale-110 flex items-center justify-center group bg-gradient-to-br from-pink-500 to-purple-600"
        onClick={handleChatClick}
      >
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/50 relative">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&h=256"
            alt="AI Concierge"
            className="w-full h-full object-cover"
          />
          {/* Online Dot */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-pink-600 rounded-full"></div>
        </div>

        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 shadow-xl">
          Talk to the Concierge
        </span>
      </div>
    </>
  );
}