import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';
import InputForm from './InputForm';
import { FaRobot } from 'react-icons/fa';
import axios from 'axios';

interface ChatMessage {
  sender: 'user' | 'bot';
  content: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isChatVisible, setChatVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (message: string) => {
    setMessages([...messages, { sender: 'user', content: message }]);
    setLoading(true);

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error("API key is missing");
      }

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: message }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', content: aiResponse },
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error.response ? error.response.data : error.message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', content: 'Error: Failed to get response.' },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isChatVisible ? (
        <div className="flex flex-col bg-white/30 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-4 w-80 h-96">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-bold">AI Chatbot</h2>
            <button onClick={() => setChatVisible(false)} className="text-sm text-gray-400 hover:text-gray-600">Close</button>
          </div>
          <div className="flex-grow overflow-y-auto p-2 space-y-2">
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          <InputForm onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      ) : (
        <button
          onClick={() => setChatVisible(true)}
          className="bg-gradient-to-r from-purple-400 to-yellow-400 text-white p-3 rounded-full shadow-md transition-colors 
                     hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <FaRobot className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBox;