import { createContext, useContext} from "react";

const  ThemeContext=createContext();

export const ThemeContextProvider=ThemeContext.Provider;

export default ThemeContext;


