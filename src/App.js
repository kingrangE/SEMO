import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// 페이지 컴포넌트 import
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import ChatbotHistoryPage from './pages/ChatbotHistoryPage';
import GraduationRequirementsPage from './pages/GraduationRequirementsPage';
import NoticesPage from './pages/NoticesPage';

function App() {
  const [history, setHistory] = useState([]);
  return (
    <Router>
      <div>
        {/* 네비게이션 바 */}
        <nav>
          <ul>
            <li><Link to="/">메인</Link></li>
            <li><Link to="/chatbot">챗봇 페이지</Link></li>
            <li><Link to="/chatbot-history">챗봇 히스토리</Link></li>
            <li><Link to="/graduation-requirements">졸업 요건</Link></li>
            <li><Link to="/notices">공지사항</Link></li>
          </ul>
        </nav>

        {/* 페이지 라우팅 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/chatbot-history" element={<ChatbotHistoryPage history={history} setHistory={setHistory} />} />
          <Route path="/graduation-requirements" element={<GraduationRequirementsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
