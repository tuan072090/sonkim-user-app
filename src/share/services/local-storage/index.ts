import AsyncStorage from '@react-native-async-storage/async-storage';
import MyError from "../error";

class LocalStorage {

    public static instance: LocalStorage;

    public Keys = {
        ACCESS_TOKEN_KEY: "accessToken",
        REFRESH_TOKEN_KEY: "refreshToken",
        FIRST_OPEN_KEY: "firstOpen"
    }

    private accessToken: string = "";
    private refreshToken: string = "";
    private firstOpen = true;

    public static GetInstance(): LocalStorage {
        if (!LocalStorage.instance) {
            LocalStorage.instance = new LocalStorage()
        }
        return LocalStorage.instance
    }

    public async SynsData(){
        try {
            const accessToken = await this.GetData(this.Keys.ACCESS_TOKEN_KEY)
            const refreshToken = await this.GetData(this.Keys.REFRESH_TOKEN_KEY)
            const firstOpen = await this.GetData(this.Keys.FIRST_OPEN_KEY)

            //  set data
            this.accessToken = accessToken || ""
            this.refreshToken = refreshToken || ""
            this.firstOpen = firstOpen === "true"
        } catch (err){
            throw new MyError(err.status, err.message)
        }
    }

    public async StoreData(key: string, value: string) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            throw new MyError(e.status, e.message)
        }
    }

    public async GetData(key: string) {
        try {
            const value = await AsyncStorage.getItem(key)
            return value
        } catch (e) {
            throw new MyError(e.status, e.message)
        }
    }

    public GetAccessToken(){
        return this.accessToken
    }

    public SetAccessToken(accessToken:string){
        this.accessToken = accessToken
    }

    public GetRefreshToken(){
        return this.accessToken
    }

    public SetRefreshToken(refreshToken:string){
        this.refreshToken = refreshToken
    }
}

const LocalStorageService = LocalStorage.GetInstance()

export default LocalStorageService;
