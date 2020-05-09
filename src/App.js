import React, { Component } from 'react';
import './App.css';

class App extends Component {
  inputIdChange = () => {
    console.log('사용자 아이디 입력중');
  };

  inputPwChange = () => {
    console.log('사용자 비밀번호 입력중');
  };

  buttonClick = (e) => {
    e.preventDefault();
    console.log('로그인 시도');
  };

  render() {
    return (
      <div className="wrap">
        <form className="loginForm">
          <h1>로그인</h1>
          <ul>
            <li>
              <label htmlFor="inputId">
                <span className="inputLabel">ID</span>
                <input
                  id="inputId"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  onChange={this.inputIdChange}
                  className="inputText"
                />
              </label>
            </li>
            <li>
              <label htmlFor="inputPw">
                <span className="inputLabel">PASSWORD</span>
                <input
                  id="inputPw"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onChange={this.inputPwChange}
                  className="inputText"
                />
              </label>
            </li>
          </ul>
          <button type="button" className="btnLogin" onClick={this.buttonClick}>
            로그인하기
          </button>
        </form>
      </div>
    );
  }
}

export default App;
