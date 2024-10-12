import SignUp from "./components/signUp";
import LogIn from "./components/login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/signup" element={<SignUp/>}/>   
      <Route path="/login" element={<LogIn/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
