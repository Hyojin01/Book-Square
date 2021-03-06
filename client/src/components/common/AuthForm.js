import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

// signup / signin 컴포넌트 렌더링

const AuthFormWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::after, &::before, & > section::after, & > section::before {
    content: '';
    position: absolute;
    border-radius: 50%
  }
  &::after {
    top: 0;
    right: 20px;
    background: #ffd0ef;
    width: 450px;
    height: 450px;
  }
  &::before {
    bottom: -50px;
    left: -60px;
    background: #aafcff;
    width: 600px;
    height: 600px;
  }

  & > section {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 50%;
    z-index: 1;
    display: flex;
    box-shadow: 13px 15px 20px 0px rgba(0,0,0,0.2);
    border-radius: 10px;
    &::after {
      top: -80px;
      left: -250px;
      background: #ff0000;
      width: 100px;
      height: 100px;
    }
    &::before {
      bottom: -100px;
      right: -300px;
      background: #09ff05;
      width: 200px;
      height: 200px;
    }
    & > .greetings {
      width: 40%;
      height: 100%;
      background: #65dffb;
      border-radius: 10px 0 0 10px;
      color: #fff;
      & > strong {
        display: block;
        text-align: center;
        font-size: 30px;
        margin: 100px auto 80px;
        letter-spacing: 1px;
      }
      & > p {
        font-size: 16px;
        margin: 0 auto;
        width: 80%;
        text-align: center;
      }
    }
    & > .formSection {
      width: 60%;
      height: 100%;
      background: #f0fffd;
      border-radius: 0 10px 10px 0;
      color: #000000;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      & > strong {
        display: block;
        text-align: center;
        font-size: 30px;
      }
      & > form {
        margin-top: 30px;
        & > span {
          color: red;
          text-align: center;
          display: block;
        }
      }
    }
  }
`;

const InputStyled = styled.input`
  font-size: 15px;
  display: block;
  border: none;
  border-bottom: 2px solid #ddd;
  background: none;
  padding-bottom: 0.5rem;
  outline: none;
  width: 70%;
  margin: 0 auto;
  & + & {
    margin-top: 30px;
  }
`;

const textMap = {
  SignIn: "Sign In",
  SignUp: "Sign Up",
};

const AuthForm = ({ type, form, onChangeInputHandler, onSubmitFormHandler, error }) => {
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <section>
        <div className="greetings">
          <strong>{text === "Sign Up" ? "Welcome!" : "Welcome Back!"}</strong>
          <p>
            {text === "Sign Up"
              ? "To keep connected with us please login with your personal info"
              : "Enter your personal details and start journey with us"}
          </p>
        </div>
        <div className="formSection">
          <strong>
            {text === "Sign Up" ? "Create Account" : "Login Account"}
          </strong>
          <form onSubmit={onSubmitFormHandler}>
            {text === "Sign Up" && (
              <InputStyled
                name="name"
                placeholder="Name"
                value={form.name}
                required
                onChange={onChangeInputHandler}
              />
            )}
            <InputStyled
              name="email"
              placeholder="Email"
              value={form.email}
              required
              onChange={onChangeInputHandler}
            />
            <InputStyled
              name="password"
              placeholder="password"
              type="password"
              value={form.password}
              required
              onChange={onChangeInputHandler}
            />
            {text === "Sign Up" && (
              <InputStyled
                name="passwordCheck"
                placeholder="password Check"
                type="password"
                value={form.passwordCheck}
                required
                onChange={onChangeInputHandler}
              />
            )}
            {error && <span>{error}</span>}
            <Button text={text} />
          </form>
        </div>
      </section>
    </AuthFormWrapper>
  );
};

export default AuthForm;
