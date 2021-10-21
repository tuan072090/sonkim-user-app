import {IPressableProps, Pressable, Text} from "native-base";

export interface DatepickerTypes extends IPressableProps {
    value: Date,
    onChange: (date: Date) => void
}
