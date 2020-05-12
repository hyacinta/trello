/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const LoginPw = ({ inputChange }) => {
  return (
    <label htmlFor="inputPw">
      <Label title="PASSWORD" />
      <Input
        id="inputPassword"
        type="password"
        placeholder="비밀번호를 입력하세요"
        inputChange={inputChange}
      />
    </label>
  );
};
export default LoginPw;
