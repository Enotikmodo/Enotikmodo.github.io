export const registerUser = (user) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.find(
        (u) => u.email === user.email || u.number === user.number
    );

    if (userExists) return { success: false, message: "User already exists" };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
};

export const loginUser = (emailOrNumber, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
        (u) => (u.email === emailOrNumber || u.number === emailOrNumber) && u.password === password
    );

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        return { success: true, user };
    }

    return { success: false, message: "Invalid credentials" };
};

export const logoutUser = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};
