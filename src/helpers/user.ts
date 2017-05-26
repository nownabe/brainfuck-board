import { User } from "states";

export const save = (user: User) => {
    localStorage.setItem("user.id", user.id);
    localStorage.setItem("user.name", user.name);
};

export const reset = () => {
    localStorage.removeItem("user.id");
    localStorage.removeItem("user.name");
};

export const get = () => {
    const id = localStorage.getItem("user.id");
    const name = localStorage.getItem("user.name");
    if (id && name) {
        return {
            id,
            name,
        };
    } else {
        return null;
    }
};
