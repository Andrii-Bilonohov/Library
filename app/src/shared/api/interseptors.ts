import {instance} from "@/shared/api/instance.ts";

instance.interceptors.request.use((config) => {
    console.log("< REQUEST >", {
        url: config.url,
        params: config.params,
        data: config.data
    });

    return config;
});


instance.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        console.log("< ERROR >", error?.response?.data || error.message);

        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._isRetry &&
            false
        ) {
            originalRequest._isRetry = true;
            return instance.request(originalRequest);
        }

        throw new Error(error?.response?.data?.message || error.message);
    }
);

