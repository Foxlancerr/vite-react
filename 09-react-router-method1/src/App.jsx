import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, NotFound,Product } from "./pages";
import { Navbar,Shirt,Jeans } from "./components";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />

        {/* Nested routes */}

        <Route path="/product" element={<Product />}>
          {/* index will follow the parent routes and render its components */}
          <Route index element={<Shirt></Shirt>}></Route>
          <Route path="shirt" element={<Shirt />} />
          <Route path="jeans" element={<Jeans />} />
        </Route>
        {/* not found routes */}
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
