import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import {ThemeContextProvider} from "./Context/ThemeContext"
const App = () => {
 
  const [theme,setTheme]=useState("light");

  const HandleDarkTheme=()=>{
    setTheme("dark");
  }
  const HandleLightTheme=()=>{
    setTheme("light")
  }

  const HandleSystemTheme = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDark) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

  //actual logic
   useEffect(()=>{
      document.querySelector("html").classList.remove("dark","light");
      document.querySelector("html").classList.add(theme)

   },[theme])

  return (
    <ThemeContextProvider value={{theme,HandleDarkTheme,HandleLightTheme,HandleSystemTheme}} >
    <div>
      <Navbar/>
      <Outlet/>
    </div>
    </ThemeContextProvider>
  )
}

export default App
