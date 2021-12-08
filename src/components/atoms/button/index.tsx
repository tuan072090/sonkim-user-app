import React from "react";
import {Button, IButtonProps} from "native-base";

const MyButton:React.FC<IButtonProps> = ({children, size="md", ...props}) => {

    const paddingY = size === "lg" ? 3 : size === "md" ? 2 : 1
    return (
        <Button py={paddingY} _pressed={{opacity: 0.7}} size={size} rounded="xl" {...props}>{children}</Button>
    )
}

export default MyButton
