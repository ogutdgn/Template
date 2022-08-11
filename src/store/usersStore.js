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

    addOrChangeUser: (name, username, email, id) => {
        const { users } = get();
        let idList = [];
        let largestNum = 0;

        console.log(id);

        if(id !== null)
        {
            console.log("şuradayım");
            users.forEach((user) => {
                if(user.id === id){
                    user.name = name;
                    user.username = username;
                    user.email = email;
                }
            })
        }else{
            console.log("buradayım");
            users.forEach((user) => {
                if(largestNum < user.id){
                    largestNum = user.id
                }
            })
      
            const newData = {id: largestNum + 1, name: name, username: username, email: email}
            users.push(newData)

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


