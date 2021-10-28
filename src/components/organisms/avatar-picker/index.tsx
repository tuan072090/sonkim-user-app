import React, {useState} from "react";
import {EditIcon, ImageIcon, ImagePicker} from "../..";
import Image from "../../atoms/image";
import {ImagePickerTypes} from "../../molecules/image-picker/imagePicker.types";
import {Box} from "native-base";

const AvatarPicker:React.FC<ImagePickerTypes> = ({onChange,from = "gallery", ...props}) => {
    const [avatar, setAvatar] = useState("")

    const _uploadImgChange = (imgUri: string) => {
        setAvatar(imgUri)
        onChange(imgUri)
    }

    return (
        <ImagePicker
            onChange={_uploadImgChange}
            from={from}
            justifyContent="center"
            alignItems="center"
            rounded="full"
            width={24}
            height={24}
            position="relative"
            bgColor="rgba(255,255,255,0.5)" {...props}
        >
            {
                avatar.length === 0
                ? <ImageIcon size={20}/>
                : <Image uri={avatar} size={20}/>
            }

            <Box position="absolute" top={0} right={0} bgColor="white" p={2} rounded="full" shadow="1">
                <EditIcon size={5}/>
            </Box>
        </ImagePicker>
    )
}

export default AvatarPicker
