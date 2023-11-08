import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    defaultTheme: "Light",
    darkTheme: () =>{},
    lightTheme: () =>{},
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}