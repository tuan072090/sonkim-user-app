import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import MyError from "../error";
import {API_URI} from "../..";
import {store} from "../../../redux/store";
import { Logout, UpdateAccessToken } from '../../../redux/reducers/auth';

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
        this.axiosInstance = axios.create({
            baseURL: API_URI,
            timeout: 20000, //  20s
            headers: this.headers
        });

        //  auto refresh token when 401 error
        this.axiosInstance.interceptors.response.use((response) => {
            return response;
        }, async (error: AxiosError) => {
            try{
                const status = error.response ? error.response.status : null

                if (status === 401) {

                    const newAccessToken = await this.RefreshToken()
                    //  retry request
                    const originalRequest = error.config

                    if(originalRequest.data){
                        originalRequest.data = JSON.parse(originalRequest.data)
                    }

                    return this.axiosInstance.request({...originalRequest, headers:{
                            Authorization: "Bearer "+newAccessToken
                        }})
                }

                return Promise.reject(error);
            } catch (err){
                return Promise.reject(err);
            }
        });
    }

    public async RefreshToken() {
        try {
            const refreshToken = store.getState().auth.refreshToken
            const {data} = await axios.post(API_URI+'/firebase-auth/refresh', {
                refresh_token: refreshToken
            })
            const {access_token} = data
            this.SetAccessToken(access_token)
            store.dispatch(UpdateAccessToken(access_token))
            return access_token;
        } catch (err) {
            //  logout
            this.SetAccessToken("")
            store.dispatch(Logout())
            this.handleError(err)
        }
    }

    private handleData = function (res: AxiosResponse<any>) {
        return res.data;
    }

    private handleError =  (error: AxiosError | any) => {
        const errorResponse = error.response.data

        //  remove access token if get 401 error
        if(errorResponse.statusCode === 401 || errorResponse.status === 401){
            this.SetAccessToken("")
            store.dispatch(Logout())
        }
        //  Need optimize
        const message = errorResponse.message || "Something error"
        const status = errorResponse.status || errorResponse.statusCode || 500
        const code = errorResponse.code || 500
        const errors = errorResponse.errors || []

        throw new MyError(message, status, code, errors)
    }

    public SetAccessToken(accessToken = "") {
        this.headers = accessToken.length > 0 ? {Authorization: "Bearer " + accessToken} : {}
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
                throw new MyError("Unknown method", 400)
        }
    }
}

const FetchDataService = FetchData.GetInstance();
export default FetchDataService
