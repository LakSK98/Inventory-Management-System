import { createContext, useState } from "react";

const UserContext = createContext({
    data:{},
    addData:(user)=>{}
});

export const UserContextProvider = (props)=>{

    const [ userData, setUserData ] = useState({});

    const addUserData = (user)=>{
        setUserData(user);
    }

    const context = {
        data:userData,
        addData:addUserData
    };

    return <UserContext.Provider value={context}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;