import React, { useState } from 'react';
import './ChatbotHistoryPage.css';

const ChatbotHistoryPage = () => {
  const [history, setHistory] = useState([]);

  const addHistoryItem = () => {
    const newItem = {
      id: Date.now(),
      type: '학교 질문챗',
      messages: [{ sender: 'user', text: '새로운 대화' }],
    };
    setHistory([...history, newItem]); // 새로운 항목 추가
  };

  return (
    <div className="history-container">
      <header className="history-header">
        <h1>세모 Chat - 히스토리</h1>
      </header>

      <div className="history-content">
        {history.map((item) => (
          <div key={item.id} className="history-item">
            <h3>{item.type}</h3>
            <p>{item.messages.length}개의 메시지</p>
          </div>
        ))}
      </div>

      <button onClick={addHistoryItem}>대화 추가</button>
    </div>
  );
};

export default ChatbotHistoryPage;
