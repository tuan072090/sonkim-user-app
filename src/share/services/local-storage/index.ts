import AsyncStorage from '@react-native-async-storage/async-storage';
import MyError from "../error";
import {LanguageType} from "../../context/Language";

class LocalStorage {

    public static instance: LocalStorage;

    public Keys = {
        ACCESS_TOKEN_KEY: "accessToken",
        REFRESH_TOKEN_KEY: "refreshToken",
        FIRST_OPEN_KEY: "firstOpen",
        LANGUAGE_KEY: "language"
    }

    private accessToken: string = "";
    private refreshToken: string = "";
    private firstOpen = true;
    //  @ts-ignore
    private language: LanguageType

    public static GetInstance(): LocalStorage {
        if (!LocalStorage.instance) {
            LocalStorage.instance = new LocalStorage()
        }
        return LocalStorage.instance
    }

    public async SynsData() {
        try {
            const accessToken = await this.GetData(this.Keys.ACCESS_TOKEN_KEY)
            const refreshToken = await this.GetData(this.Keys.REFRESH_TOKEN_KEY)
            const firstOpen = await this.GetData(this.Keys.FIRST_OPEN_KEY)
            const lang = await this.GetData(this.Keys.LANGUAGE_KEY)

            //  set data
            this.accessToken = accessToken || ""
            this.refreshToken = refreshToken || ""
            this.firstOpen = !firstOpen || firstOpen === "yes"
            //  @ts-ignore
            this.language = lang || "vi"

            return this
        } catch (err) {
            throw new MyError(err.message, err.status)
        }
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

    public GetAccessToken() {
        return this.accessToken
    }

    public SetAccessToken(accessToken: string) {
        this.StoreData(this.Keys.ACCESS_TOKEN_KEY, accessToken)

        this.accessToken = accessToken
    }

    public GetRefreshToken() {
        return this.accessToken
    }

    public SetRefreshToken(refreshToken: string) {
        this.StoreData(this.Keys.REFRESH_TOKEN_KEY, refreshToken)

        this.refreshToken = refreshToken
    }

    public GetFirstOpen():boolean {
        return this.firstOpen
    }

    public SetFirstOpen(firstOpen:string):boolean {
        this.StoreData(this.Keys.FIRST_OPEN_KEY, firstOpen)
        return this.firstOpen
    }

    public GetLanguage():LanguageType {
        return this.language
    }

    public SetLanguage(lang: LanguageType) {
        this.StoreData(this.Keys.LANGUAGE_KEY, lang)
        this.language = lang
    }
}

const LocalStorageService = LocalStorage.GetInstance()

export default LocalStorageService;
