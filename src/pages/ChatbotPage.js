import React, { useState } from 'react';
import './ChatbotPage.css'; // 스타일 파일 import

const ChatbotPage = () => {
  // 상태 관리: 메시지 리스트, 입력 메시지, 토글 상태
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState(''); // 사용자가 입력 중인 메시지
  const [isSchoolChat, setIsSchoolChat] = useState(true); // 챗봇 종류 토글 상태

  // 토글 핸들러: 챗봇 종류를 변경
  const handleToggle = () => {
    setIsSchoolChat(!isSchoolChat);
    setMessages([]); // 챗봇 변경 시 기존 메시지 초기화
  };

  // 메시지 전송 핸들러
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return; // 빈 메시지 입력 방지

    // 사용자 메시지 추가
    const newMessages = [...messages, { sender: 'user', text: inputMessage }];

    // 봇 응답 추가
    newMessages.push({
      sender: 'bot',
      text: '연결이 되지 않았습니다.', // 기본 응답
    });

    // 상태 업데이트
    setMessages(newMessages);
    setInputMessage(''); // 입력 필드 초기화
  };

  return (
    <div
      className="chat-container"
      style={{
        backgroundColor: isSchoolChat ? '#ffffff' : '#f0f8ff', // 배경색 변경
      }}
    >
      <header className="chat-header">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="logo"
        />
        <h1>세모 Chat</h1>
      </header>

      <div className="chat-toggle">
        <button onClick={() => console.log('뒤로가기')} className="back-button">
          ←
        </button>
        <h2>{isSchoolChat ? '세종대학교 질문챗' : '연구실 질문챗'}</h2>
        <label className="switch">
          <input
            type="checkbox"
            checked={!isSchoolChat}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
      </div>

      <div className="chat-content">
        {/* 메시지 리스트 출력 */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === 'user' ? 'user-message' : 'bot-message'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          className="chat-input-box"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)} // 입력 값 업데이트
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage(); // Enter 키로 메시지 전송
          }}
        />
        <button className="chat-send-button" onClick={handleSendMessage}>
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;
