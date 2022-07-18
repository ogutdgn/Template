import create from "zustand";
import { getTodos } from "../service/Service";


export const todosStore = create((set) => ({
    todos: [],
    fetchTodos: async () => {
        const data = await getTodos();
        set({ todos: data });
    },
}))
