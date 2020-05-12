/* eslint-disable react/prop-types */
import React from 'react';
import HeaderLogin from '../orginisms/HeaderLogin';
import HeaderLogout from '../orginisms/HeaderLogout';

const Header = ({ isLogin, loginId, btnLogout }) => {
  return (
    <header>
      {isLogin ? (
        <HeaderLogin loginId={loginId} btnLogout={btnLogout} />
      ) : (
        <HeaderLogout />
      )}
    </header>
  );
};

export default Header;
