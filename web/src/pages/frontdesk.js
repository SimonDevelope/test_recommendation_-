import React from 'react';
import { Link } from 'react-router-dom';
import './style/frontdesk.css';

function FrontDesk() {
  return (
    <div className="total-view-port">
      <div className="login-form-total-wrapper">
        <div className="login-form">
          <input className="id-input-area" placeholder="아이디" />
          <input className="password-input-area" placeholder="비밀번호" />
        </div>
        <button className="login-btn-attr">로그인</button>
      </div>
      <div className="sign-up-form-area">
        <button className="sign-up-btn">
          <Link to="/loginForm" className="sign-up-addre-attr">
            회원가입
          </Link>
        </button>
      </div>
    </div>
  );
}

export default FrontDesk;
