/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const LoginId = ({ inputChange }) => {
  return (
    <label htmlFor="inputId">
      <Label title="ID" />
      <Input
        id="inputId"
        type="text"
        placeholder="아이디를 입력하세요"
        inputChange={inputChange}
      />
    </label>
  );
};
export default LoginId;
