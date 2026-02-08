import {isAuthenticated} from "../services/auth.service.js";

export const useAuth = () => {
    return {
        isAuth: isAuthenticated(),
    };
};