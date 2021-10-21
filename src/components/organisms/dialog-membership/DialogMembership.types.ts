import React from "react";

export type DialogMemberShipType = {
    logoUri?: any,
    title: string,
    messenge: string,
    footer?: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}