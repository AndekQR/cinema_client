
export const credentialsConstants = {

    set: (credentials) => {
        localStorage.setItem("token", credentials.token);
        localStorage.setItem("refreshToken", credentials.refreshToken);
        localStorage.setItem("expires", JSON.stringify(credentials.expires));
    },

    remove: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("expires");
    },

    get: () => ({
        token: localStorage.getItem("token"),
        refreshToken: localStorage.getItem("refreshToken"),
        expires: Number(JSON.parse(localStorage.getItem("expires") || '0') ),
    }),
};