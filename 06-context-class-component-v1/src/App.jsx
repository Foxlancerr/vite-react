import React, { useEffect,useContext } from "react";
import {Title,List} from "./component/index"
import {ThemeContext} from "./context/ThemeContext"


const App = () => {
  const context = useContext(ThemeContext);
  const theme = context.light ? context.darkTheme : context.lightTheme;
  // console.log(context.light);
  // console.log(context.darkTheme);
  // console.log(context.lightTheme);
  useEffect(()=>{
    let body = document.querySelector("body");
    body.style.backgroundColor = theme.bg;
    body.style.color = theme.txt;
  },[context.light])
  return <>
  <Title/>
  <List></List>
  </>;
};

export default App;
