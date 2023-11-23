import { Route, Routes } from "react-router-dom";
import { Home,About,Contact } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
      </Routes>
    </div>
  );
}

export default App;
