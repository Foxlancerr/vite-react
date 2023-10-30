import { useFetchCurrency } from "./hooks/index";
import { InputBox } from "./components";
import bgImage from "./assets/bgImage.jpg";

function App() {
  console.log(useFetchCurrency("usd"));
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-screen w-full bg-cover bg-center bg-opacity-0 bg-no-repeat flex justify-center items-center text-white"
    >
      <div className="w-3/5 bg-white bg-opacity-40 p-10 rounded-[10px] gap-5 flex flex-col relative">
        <InputBox />
        <button className="bg-red-800 w-max px-[25px] py-[8px] rounded-[10px] font-bold absolute bottom-[50%] left-[50%] bg-opacity-70 hover:bg-opacity-100">
          Swap
        </button>
        <InputBox />
        <button className="bg-red-800 font-bold px-[15px] py-[8px] rounded-[10px] bg-opacity-70 hover:bg-opacity-100">
          Convert
        </button>
      </div>
    </div>
  );
}

export default App;
