import React from "react";
import {Box, ChevronDownIcon, Select} from "native-base";
import {PickerTypes} from "./picker.types";

const Picker:React.FC<PickerTypes> = ({onChange, value, items, ...props}) => {
    let [pickerValue, setValue] = React.useState<string | undefined>(value);

    const _onChange = (value:string) => {
        setValue(value)
        onChange(value)
    }

    return (
        <Box {...props}>
            <Select
                // @ts-ignore
                fontSize="md"
                placeholder="Chọn giới tính"
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
}

export default Picker
