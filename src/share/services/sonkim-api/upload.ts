import FetchDataService from "../fetch";
import MyError from "../error";

export const GetUploadUrl = async (file_name:string, file_type:string) => {
    try {
        const {url, fileName, fileType, expiresIn} = await FetchDataService.POST("/user-upload/presignedurl",{
            fileName: file_name, fileType: file_type})

        return {url, fileName, fileType, expiresIn}
    } catch (err) {
        throw err
    }
}

export const UploadImage = async (photo:any, url:string) => {
    try {
        const response = await fetch(url, {
            method: "PUT",
            body: photo
        })

        return response
    }catch (err){
        throw new MyError("Hình không hợp lệ", 400)
    }
}
