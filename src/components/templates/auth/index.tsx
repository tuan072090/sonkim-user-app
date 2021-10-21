import React, {useState} from "react";
import {Box, Text} from "native-base";
import {PhoneInputForm} from "./components/PhoneInputForm";
import {LoginForm} from "./components/LoginForm";
import {ResetPasswordForm} from "./components/ResetPasswordForm";
import { OtpForm } from "./components/OtpForm";
import {RegisterForm} from "./components/RegisterForm";

type AuthDisplayTypes = "phone" | "register"|"login"|"resetPassword"|"otp"

const AuthComponent:React.FC<{display:AuthDisplayTypes}> = ({display="register"}) => {
    const [formDisplay, setFormDisplay] = useState<AuthDisplayTypes>(display)

    return (
        <Box>
            {
                formDisplay === "phone" ? <PhoneInputForm/>
                    : formDisplay === "register" ? <RegisterForm/>
                : formDisplay === "resetPassword" ? <ResetPasswordForm/>
                : formDisplay === "otp" ? <OtpForm/>
                : <LoginForm/>
            }
        </Box>
    )
}

export default AuthComponent
