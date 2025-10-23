
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '8801701650650'; // Updated to new number

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const sendWhatsappMessage = () => {
    if (!message.trim()) return; // Prevent empty messages
    const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
    const url = `${baseUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setMessage(''); // Clear after sending
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendWhatsappMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#FFA500] to-[#FF4500] text-white p-3 rounded-full shadow-lg hover:from-[#FF4500] hover:to-[#FFA500] transition-all duration-300"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 border">
          <div className="bg-[#0165b6] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">EDUNET CONSULTANCY</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-full">
            <div className="bg-gray-100 p-3 rounded-lg mb-4">
              <p className="text-sm">Hi! How can we help you chase your dream today?</p>
            </div>
            <div className="flex flex-col h-48">
              <div className="flex-grow"></div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-grow px-3 py-2 border rounded-lg text-sm"
                />
                <button
                  className="bg-gradient-to-r from-[#FFA500] to-[#FF4500] text-white px-4 py-2 rounded-lg text-sm hover:from-[#FF4500] hover:to-[#FFA500] transition-all duration-300"
                  onClick={sendWhatsappMessage}
                  disabled={!message.trim()}
                  title="Send via WhatsApp"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
