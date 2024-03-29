import { useContext, useState } from "react";
import "./Styles/Signin.css";
import pic from "./images/reg.jpg";
import { NavLink, useNavigate } from "react-router-dom";

import { userContext } from "../App";

const Signin = () => {
  const { state, dispatch } = useContext(userContext);
  // console.log(user);

  const navigate = useNavigate();

  const [email, setuseremail] = useState("");
  const [password, setuserpass] = useState("");
  // navigate("/Dashboard");

  const clicked = async (e) => {
    console.log(email);
    try {
      e.preventDefault();

      const res = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        window.alert("invelid cradintial");
        console.log("invelid cradintial");
      } else {
        dispatch({ type: "USER", payload: true });
        window.alert("loged in");
        console.log("loged in");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="logdiv">
        <div className="marg d-md-flex">
          <form method="POST" className="forml">
            <p id="heading">Login </p>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                autocomplete="off"
                name="email"
                value={email}
                onChange={(event) => setuseremail(event.target.value)}
                placeholder="Email"
                className="input-field"
                type="email"
              />
            </div>
            <div className="field">
              <svg
                className="input-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                name="password"
                value={password}
                onChange={(e) => setuserpass(e.target.value)}
                placeholder="Password"
                className="input-field"
                type="password"
              />
            </div>
            <div className="btn">
              <button onClick={clicked} className="button1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              {/* <button className="button2">Sign Up</button> */}
            </div>
            {/* <button className="button3">Forgot Password</button> */}
          </form>
          <div className="pic d-none d-md-block text-center">
            <img className="signinimg" src={pic} alt="regimg." />
            <h5 className="signin mt-3">
              If you don't have an acount
              <NavLink className="ms-2" to="/Signup">
                Signup
              </NavLink>
            </h5>
          </div>
        </div>
      </div>
      {/* <h1>hello world this is Signin page</h1> */}
    </>
  );
};

export default Signin;
