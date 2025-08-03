import { createContext, useState } from "react";


export const Context = createContext()


export const GlobalContext = ({children}) => {
    const [token, setToken] = useState(false)

    return <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
}