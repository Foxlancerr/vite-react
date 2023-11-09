import React from "react";
import useTheme from "../context/theme";

const Button = () => {
  const { darkTheme, lightTheme, defaultTheme } = useTheme();
  console.log(lightTheme);
  const onChangeBtn = (e) => {
    let status = e.currentTarget.checked;
    if (status) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <div>
      <label
        htmlFor="mode"
        className="font-bold dark:text-black text-white mr-2 text-2xl capitalize"
      >
        switchMode : {defaultTheme}
      </label>
      <div className={`bg-black relative flex items-center rounded-full p-2 w-[60px] h-[30px] ${defaultTheme === "dark" ? 'justify-end' : 'justify-start'}`}>
      <input
        className="rounded-full absolute w-[20px] h-[20px] bg-white"
        type="checkbox"
        id="mode"
        onChange={onChangeBtn}
        checked={defaultTheme === "dark"}
      />
        
      </div>
    </div>
  );
};

export default Button;
