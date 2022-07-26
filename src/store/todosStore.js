import create from "zustand";
import { getTodos } from "../service/Service";


export const todosStore = create((set) => ({
    todos: [],
    error: null,
    fetchTodos: async () => {
        const [ data, error ] = await getTodos();
        set({ todos: data || [], error: error });
    },
}));
