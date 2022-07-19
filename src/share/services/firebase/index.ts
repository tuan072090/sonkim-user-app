import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';

import MyError from "../error";
import LocalStorageService from "../local-storage";
import {useLocalStorage} from "../..";

const SignInWithPhone = async (phone:string) => {
    try{
        //  thêm mã vùng
        const formatPhone = "+84"+parseInt(phone)

        const confirmation = await auth().signInWithPhoneNumber(formatPhone);

        return confirmation
    }catch (err){
        throw new MyError(err.message, 400)
    }
}

const RequestNotificationPermission = async () => {
    try{
        const authStatus = await messaging().requestPermission();
        await LocalStorageService.StoreData(useLocalStorage.KEY_NOTIFICATION_PERMISSION_STATUS, authStatus+"");

        const isAllow = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL

        if(isAllow){
            GetFirebaseDeviceToken()
        }

        return isAllow
    } catch (err) {
    }
}

const GetFirebaseDeviceToken = () => {
    messaging().getToken().then(async (deviceToken) => {
        await LocalStorageService.StoreData(useLocalStorage.KEY_NOTIFICATION_DEVICE_TOKEN, deviceToken)
    }).catch(err => {
        console.log("get device token error.......", err)
    })
}

const FirebaseService = {
    SignInWithPhone,
    RequestNotificationPermission
}

export default FirebaseService
