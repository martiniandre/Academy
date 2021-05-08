import React,{ createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'



export const AuthContext = createContext({ 
        user:{
            _id:"",
            username:""
        },
        signed: false,
        loading: true 
        
    })


  export const AuthProvider = ({children}:any) => {
    const [loading,setLoading ] = useState(true)
    const [ user, setUser ] =  useState(() => {
        const localToken = Cookies.get("token")
        const user = Cookies.get("user")
        if(localToken && user){
            return JSON.parse(user);
        }
            return null
    })
    
    const setCookiesData = () => {
        const localToken = Cookies.get("token")
        const user = Cookies.get("user")
        if(localToken && user){
            setUser(JSON.parse(user));
            setLoading(false)
            return;
        }
        setUser(null)
    }
    useEffect(() => {
       setCookiesData()
    },[loading])


    return(
    <AuthContext.Provider value={{signed: !!user,user,loading}}>
        {children}
    </AuthContext.Provider>
)}

