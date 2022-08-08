import create from "zustand";
import { getUsers } from "../service/Service";


export const usersStore = create((set,get) => ({
    users: [],
    error: null,
    name: "",
    fetchUsers: async() => {
        const [ data, error ] = await getUsers();
        set({ users: data || [], error: error });
    },
    addUser: async(name, username, email) => {
        const { users } = get();
        const newData = {name: name, username: username, email: email}
        users.push(newData)
        set({ users: users})
    }
}));


