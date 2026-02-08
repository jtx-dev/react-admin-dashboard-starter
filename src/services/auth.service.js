const AUTH_KEY = 'isAuth';

export const login = () => {
    localStorage.setItem(AUTH_KEY, 'true');
};

export const logout = () => {
    localStorage.removeItem(AUTH_KEY);
};

export const isAuthenticated = () => {
    return localStorage.getItem(AUTH_KEY) === 'true';
};