import create from "zustand";
import { getUsers } from "../service/Service";

export const usersStore = create((set, get) => ({
    users: [],
    error: null,
    currentUser: null,
    fetchUsers: async() => {
        const [ data, error ] = await getUsers();
        if(data?.length > 0){
            set({ currentUser: data[0] });
        }
        set({ users: data || [], error: error });
    },
    setCurrentUser: (user) => {
        set({ currentUser: user });
    },
    addOrChangeUser: (newUser, updateUser, id) => {
        const { users, setCurrentUser, currentUser } = get();
        let largestNum = 0;

        if(id !== undefined)
        {
            console.log("şuradayım");
            users.forEach((user) => {
                if(user.id === id){
                    user.name = updateUser.name;
                    user.username = updateUser.username;
                    user.email = updateUser.email;
                }
            })
            console.log(updateUser);
            console.log(currentUser);
        }else{
            console.log("buradayım");
            users.forEach((user) => {
                if(largestNum < user.id){
                    largestNum = user.id
                }
            })

            const createdUser = {id: largestNum + 1, name: newUser.name, username: newUser.username, email: newUser.email}
            users.push(createdUser)
            setCurrentUser(createdUser)
        }
        set({ users: users })
    },

    deleteUser: () => {
        const { users, setCurrentUser, currentUser } = get();
        
        users.forEach((eachUser) => {
            if(eachUser.id === currentUser.id){
                //console.log(currentUser)
                //console.log(users.indexOf(currentUser))
                users.splice(users.indexOf(currentUser), 1);
            }
        })  
        console.log(users);
        //set({ users: users})
        setCurrentUser(users[0]);
    }
}));


