import React from 'react';
import { Link } from 'react-router-dom';

function FrontDesk() {
  return (
    <div className="total-view-port">
      <div className="login-form">
        <input className="id-input-area" />
        <input className="password-input-area" />
        <button className="login-btn-attr">로그인</button>
      </div>
      <div className="sign-up-form-area">
        <button className="sign-up-btn">
          <Link to="/loginForm">회원가입</Link>
        </button>
      </div>
    </div>
  );
}

export default FrontDesk;
