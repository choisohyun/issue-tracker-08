import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import GitHubIcon from "@material-ui/icons/GitHub";

import Text from "@Style/Text";
import Button from "@Style/Button";

import PersonalInputBox from "@InputBox/PersonalInputBox";
import SignupPage from "@SignupPage/SignupPage";
import { API_URL } from "@Constants/url";
import { postLogin } from "@Modules/user";

const LoginPage = ({ postLogin, userMsg, loadingUser }) => {
  let history = useHistory();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ login: "", password: "" });

  useEffect(() => {
    if (userMsg === 204 && document.cookie) history.push(`/IssueListPage`);
  }, [userMsg]);

  const generalLoginHandler = () => {
    (async () => {
      try {
        console.log(loginInfo);
        await postLogin(loginInfo);
      } catch (e) {
        console.log(e);
      }
    })();
  };

  const oauthLoginHandler = () => {
    window.location.href = API_URL.oauth;
  };

  const openHandler = () => setIsSignupOpen(!isSignupOpen);

  const changeId = ({ target }) => {
    setLoginInfo({ ...loginInfo, login: target.value });
  };

  const changePassword = ({ target }) => {
    setLoginInfo({ ...loginInfo, password: target.value });
  };

  return (
    <>
      <LoginPageWrap>
        <Text fontSize="xl" color="black" fontWeight="extraBold">
          이슈 트래커
        </Text>
        <BoxWrap>
          <LoginWrap isSignupOpen={isSignupOpen}>
            <PersonalInputBox title="아이디" onChange={changeId} />
            <PersonalInputBox title="비밀번호" type="password" onChange={changePassword} />
            <ButtonWrap>
              <Button backgroundColor="blue" style={loginButtonStyle} onClick={generalLoginHandler}>
                로그인
              </Button>
              <Button backgroundColor="blue" style={loginButtonStyle} onClick={openHandler}>
                회원가입
              </Button>
            </ButtonWrap>
            <Button backgroundColor="gray4" style={githubButtonStyle} onClick={oauthLoginHandler}>
              Sign in with Github
              <GitHubIcon style={githubLogoStyle} />
            </Button>
          </LoginWrap>
          <SignupPage isSignupOpen={isSignupOpen} openHandler={openHandler}></SignupPage>
        </BoxWrap>
      </LoginPageWrap>
    </>
  );
};

const LoginPageWrap = styled.div`
  padding: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BoxWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray1};
  margin: 30px;
  width: 400px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
`;

const LoginWrap = styled.div`
  display: ${(props) => (props.isSignupOpen ? "none" : "block")};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 32px;
`;

const loginButtonStyle = {
  width: "49%",
  textAlign: "center",
};

const githubButtonStyle = {
  width: "100%",
  margin: "5px 0",
  height: "32px",
};

const githubLogoStyle = {
  height: "20px",
  margin: "5px",
};

export default connect(
  ({ user, loading }) => ({
    userMsg: user.userMsg,
    loadingUser: loading["user/POST_LOGIN"],
  }),
  {
    postLogin,
  }
)(LoginPage);
