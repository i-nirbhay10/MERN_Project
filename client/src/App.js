import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Logout from "./components/Logout";
import { createContext, useReducer } from "react";
import { initialstate, reducer } from "./reducer/Usereducer";

//creating context
export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <div className="App">
        <userContext.Provider value={{ state, dispatch }}>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Signin" element={<Signin />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route
              path="*"
              element={
                <div>
                  <h1>erorr 404 this page is not exist!</h1>
                </div>
              }
            />
          </Routes>
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
