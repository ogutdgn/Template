import create from "zustand";
import { getTodos } from "../service/Service";


export const todosStore = create((set) => ({
    todos: [],
    userTodos: [],
    error: null,
    fetchTodos: async() => {
        const [ data, error ] = await getTodos();
        set({ todos: data || [], error: error });
    },
    changeCompleteStatus: (todo) => {
        todo.completed = !todo.completed
    }
}));
