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
    fetchUserTodos: async(username) => {
        const [ data, error ] = await getTodos();
        const userTodos = data == null ? [] : data.map(todo => {
            return {title: username + "-" + todo.title};
        });
        set({ userTodos: userTodos, error: error })
    },
}));
