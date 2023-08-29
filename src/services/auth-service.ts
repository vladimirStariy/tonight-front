import {AxiosResponse} from 'axios'
import $api from "../http";
import {IAuthResponse} from "../models/response/auth-response";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/Account/login', {username, password});
    }

    static async registration(username: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/register', {username, password});
    }

    static async logout(): Promise<void> {
        return $api.post('/Account/logout');
    }
}
