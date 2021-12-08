import React, {useState} from "react";
import {ActivityIndicator, Alert} from 'react-native'
import {HStack, Modal, Pressable} from 'native-base'
import {ImagePickerResponse, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ImagePickerTypes} from "./imagePicker.types";
import {SonkimApiService} from "../../../share";
import {Typo} from "../../atoms/typo";
import MyButton from "../../atoms/button";

const ImagePicker: React.FC<ImagePickerTypes> = ({from = "gallery", onChange, ...props}) => {
    const [loading, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false)

    const _launchImageLibrary = () => {
        launchImageLibrary({mediaType: "photo"}, _handleImageResponsePicker)
        setOpenModal(false)
    }

    const _launchCamera = () => {
        launchCamera({mediaType: "photo", cameraType: "front"}, _handleImageResponsePicker)
        setOpenModal(false)
    }

    const _handleImageResponsePicker = async (res:ImagePickerResponse) => {
        try {
            if(res && res.errorCode){
                Alert.alert("Có lỗi sảy ra", "#"+res.errorCode)
                return
            }
            if (res && !res.didCancel) {
                //  @ts-ignore
                const file = res.assets[0]
                //  @ts-ignore
                if (file.fileSize > 5120000) {
                    Alert.alert("Hình quá lớn, vui lòng chọn hình dưới 5M")
                    return;
                }
                setLoading(true)
                //  @ts-ignore
                const uploadData = await SonkimApiService.GetUploadUrl(file.fileName, file.type)

                const imageUrl = uploadData.url.split("?")[0]

                //  upload
                await SonkimApiService.UploadImage(file, uploadData.url)
                const uploadTime = new Date().getTime()
                setLoading(false)
                onChange(imageUrl + "?time="+uploadTime)
            }
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    return (
        <>
            <Pressable onPress={()=>setOpenModal(true)} {...props}>
                {
                    loading ? <ActivityIndicator size="small" color="gray.100"/> : props.children
                }
            </Pressable>

            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} mt={12}>
                <Modal.Content width="100%" paddingBottom={10} marginTop="auto" safeAreaBottom={true}>
                    <Modal.CloseButton/>
                    <Modal.Header><Typo type="subtitle16" textAlign="center">Chọn ảnh</Typo></Modal.Header>

                    <Modal.Body>
                        <HStack py={4}>
                            <MyButton onPress={_launchImageLibrary} variant="outline" size="lg" flex={1} mx={3}>Chọn từ
                                album</MyButton>

                            <MyButton onPress={_launchCamera} variant="outline" size="lg" flex={1} mx={3}>Chụp ảnh
                                mới</MyButton>
                        </HStack>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default ImagePicker
