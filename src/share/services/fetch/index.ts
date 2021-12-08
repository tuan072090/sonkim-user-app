import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import MyError from "../error";
import {API_URI} from "../..";
import {store} from "../../../redux/store";
import { Logout } from '../../../redux/reducers/auth';

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
        const accessToken = store.getState().auth.accessToken;

        if (accessToken && accessToken.length > 0) {
            this.headers = {Authorization: "Bearer " + accessToken}
        }

        this.axiosInstance = axios.create({
            baseURL: API_URI,
            timeout: 20000, //  20s
            headers: this.headers
        });
    }

    public async RefreshToken() {
        try {
            const accessToken = store.getState().auth.accessToken
            this.SetAccessToken(accessToken || undefined)

            return;

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
