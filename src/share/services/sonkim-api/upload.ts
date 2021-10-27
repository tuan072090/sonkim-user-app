import FetchDataService from "../fetch";
import MyError from "../error";
import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

export const GetUploadUrl = async (file_name:string, file_type:string) => {
    try {
        console.log("file_name....", file_name)
        console.log("file_type....", file_type)

        const {url, fileName, fileType, expiresIn} = await FetchDataService.POST("/user-upload/presignedurl",{
            fileName: file_name, fileType: file_type})

        return {url, fileName, fileType, expiresIn}
    } catch (err) {
        console.log("Lỗi get upload info", {...err})
        throw err
    }
}

export const UploadImage = async (photo:any, url:string) => {
    try{
        //  create formdata
        const formData = new FormData();

        formData.append("file", {
            name: photo.fileName,
            type: photo.type,
            uri: photo.uri
        });

        const response = await fetch(url, {
            method: "PUT",
            body: formData
        })

        return response
    }catch (err){
        console.log("upload error...", {...err})
        throw new MyError(err.status, "Hình không hợp lệ", 400)
    }
}
