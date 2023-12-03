import "./App.css";
import TopBar from "./components/TopBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signin from "./components/users/signin";
import Signup from "./components/users/signup";
import Profile from "./components/users/profile";
import Edit from "./components/users/edit";
import Home from "./pages/Home";
function App() {
  return(
    <Router>
      <div className="d-flex flex-column">
        <TopBar />
      <Routes>
        <Route path="/"         element={<Home/>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/edit" element={<Edit/>} />
      </Routes>
    </div>
    </Router>
  )


}

export default App;
