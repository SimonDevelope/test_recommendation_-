import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style/frontdesk.css';

function FrontDesk() {
  const [isLogInfo, setIsLogInfo] = useState({
    id: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setIsLogInfo({
      ...isLogInfo,
      [name]: value,
    });
  };

  const signIn = async () => {
    if (isLogInfo.id === '' || isLogInfo.password === '') {
      alert('정보를 입력해주세요.');
    } else {
      const Login = await axios.post('http://localhost:4000/users/login', {
        _id: isLogInfo.id,
        password: isLogInfo.password,
      });
      alert(Login.data);
    }
  };

  return (
    <div className="total-view-port">
      <div className="login-form-total-wrapper">
        <div className="login-form">
          <input
            className="id-input-area"
            placeholder="아이디"
            name="id"
            onChange={onChange}
          />
          <input
            className="password-input-area"
            placeholder="비밀번호"
            name="password"
            onChange={onChange}
          />
        </div>
        <button className="login-btn-attr" onClick={signIn}>
          로그인
        </button>
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
