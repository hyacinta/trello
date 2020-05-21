/* eslint-disable react/prop-types */
import React from 'react';

const HeaderLogin = ({ clickLogout, loginId }) => {
  return (
    <div className="loginState">
      <span>{loginId}</span>
      <button type="button" onClick={clickLogout} className="btnLogout">
        로그아웃
      </button>
    </div>
  );
};
export default HeaderLogin;
