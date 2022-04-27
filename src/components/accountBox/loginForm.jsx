import React, { useContext, useState } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";


export function LoginForm(props) {
    const handleLogin = () => {
        props.history.push('/home')
    }
    const useFormInput= initialValue => {
        const[value, setValue] = useState(initialValue)
        const handleChange = e => {
            setValue(e.target.value);
        }
        return {
            value,
            onChnage: handleChange
        }
    }
    const {switchToSignup} = useContext(AccountContext)
    return <BoxContainer>
    <FormContainer>
        <Input type="email" placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
    </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forgot your password?</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit">Login</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Sign up</BoldLink></MutedLink>
    </BoxContainer>

}