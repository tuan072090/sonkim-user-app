import React, {memo, useEffect, useState} from "react";
import {ISwitchProps, Switch} from "native-base";

type MySwitchType = {
    onChangeValue: (value:boolean) => void
}
const MySwitch: React.FC<ISwitchProps & MySwitchType> = memo(({onChangeValue, isChecked= false, ...props}) => {
    const [checked, setCheck] = useState(isChecked)

    useEffect(() => {
        setCheck(isChecked)
    },[isChecked])

    const _toggleCheck = () => {
        onChangeValue(!checked)
        setCheck(!checked)
    }

    return (
        <Switch isChecked={checked} onToggle={_toggleCheck} size="md" onTrackColor="success.500"
                onThumbColor="white" {...props}/>
    )
})

export default MySwitch
