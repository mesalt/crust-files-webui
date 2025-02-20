import axios from "axios";
import { useUserStore } from "./pinia";
import { getAccessToken } from "./token";

// 普通资源
const axiosBase = axios.create({
    timeout: 30000
});

axiosBase.interceptors.request.use(
    (config) => {
        return config;
    }
)

axiosBase.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
)


// 认证资源
const axiosAuth = axios.create({
    timeout: 30000
});

axiosAuth.interceptors.request.use(
    async (config) => {
        const userStore = useUserStore();
        if (userStore.access_token !== null) {
            config.headers.Authorization = `Bearer ${userStore.access_token}`;
        } else {
            const access_token = await getAccessToken();
            userStore.access_token = access_token;
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    }
)

axiosAuth.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export {
    axiosAuth,
    axiosBase
}