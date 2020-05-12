/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../atoms/Button';

const HeaderLogin = ({ loginId, btnLogout }) => {
  return (
    <div className="loginState">
      <span>{loginId}</span>
      <Button className="btnLogout" title="로그아웃" btnClick={btnLogout} />
    </div>
  );
};

export default HeaderLogin;
