import React from "react";

export type DialogType = {
    imgUri?: string,
    title: string,
    messenge: string,
    footer?: React.ReactNode,
    isOpen: boolean,
    onClose: () => void,
}
