import React from "react";
import {Pressable} from 'native-base'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ImagePickerTypes} from "./imagePicker.types";
import {SonkimApiService} from "../../../share";
import {Alert} from "react-native";

const ImagePicker: React.FC<ImagePickerTypes> = ({from = "gallery", ...props}) => {

    const _launchImageLibrary = () => {
        launchImageLibrary({mediaType: "photo"}, async (res) => {
            try {
                console.log("launch image response", res)
                if (res) {
                    //  @ts-ignore
                    const file = res.assets[0]
                    //  @ts-ignore
                    if (file.fileSize > 10000000) {
                        Alert.alert("Hình quá lớn, vui lòng chọn hình dưới 10M")
                        return;
                    }
                    //  @ts-ignore
                    const uploadData = await SonkimApiService.GetUploadUrl(file.fileName, file.type)
                    console.log("uploadData...", uploadData)

                    const imageUrl = uploadData.url.split("?")[0]
                    console.log("imageUrl...", imageUrl)

                    //  upload
                    const uploadResponse = await SonkimApiService.UploadImage(file, uploadData.url)
                    console.log("uploadResponse...", uploadResponse)
                    return imageUrl
                }
            } catch (err) {

                Alert.alert(err.message)
            }
        })
    }
    const _launchCamera = () => {
        launchCamera({mediaType: "photo"}, res => {
            console.log("launchCamera response", res)
        })
    }
    const _onPress = () => {
        if (from === "camera") {
            _launchCamera()
        } else {
            _launchImageLibrary()
        }
    }

    return (
        <Pressable onPress={_onPress} {...props}>
            {props.children}
        </Pressable>
    )
}

export default ImagePicker
