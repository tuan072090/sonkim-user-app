import FetchDataService from "../fetch";
import {LocalStorageService} from "../../index";

export const CheckPhone = async (phone: string) => {
    try {
        const {exist} = await FetchDataService.GET("/firebase-auth/check", {phone})

        return exist
    } catch (err) {
        console.log("check phone error.....", err)
        throw err
    }
}

export const Login = async ({phone = "", password = ""}) => {
    try {
        const {jwt, user}  = await FetchDataService.POST("/firebase-auth/login", {phone, password})

        return {jwt, user}
    } catch (err) {
        console.log("Login error.....", err)
        throw err
    }
}

export const Logout = async () => {
    try {
        LocalStorageService.SetAccessToken("")
        LocalStorageService.SetRefreshToken("")
    } catch (err) {
        console.log("Logout error.....", err)
        throw err
    }
}

export const Register = async ({idToken = "", password = "", fullName="", email=""}) => {
    try {
        const {jwt, user} = await FetchDataService.POST("/firebase-auth/register", {
            idToken,password, fullName, email
        })

        return {jwt, user}
    } catch (err) {
        console.log("Register error.....", err)
        throw err
    }
}

export const ResetPassword = async ({idToken = "", password = "", passwordConfirmation=""}) => {
    try {
        const res = await FetchDataService.POST("/firebase-auth/reset-password", {
            idToken,password, passwordConfirmation
        })

        return res
    } catch (err) {
        console.log("ResetPassword error.....", err)
        throw err
    }
}