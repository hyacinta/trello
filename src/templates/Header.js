/* eslint-disable react/prop-types */
import React from 'react';
import './Header.css';
import HeaderLogin from '../orginisms/HeaderLogin';
import HeaderLogout from '../orginisms/HeaderLogout';

const Header = ({ isLogin, clickLogout, loginId }) => {
  return (
    <header>
      <h1 className="a11yHidden">트렐로</h1>
      {isLogin ? (
        <HeaderLogin loginId={loginId} clickLogout={clickLogout} />
      ) : (
        <HeaderLogout />
      )}
    </header>
  );
};

export default Header;
