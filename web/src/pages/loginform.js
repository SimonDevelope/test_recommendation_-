import React from 'react';
// import axios from 'axios';
import './style/loginform.css';

function SignUp() {
  return (
    <div className="sign-up-total-view-port">
      <div className="sign-up-IT_V">
        <input className="sign-up-IT_a" placeholder="아이디" />
        <input className="sign-up-IT_a" placeholder="비밀번호" />
        <input className="sign-up-IT_a" placeholder="추천인" />
        <button>회원가입</button>
      </div>
    </div>
  );
}

export default SignUp;
