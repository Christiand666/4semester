import React, { createContext, PropsWithChildren, useEffect, useState } from 'react'
import Axios, { AxiosResponse } from 'axios'
import { UserInterface } from '../../Interfaces/interfaces'


export const userContext = createContext<Partial<UserInterface>>({})
// export default function context(props: PropsWithChildren<any>){
//     const[user,setUser] = useState<UserInterface>()
//     useEffect(() => {
//         Axios.post("http://server.topper144p.com:3000/login", {withCredentials: true}).then((res: AxiosResponse)=> {
//             setUser(res.data)
//         })
//     }, []);
//     return(
//         <userContext.Provider value={user!}>{props.children}</userContext.Provider>
//     )
// }
