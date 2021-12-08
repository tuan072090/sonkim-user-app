import React, {useContext, useEffect, useState} from "react";
import {Box,InfoIcon, CheckIcon, CloseIcon, WarningIcon} from "native-base";
import {Typo} from "../../atoms/typo";
import AppProvider from "../../../share/context";
import PressBox from "../../atoms/press-box";

const FloatMessage = () => {
    const {message:data, dispatch} = useContext(AppProvider.context)

    if(!data) return null

    let {message, status, delay} = data

    if(!status) status = "info"
    if(!delay) delay = 3000 //  3 seconds

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch({
                type: AppProvider.actions.UPDATE_MESSAGE,
                data: null
            })
        },delay)

        return () => clearTimeout(timeout)
    },[data])

    const _onPressHandler = () => {
        dispatch({
            type: AppProvider.actions.UPDATE_MESSAGE,
            data: null
        })
    }

    const bgColor = status+".500"

    return (
        <PressBox onPress={_onPressHandler} width="100%" flexDirection="row" alignItems="center" bgColor={bgColor} p={3} pt={10} position="absolute" top={0} left={0} zIndex={10}>
            {
                status === "success" ? <CheckIcon size="4" color="white"/>
                : status === "error" ? <CloseIcon  size="4" color="white"/>
                    : status === "warning" ? <WarningIcon  size="4" color="white"/>
                : <InfoIcon  size="4" color="white" />
            }

            <Typo ml={3} color="white" type="body14">{message}</Typo>
        </PressBox>
    )
}

export default FloatMessage
