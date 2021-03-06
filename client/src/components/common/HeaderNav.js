import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logoIMG from '../../images/logo.png';
import { loggedUserInfo } from "../../modules/user";
import { signOut } from "../../modules/auth";

const HeaderNavWrapper = styled.div`
  width: 100%;
  height: 80px;
  font-family: inherit;
  position: relative;
  .logoIMG {
    width: 180px;
    height: 100%;
    background: url(${logoIMG}) no-repeat 50% 50% / 120% 280%;
    font-size: 0;
    display: inline-block;
    & > a {display: block; width: 100%; height: 100%;}
  }
  &,
  & > .navLinkSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .navLinkSection {
    width: 60%;
    height: 100%;
    & > a {
      position: relative;
      padding: 10px 0 3px;
      &::after,
      &::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        transition: 0.2s ease transform;
      }
      &::after {
        top: 4px;
        left: 13px;
        width: 6px;
        height: 6px;
      }
      &::before {
        top: -2px;
        left: 0;
        width: 9px;
        height: 9px;
      }
      &:nth-child(odd):before {
        background-color: #f2ff00;
      }
      &:nth-child(odd):after {
        background-color: #ff0000;
      }
      &:nth-child(even):before {
        background-color: #00e2ff;
      }
      &:nth-child(even):after {
        background-color: #89ff00;
      }
      &:hover:before,
      &:hover:after {
        transform: scale(1);
      }
      &:nth-child(odd):hover {
        border-width: 100%;
        border-bottom: 3px solid;
        border-image: linear-gradient(130deg, yellow, red) 1;
      }

      &:nth-child(even):hover {
        border-width: 100%;
        border-bottom: 3px solid;
        border-image: linear-gradient(130deg, #00e2ff, #89ff00) 1;
      }
    }
  }
  .authSection {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 100%;
    & > a {
      font-size: 18px;
    }
    & > a + a {
      margin-left: 30px;
    }
  }
  section > a {
    display: inline-block;
    font-size: 20px;
    color: #111;
    &:hover {
      color: #00e2ff;
      font-weight: 500;
    }
  }
`;

const HeaderNav = () => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector(({ loggedUser }) => ({ loggedUser: loggedUser.user }));

  const onSignOutHandler = () => {
    dispatch(loggedUserInfo(null));
    dispatch(signOut(null));
    localStorage.removeItem('user');
  }
  return (
    <HeaderNavWrapper>
      <h1 className="logoIMG">
        <Link to="/">BookSquare</Link>
      </h1>
      <section className="navLinkSection">
        <Link to="/SearchBooks">검색</Link>
        <Link to="/MyLibrary">내 서재</Link>
        <Link to="/DiscussionRoom">토론 방</Link>
        <Link to="/MyPage">마이페이지</Link>
      </section>
      <section className="authSection">
        {loggedUser ? (
          <Link to="/" onClick={() => onSignOutHandler()}>로그아웃</Link>
        ) : (
          <>
            <Link to="/SignIn">로그인</Link>
            <Link to="/SignUp">회원가입</Link>
          </>
        )}
      </section>
    </HeaderNavWrapper>
  );
};

export default HeaderNav;