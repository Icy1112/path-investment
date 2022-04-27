import React, {useState} from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signUpForm";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%,
   rgba(70,9,121,1) 100%,
   rgba(0,212,255,1) 100%);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;
const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height:"1050px",
    borderRadius: "20%",
    transfrom: "rotate(60deg)"
  },
  collapsed:{
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transfrom:"rotate(60deg)"
  }
}
const expandedTransition = {
  type:"spring",
  duration: 2.3,
  stiffness: 30,
}

export function AccountBox(props){

  const [isExpanded, setExpanded] = useState(false);
  //states to see if it is login or signup state
  const [active, setActive] = useState("login"); // by default it will be on the login page

  const playExpandingAnimation = () => {
    setExpanded(true)
    setTimeout(()=>{
      setExpanded(false)
    }, expandedTransition.duration * 1000 - 1500)
  }

  //used to switch from login to signup
const switchToLogin = () => {
  playExpandingAnimation();
  setTimeout(()=>{
    setActive("login")
  }, 400)
}
const switchToSignup = () => {
  playExpandingAnimation();
  setTimeout(()=>{
    setActive("signUp")
  }, 400)
}
const contextValue = { switchToSignup, switchToLogin}
  return (
    //.provider makes the redux store avaliable to any nested components
  <AccountContext.Provider value={contextValue}>
  <BoxContainer>
    <TopContainer>
      <BackDrop 
      initial={false} //so it's collapsed until it's changed to expanded with backdrop variants.
                      // an onclickk will change the state to expanded(true) running the play animation function
      animate={isExpanded ? "expanded" : "collapsed"}
       variants={backdropVariants}
       transition = {expandedTransition}
       />
      {active ==="login" && <HeaderContainer>
        <HeaderText> Welcome to Path Investments </HeaderText>
        <SmallText>Please sign-in to continue</SmallText>
      </HeaderContainer>}
      {active ==="signUp" && <HeaderContainer>
        <HeaderText> Create Account </HeaderText>
        <SmallText>Please sign-up to continue</SmallText>
      </HeaderContainer>}
    </TopContainer>
    <InnerContainer>
      {active === "login" && <LoginForm />}
      {active === "signUp" && <SignupForm />}
    </InnerContainer>
  </BoxContainer>
  </AccountContext.Provider>
)}