import auth from '@react-native-firebase/auth';
import MyError from "../error";

const SignInWithPhone = async (phone:string) => {
    try{
        //  thêm mã vùng
        const formatPhone = "+84"+parseInt(phone)

        console.log("verify phone...", formatPhone)

        const confirmation = await auth().signInWithPhoneNumber(formatPhone);

        return confirmation
    }catch (err){
        throw new MyError(err.message, 400)
    }
}

const FirebaseService = {
    SignInWithPhone
}

export default FirebaseService
