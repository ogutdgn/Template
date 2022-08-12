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
        const { users, setCurrentUser } = get();
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
        set({ users: users})
    }


    // addUser: async(name, username, email) => {
    //     const { users } = get();

    //     let idList = [];
        
    //     users.forEach((user) => {
    //         idList.push(user.id);
    //     })

    //     let largestNum = 0;
    //     for (let i = 0; i < idList.length; i++) {
    //         if(largestNum < idList[i]){
    //             largestNum = idList[i]
    //         }
    //     }  
          
    //     const newData = {id: largestNum + 1, name: name, username: username, email: email}
    //     users.push(newData)
    //     set({ users: users})
    // },
    // changeUser: (id, changingUser) => {
    //     const { users } = get();
    //     users.forEach(user => {
    //         if(user.id === id){
    //             user.name = changingUser.name
    //             user.username = changingUser.username
    //             user.email = changingUser.email
    //         }
    //     })
    // }
}));


