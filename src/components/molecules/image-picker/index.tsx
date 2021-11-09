import React, {useState} from "react";
import {ActivityIndicator} from 'react-native'
import {Pressable} from 'native-base'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ImagePickerTypes} from "./imagePicker.types";
import {SonkimApiService} from "../../../share";
import {Alert} from "react-native";

const ImagePicker: React.FC<ImagePickerTypes> = ({from = "gallery", onChange, ...props}) => {
    const [loading, setLoading] = useState(false);

    const _launchImageLibrary = () => {
        launchImageLibrary({mediaType: "photo"}, async (res) => {
            try {
                if (res) {
                    //  @ts-ignore
                    const file = res.assets[0]
                    //  @ts-ignore
                    if (file.fileSize > 5110) {
                        Alert.alert("Hình quá lớn, vui lòng chọn hình dưới 5M")
                        return;
                    }
                    setLoading(true)
                    //  @ts-ignore
                    const uploadData = await SonkimApiService.GetUploadUrl(file.fileName, file.type)

                    const imageUrl = uploadData.url.split("?")[0]

                    //  upload
                    const uploadResponse = await SonkimApiService.UploadImage(file, uploadData.url)
                    onChange(imageUrl)
                    setLoading(false)
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
            {
                loading ? <ActivityIndicator size="small" color="gray.100"/> : props.children
            }
        </Pressable>
    )
}

export default ImagePicker
