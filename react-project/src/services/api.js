import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4000",
});

export const loginService = async (email, password) => {
    return api.post("/auth", {email, password});
};

export const getUsers = async () => {
    return api.get("/user/users");
};