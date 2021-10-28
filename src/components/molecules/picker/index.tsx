import React, {memo, useEffect} from "react";
import {Box, ChevronDownIcon, Select} from "native-base";
import {PickerTypes} from "./picker.types";

const Picker:React.FC<PickerTypes> = memo(({onChange, value, items, placeholder="Chọn", ...props}) => {
    let [pickerValue, setValue] = React.useState<string | undefined>(value);

    useEffect(() => {
        setValue(value)
    },[value])

    const _onChange = (value:string) => {
        setValue(value)
        onChange(value)
    }

    console.log("picker value...", value)
    return (
        <Box {...props}>
            <Select
                // @ts-ignore
                fontSize="md"
                placeholder={placeholder}
                color="white"
                placeholderTextColor="white"
                p={3}
                rounded="xl"
                borderWidth={0}
                selectedValue={pickerValue}
                dropdownIcon={<ChevronDownIcon color="white" size="6"/>}
                onValueChange={_onChange}>

                {
                    items.map((item, index) => {
                        return (<Select.Item key={index} label={item.label} value={item.value}/>)
                    })
                }
            </Select>
        </Box>
    )
})

export default Picker
