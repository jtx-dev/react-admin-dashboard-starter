const STORAGE_KEY = 'users';

const defaultUsers = [
    { id: 1, name: 'Admin', email: 'admin@test.com', role: 'Admin' },
];

export const getUsers = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : defaultUsers;
};

export const saveUsers = (users) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};
