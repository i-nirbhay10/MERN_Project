import pik from "./images/reg.jpg";
import { NavLink } from "react-router-dom";
import "./Styles/Signup.css";
const Signup = () => {
  return (
    <>
      <div className="ragisdiv shadow-lg d-flex">
        <div className="pic text-center">
          <img src={pik} alt="regimg." style={{ width: "500px" }} />
          <h5 className="signin mt-3">
            Already have an acount ?
            <NavLink className="ms-2" to="/Signin">
              Signin
            </NavLink>
          </h5>
        </div>

        <form className="form">
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input
                required=""
                name="firstname"
                placeholder="Firstname"
                type="text"
                className="input"
              />
            </label>

            <label>
              <input
                required=""
                name="lastname"
                placeholder="Lastname"
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
              placeholder="Occopation"
              type="text"
              className="input"
            />
            {/* <span>Occopation</span> */}
          </label>
          <label>
            <input
              required=""
              name="mobailno"
              placeholder="Mobail Number"
              type="number"
              className="input"
            />
            {/* <span>Occopation</span> */}
          </label>
          <label>
            <input
              required=""
              name="password"
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
              placeholder="Confirm password"
              type="password"
              className="input"
            />
            {/* <span>Confirm password</span> */}
          </label>
          <button className="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
