import FetchDataService from "../fetch";

export const CheckPhone = async (phone:string) => {
    try{
        const {exist} = await FetchDataService.GET("/firebase-auth/check", {phone})

        return exist
    }catch (err){
        console.log("check phone error.....", err)
        throw err
    }
}
