import React, { createContext, useEffect } from "react";
type ThemeProps = {
    mode:string;
    setMode:(mode:string)=>void;
}
export const ThemeContext = createContext<ThemeProps | undefined>(undefined);

export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [mode, setMode] = React.useState('light');

    const handelThemeChange = (mode:string)=>{
        if(mode === "light" || (!(theme in localStorage && window.matchMedia("prefers-color-schemee:dark").matches))){
            setMode("dark")
            document.documentElement.classList.add("dark")
        } else {
            setMode("light")
            document.documentElement.classList.remove("dark")
        }
    };

    useEffect(()=>{
        handelThemeChange(mode);
    },[mode])
    return (
        <ThemeContext.Provider value={{mode,setMode}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = ()=>{
    const context = React.useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}