import SignUp from "./components/signUp";
import LogIn from "./components/login";
import Notes from "./components/notes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/signup" element={<SignUp/>}/>   
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/notes" element={<Notes/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
