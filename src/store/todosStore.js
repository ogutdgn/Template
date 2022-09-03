import create from "zustand";
import { getTodos } from "../service/Service";


export const todosStore = create((set, get) => ({
    todos: [],
    userTodos: [],
    error: null,
    fetchTodos: async() => {
        const [ data, error ] = await getTodos();
        set({ todos: data || [], error: error });
    },
    changeCompleteStatus: (todo) => {
        todo.completed = !todo.completed
        //console.log(todo.completed);
    },
    deleteChoosenTodo: (todo) => {
        const { todos } = get();
        console.log(todo);
        todos.forEach((eachTodo) => {
            if(eachTodo.id === todo.id){
                //console.log(todo)
                todos.splice(todos.indexOf(todo), 1);
            }
        })
        //console.log(todos);
        console.log(todos);
        set({ todos: todos });

    }
}));
