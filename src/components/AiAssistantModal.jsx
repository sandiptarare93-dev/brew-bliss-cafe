import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, X, Send, Bot, Sparkles, RefreshCw, 
  HelpCircle, ChevronDown, Check, User 
} from 'lucide-react';
import { getAssistantResponse, QUICK_PROMPTS } from '../data/assistantKnowledge';

export default function AiAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: "👋 Hi! Welcome to Brew Bliss Café. I'm your local Demo Concierge. Ask me anything about our coffees, prices, student offers, or café hours!",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural thinking delay (350ms)
    setTimeout(() => {
      const reply = getAssistantResponse(text);
      const assistantMsg = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 380);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'assistant',
        text: "Conversation refreshed. How may I assist your Brew Bliss visit today?",
        time: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Café Assistant Demo"
            className="flex items-center gap-2.5 px-4 py-3 bg-[#7B4420] text-white rounded-full shadow-2xl hover:bg-[#603316] transition-all duration-300 hover:scale-105 active:scale-95 group border-2 border-[#D4A373]/50"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-[#D4A373]" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#7B4420]" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold leading-tight">AI Café Assistant</p>
              <p className="text-[10px] text-[#E8D8C8]">Local Demo Mode</p>
            </div>
          </button>
        )}
      </div>

      {/* Floating Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[400px] h-[560px] max-h-[85vh] bg-[#FDFBF7] rounded-3xl border border-[#E8D8C8] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-[#432310] text-[#FDFBF7] flex items-center justify-between border-b border-[#603316]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7B4420] border border-[#D4A373]/40 flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#D4A373]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-sm tracking-wide">
                    Brew Bliss Assistant
                  </h3>
                  <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 px-1.5 py-0.2 rounded-full font-bold">
                    Demo Mode
                  </span>
                </div>
                <p className="text-[11px] text-[#D7BEA8]">
                  Rule-based • No Paid API Required
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart conversation"
                className="p-1.5 text-[#D7BEA8] hover:text-white hover:bg-[#603316] rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-[#D7BEA8] hover:text-white hover:bg-[#603316] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Academic Transparency Alert */}
          <div className="bg-[#FAF6EE] px-3.5 py-2 border-b border-[#E8D8C8] text-[11px] text-[#603316] flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#94582E]" />
              <span>Simulated chatbot for Digital Marketing Project</span>
            </span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[#7B4420] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-[#D4A373]" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-3 leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-[#7B4420] text-white rounded-tr-none'
                      : 'bg-white text-[#2C170A] border border-[#E8D8C8] rounded-tl-none shadow-sm'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-white/70' : 'text-[#94582E]'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#D4A373] text-[#2C170A] flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-[#94582E] p-2 bg-white rounded-xl border border-[#E8D8C8] w-28">
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-[#94582E] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#94582E] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#94582E] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
                <span>Brewing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="p-2.5 bg-[#FAF6EE] border-t border-[#E8D8C8]">
            <p className="text-[10px] font-bold text-[#94582E] uppercase tracking-wider mb-1.5 px-1">
              Suggested Questions:
            </p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="shrink-0 px-2.5 py-1 bg-white border border-[#D7BEA8] hover:border-[#94582E] text-[11px] text-[#432310] rounded-lg transition-colors whitespace-nowrap shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#E8D8C8] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about coffee, student offer, cold brew..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-xs focus:outline-none focus:ring-2 focus:ring-[#94582E] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-[#7B4420] text-white hover:bg-[#603316] disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
