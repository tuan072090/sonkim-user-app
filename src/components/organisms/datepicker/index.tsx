import React, {memo, useEffect, useState} from "react";
import {Platform} from "react-native";
import {Box,ChevronDownIcon, Pressable, Text} from "native-base";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {DatepickerTypes} from "./datepicker.types";
import {Formatter} from "../../../share";

const DatePicker: React.FC<DatepickerTypes> = memo(({onChange, value, ...props}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState<Date | null>(value)

    useEffect(() => {
        if(value && value.getTime() !== date?.getTime()){
            setDate(value)
        }
    }, [value])

    const _toggleDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible)
    }

    const _dateConfirm = (date: Date) => {
        setDate(date)
        onChange(date)
        _toggleDatePicker()
    }

    return (
        <Box height={props.height || 12} overflow="hidden">
            <Pressable bgColor="white" onPress={_toggleDatePicker} position="relative" {...props}>
                <Text color="white" fontSize="md" size="2xl">
                    {
                        date ? `${Formatter.FormatDateFromDate(date)}` : "Chọn ngày sinh"
                    }
                </Text>

                <ChevronDownIcon color="white" size="6" position="absolute" right={3} top={3}/>
            </Pressable>
            <DateTimePickerModal
                date={date || value}
                isVisible={isDatePickerVisible}
                mode="date"
                confirmTextIOS="Xác nhận"
                cancelTextIOS="Đóng"
                //  @ts-ignore
                display={Platform.OS === "ios" ? "inline" : "default"}
                onConfirm={_dateConfirm}
                onCancel={_toggleDatePicker}
            />
        </Box>
    )
})

export default DatePicker
