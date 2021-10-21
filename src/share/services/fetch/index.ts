import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import MyError from "../error";
import LocalStorage from "../local-storage";
import {AuthResponseType} from "../../data-types/user";
import {API_URI} from "../../configs";

type MethodType = "GET" | "POST" | "PUT"

class FetchData {
    private static fetchDataInstance: FetchData;
    private axiosInstance: AxiosInstance;
    private headers = {}

    public static GetInstance() {
        if (!FetchData.fetchDataInstance) {
            FetchData.fetchDataInstance = new FetchData()
        }
        return FetchData.fetchDataInstance
    }

    constructor() {
        const accessToken = LocalStorage.GetAccessToken();

        if(accessToken && accessToken.length > 0){
            this.headers = {Authorization: "Bearer " + accessToken }
        }

        this.axiosInstance = axios.create({
            baseURL: API_URI,
            timeout: 10000, //  10s
            headers: this.headers
        });

        //  auto refresh token when 401 error
        // this.axiosInstance.interceptors.response.use((response) => {
        //     return response;
        // }, async (error: AxiosError) => {
        //     try  {
        //         const status = error.response ? error.response.status : null
        //
        //         if (status === 401 && accessToken && accessToken.length > 0) {
        //             await this.RefreshToken()
        //             //  retry request
        //             const originalRequest = error.config
        //
        //             return this.axiosInstance.request({...originalRequest, headers:{
        //                     Authorization: "Bearer " + LocalStorage.GetAccessToken()
        //                 }})
        //         }
        //
        //         return Promise.reject(error);
        //     } catch (err){
        //         return Promise.reject(err);
        //     }
        // });
    }

    private handleData = function (res: AxiosResponse<any>) {
        return res.data;
    }

    private handleError = function (error: AxiosError|any) {
        try {
            //  Need optimize
            const message = error.response?.data?.message || "Something error"
            const status = error.response?.status || 500
            const code = error.response?.data?.code || 500
            const errors = error.response?.data?.errors || []

            throw new MyError(status, message, code, errors)
        }catch (err){
            throw new MyError(500, "Unknown error", 500, [])
        }
    }

    public SetAccessToken(accessToken = "") {
        this.headers = accessToken.length > 0 ? { Authorization: "Bearer " + accessToken } : {}
    }

    public GET(route: string, params = {}) {
        return this.executeRequest("GET", route, params)
    }

    public PUT(route: string, params = {}) {
        return this.executeRequest("PUT", route, params)
    }

    public POST(route: string, params = {}) {
        return this.executeRequest("POST", route, params)
    }

    public async RefreshToken() {
        try {
            const accessToken = LocalStorage.GetAccessToken()

            if(!accessToken || accessToken.length === 0) throw new MyError(400, "access token not found")

            const res = await axios.post(API_URI + "/account/security/refresh",
                {
                    "data": {
                        "refresh_token": LocalStorage.GetRefreshToken()
                    }
                },
                {headers: { Authorization: "Bearer " + LocalStorage.GetAccessToken() }}
            )

            // @ts-ignore
            const authData: AuthResponseType = res.data
            const {refresh_token, access_token} = authData.session

            this.SetAccessToken(access_token)

            LocalStorage.SetRefreshToken(refresh_token)
            LocalStorage.SetAccessToken(access_token)

            return authData

        } catch (err) {
            //  logout
            this.SetAccessToken("")
            LocalStorage.SetAccessToken("");
            LocalStorage.SetRefreshToken("");
            this.handleError(err)
        }
    }

    private executeRequest = (method: MethodType, route: string, params = {}) => {

        switch (method) {
            case "GET":
                return this.axiosInstance.get(route, {
                    params,
                    headers: this.headers
                }).then(this.handleData).catch(this.handleError);
            case "POST":
                return this.axiosInstance.post(route, {...params}, {headers: this.headers}).then(this.handleData).catch(this.handleError);
            case "PUT":
                return this.axiosInstance.put(route, {...params}, {headers: this.headers}).then(this.handleData).catch(this.handleError);
            default:
                throw new MyError(400, "Unknown method")
        }
    }
}

const FetchDataService = FetchData.GetInstance();
export default FetchDataService
