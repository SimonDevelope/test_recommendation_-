import React, { useState } from 'react';
import axios from 'axios';
import './style/loginform.css';

function SignUp() {
  const [isInfo, setIsInfo] = useState({
    id: '',
    password: '',
    recommendation: '',
  });

  const LoginInfo = (e) => {
    const { name, value } = e.target;
    setIsInfo({
      ...isInfo,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    if (
      isInfo.id === '' ||
      isInfo.password === '' ||
      isInfo.recommendation === ''
    ) {
      alert('정보를 입력해주세요.');
    } else {
      const res = await axios.post('http://localhost:4000/users', {
        _id: isInfo.id,
        password: isInfo.password,
        recommend: isInfo.recommendation,
      });
      res.status === 200 ? alert('OK') : alert('Rejected');
      location.href = '/';
    }
  };

  return (
    <div className="sign-up-total-view-port">
      <div className="sign-up-IT_V">
        <input
          className="sign-up-IT_a"
          placeholder="아이디"
          name="id"
          onChange={LoginInfo}
        />
        <input
          className="sign-up-IT_a"
          name="password"
          placeholder="비밀번호"
          onChange={LoginInfo}
        />
        <input
          className="sign-up-IT_a"
          name="recommendation"
          placeholder="추천인"
          onChange={LoginInfo}
        />
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div>
  );
}

export default SignUp;
