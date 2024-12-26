import React from 'react';
import './Graduate.css';

const Graduate = () => {
  return (
    <div className="graduate-container">
      <header className="graduate-header">
        <div className="header-content">
          <button className="back-button">←</button>
          <h1>나의 이수 현황</h1>
        </div>
      </header>

      <main className="graduate-main">
        <section className="profile-section">
          <div className="profile-card">
            <div className="profile-icon">
              <img src="/graduation-cap.png" alt="Profile" />
            </div>
            <div className="profile-info">
              <h2>김세종</h2>
              <p>학년 3</p>
              <p>인정 학점 96 학점</p>
            </div>
          </div>
        </section>

        <section className="status-section">
          <div className="status-block">
            <h3>고전 독서</h3>
            <ul>
              <li>
                <span>서고강</span>
                <div className="status-info">
                  <span className="count">2/4</span>
                  <span className="status-tag incomplete">인증 필요</span>
                </div>
              </li>
              <li>
                <span>동고강</span>
                <div className="status-info">
                    <span className="count">2/2</span>
                    <span className="status-tag complete">이수 완료</span>
                    </div>
            </li>
              <li>
                <span>동서고강</span>
                <div className="status-info">
                    <span className="count">2/2</span>
                    <span className="status-tag complete">이수 완료</span>
                    </div>
                    </li>
              <li>
                <span>과학사</span>
                <div className="status-info">
                  <span className="count">1/2</span>
                  <span className="status-tag incomplete">인증 필요</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="status-block">
            <h3>영어 인증</h3>
            <ul>
              <li>
                <span>토익</span>
                <div className="status-info">
                  <span className="count">830</span>
                  <span className="status-tag complete">이수 완료</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Graduate;
