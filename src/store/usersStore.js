import create from "zustand";
import { getUsers } from "../service/Service";


export const usersStore = create((set) => ({
    users: [],
    fetchUsers: async () => {
        const data = await getUsers();
        set({ users: data });
    },
}));


