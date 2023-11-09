import { Card,Button } from "./components/index";
import { useState,useEffect } from "react";

import {ThemeProvider} from "./context/theme";

function App() {
  const [defaultTheme,setDefaultTheme] = useState("light");

  const lightTheme = ()=>{
    setDefaultTheme("light")
  }
  const darkTheme = ()=>{
    setDefaultTheme("dark")
  }

  // set theme actually
  useEffect(() => {
    document.querySelector("html").classList.remove("dark","light");
    document.querySelector("html").classList.add(defaultTheme);
  }, [defaultTheme]);
  return (
    <ThemeProvider value={{darkTheme,lightTheme,defaultTheme}}>
      <div className="flex flex-col gap-2 justify-center bg-red-500 items-center h-screen">
        <Button></Button>
        <Card></Card>
      </div>
      
    </ThemeProvider>
  );
}

export default App;
