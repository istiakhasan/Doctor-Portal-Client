import React, { createContext, useContext,useEffect,useState } from 'react'
const Cart=createContext()
const userFromLs=()=>{
    const data=  localStorage.getItem('userInfo')
    if(data){
        return JSON.parse(data)
    }else{
        return []
    }
}

const Context = ({children}) => {

    const [selectedate,setSelecteDate]=useState(new Date())
    const [loggedInUser,setLoggedInUser]=useState(userFromLs())
    useEffect(()=>{
        localStorage.setItem('userInfo',JSON.stringify(loggedInUser))
    })
    const handleDateChange=(date)=>{
        setSelecteDate(date)
    }
    return (
      <Cart.Provider value={{handleDateChange,selectedate,loggedInUser,setLoggedInUser}}>
          {children}
      </Cart.Provider>
    )
}

export default Context
export const CartState=()=>{
    return useContext(Cart)
}
