"use client"
import { createContext, useContext, useState } from "react";
import React from 'react'
import { set } from "zod";
const AppConText = createContext({
    sessionToken: '',
    setSessionToken: (sessionToken: string) => { }
})

export const useAppContext = () => {
    const context = useContext(AppConText)
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider')
    }
    return context
}


export default function AppProvider({ children, initialSessionToken = '' }: { children: React.ReactNode, initialSessionToken?: string }) {
    const [sessionToken, setSessionToken] = useState(initialSessionToken)
    return (
        <AppConText.Provider value={{ sessionToken, setSessionToken }}
        >
            {children}
        </AppConText.Provider>
    )
}
