import AsyncStorage from '@react-native-async-storage/async-storage';
import MyError from "../error";

class LocalStorage {

    public static instance: LocalStorage;

    public static GetInstance(): LocalStorage {
        if (!LocalStorage.instance) {
            LocalStorage.instance = new LocalStorage()
        }
        return LocalStorage.instance
    }
    public async StoreData(key: string, value: string) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            throw new MyError(e.message, e.status)
        }
    }

    public async GetData(key: string) {
        try {
            const value = await AsyncStorage.getItem(key)
            return value
        } catch (e) {
            throw new MyError(e.message, e.status)
        }
    }
}

const LocalStorageService = LocalStorage.GetInstance()

export default LocalStorageService;
