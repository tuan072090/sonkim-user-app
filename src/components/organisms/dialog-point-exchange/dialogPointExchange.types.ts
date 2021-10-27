import React from "react";

export type DialogPointChanger = {
    logoUri?: any;
    isOpen: boolean;
    onClose: () => void;
    choiseBu: (value: any) => any;
};
