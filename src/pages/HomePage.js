import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">세모</div>
        <div className="page-title">메인페이지</div>
      </header>

      <main className="home-main">
        <section className="explore-section">
          <h2>Explore</h2>
          <h3>주요 목록</h3>
          <div className="menu-grid">
            <Link to="/notice" className="menu-item">
              공지사항
            </Link>
            <Link to="/lab" className="menu-item">
              연구실<br />찾아보기
            </Link>
            <Link to="/community" className="menu-item">
              커뮤니티
            </Link>
            <Link to="/graduation" className="menu-item">
              졸업 인증
            </Link>
          </div>
        </section>

        <section className="portfolio-section">
          <h2>My portfolio</h2>
          <h3>내 프로필</h3>
          <div className="profile-card">
            <div className="profile-image">
              <img src="/plant-icon.png" alt="Profile" />
            </div>
            <div className="profile-info">
              <h4>김세종</h4>
              <p>학년 1</p>
              <p>인정 학점 96학점</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
