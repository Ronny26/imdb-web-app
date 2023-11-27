import "./App.css";
import TopBar from "./components/TopBar";
import {Routes, Route} from "react-router";
import {HashRouter} from "react-router-dom";
import Signin from "./components/users/signin";
import Signup from "./components/users/signup";

function App() {
  return(
    <HashRouter>
      <div className="d-flex flex-column">
      <Routes>
        <Route path="/"         element={<TopBar/>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </HashRouter>
  )


}

export default App;
