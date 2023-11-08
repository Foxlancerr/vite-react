import { Login,Profile } from "./components/index";

import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold text-center bg-blue-800 py-5 text-white mb-2">Context Method 1</h1>
      <Profile></Profile>
      <Login></Login>
    </UserContextProvider>
  );
}

export default App;
