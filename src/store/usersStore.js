import create from "zustand";
import { getUsers } from "../service/Service";


export const usersStore = create((set) => ({
    users: [],
    error: null,
    fetchUsers: async () => {
        const [ data, error ] = await getUsers();
        set({ users: data || [], error: error });
    },
}));


