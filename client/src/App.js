import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <div>
                <h1>erorr 404 this page is not exist!</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
