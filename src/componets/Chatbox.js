// components/Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleSendMessage = () => {
        setMessages([...messages, { sender: 'User', text: userInput }]);
        setUserInput('');
        // For now, simulate a simple AI response.
        setMessages(prevMessages => [
            ...prevMessages,
            { sender: 'AI', text: 'Thank you for your message! How can I assist you further?' },
        ]);
    };

    return (
        <div id="chatbot-container">
            <h2>AI Chatbot</h2>
            <div id="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'User' ? 'user-message' : 'ai-message'}>
                        <strong>{message.sender}:</strong> {message.text}
                    </div>
                ))}
            </div>
            <textarea 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)} 
                placeholder="Type your message here..." 
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
