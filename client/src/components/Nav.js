// import react from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../App";

const Nav = () => {
  const { state } = useContext(userContext);

  const Tognev = () => {
    if (state) {
      return (
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item active">
                    <Link className="nav-link" to="/Signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/Signin">
                      Signin
                    </Link>
                  </li>  */}
              <li className="nav-item active">
                <Link className="nav-link" to="/Contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Signup">
                  Sign up
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Signin">
                  Sign in
                </Link>
              </li>
              {/*<li className="nav-item active">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
               <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      Logout
                    </Link>
                  </li> */}
            </ul>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MERN-by-Nv
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Tognev />
        </div>
      </nav>
    </>
  );
};

export default Nav;

// <form className="d-flex" role="search">
// <input
//   className="form-control me-2"
//   type="search"
//   placeholder="Search"
//   aria-label="Search"
// />
// <button className="btn btn-outline-success" type="submit">
//   Search
// </button>
// </form>
