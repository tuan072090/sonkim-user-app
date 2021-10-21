import React, {useState} from "react";
import {Platform} from "react-native";
import {Pressable, Text, ChevronDownIcon} from "native-base";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {DatepickerTypes} from "./datepicker.types";

const DatePicker:React.FC<DatepickerTypes> = ({onChange, value, ...props}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState<Date|null>(null)

    const _toggleDatePicker = () => {
        setDatePickerVisibility(!isDatePickerVisible)
    }

    const _dateConfirm = (date:Date) => {
        onChange(date)
        _toggleDatePicker()
        setDate(date)
    }

    return (
        <>
            <Pressable onPress={_toggleDatePicker} position="relative" {...props}>
                <Text color="white" fontSize="md" size="2xl">
                    {
                        date ? `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` : "Chọn ngày sinh"
                    }
                </Text>

                <ChevronDownIcon color="white" size="6" position="absolute" right={3} top={3}/>
            </Pressable>

            <DateTimePickerModal
                date={date||value}
                isVisible={isDatePickerVisible}
                mode="date"
                confirmTextIOS="Xác nhận"
                cancelTextIOS="Đóng"
                //  @ts-ignore
                display={Platform.OS === "ios" ? "inline" : "default"}
                onConfirm={_dateConfirm}
                onCancel={_toggleDatePicker}
            />
        </>
    )
}

export default DatePicker
