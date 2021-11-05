import React from "react";
import {Button, IButtonProps} from "native-base";

const MyButton:React.FC<IButtonProps> = ({children, ...props}) => {

    return (
        <Button py={3} _pressed={{opacity: 0.7}} size="lg" rounded="xl" {...props}>{children}</Button>
    )
}

export default MyButton
