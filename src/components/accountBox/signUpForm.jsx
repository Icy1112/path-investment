import React, { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
    const {switchToLogin} = useContext(AccountContext)

    return <BoxContainer>
    <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email"/>
        <Input type="password" placeholder="Password"/>
        <Input type="password" placeholder="Confirm Password"/>
    </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit">Sign up</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Already have an account? <BoldLink href="#" onClick={switchToLogin}>Login</BoldLink></MutedLink>
</BoxContainer>
}