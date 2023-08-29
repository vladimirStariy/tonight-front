import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productAPI } from "../services/product-service"

const rootReducer = combineReducers({
    [productAPI.reducerPath]: productAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(productAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']




















































/*
import { makeAutoObservable } from "mobx"
import AuthService from "../services/auth-service";
import axios from "axios"
import { IAuthResponse } from "../models/response/auth-response";
import { API_URL } from "../http";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(username: string, password: string) {
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get<IAuthResponse>(`${API_URL}/Account/refresh`, {withCredentials: true})
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error: any) {
            console.log(error.response?.data?.message)
        }
    }
}
*/