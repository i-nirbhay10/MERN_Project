import { useState } from "react";
import pik from "./images/reg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import "./Styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    work: "",
    mobailno: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const datainput = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuser({ ...user, [name]: value });
  };

  const clicked = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, work, mobailno, password, cpassword } =
      user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        work,
        mobailno,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("invelid data ");
      console.log("invelid data ");
    } else {
      window.alert("registration successfull");
      console.log("registration successfull");
      navigate("/Signin");
    }
  };

  return (
    <>
      <div className="ragisdiv shadow-lg d-md-flex ">
        <div className="pic d-none d-sm-block  text-center">
          <img src={pik} alt="regimg." style={{ width: "500px" }} />
          <h5 className="signin mt-3">
            Already have an acount ?
            <NavLink className="ms-2" to="/Signin">
              Signin
            </NavLink>
          </h5>
        </div>

        <form method="POST" className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input
                required=""
                name="firstname"
                value={user.firstname}
                onChange={datainput}
                placeholder="First Name"
                type="text"
                className="input"
              />
            </label>

            <label>
              <input
                required=""
                name="lastname"
                value={user.lastname}
                onChange={datainput}
                placeholder="Last Name"
                type="text"
                className="input"
              />
              {/* <span>Lastname</span> */}
            </label>
          </div>

          <label>
            <input
              required=""
              name="email"
              value={user.email}
              onChange={datainput}
              placeholder="Email"
              type="email"
              className="input"
            />
            {/* <span>Email</span> */}
          </label>
          <label>
            <input
              required=""
              name="work"
              value={user.work}
              onChange={datainput}
              placeholder="Occupation"
              type="text"
              className="input"
            />
            {/* <span>Occopation</span> */}
          </label>
          <label>
            <input
              required=""
              name="mobailno"
              value={user.mobailno}
              onChange={datainput}
              placeholder="Phone no"
              type="number"
              className="input"
            />
            {/* <span>Occopation</span> */}
          </label>
          <label>
            <input
              required=""
              name="password"
              value={user.password}
              onChange={datainput}
              placeholder="Password"
              type="password"
              className="input"
            />
            {/* <span>Password</span> */}
          </label>
          <label>
            <input
              required=""
              name="cpassword"
              value={user.cpassword}
              onChange={datainput}
              placeholder="* Confirm password"
              type="password"
              className="input"
            />
            {/* <span>Confirm password</span> */}
          </label>
          <button className="submit" onClick={clicked}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
