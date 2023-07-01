import { useEffect, useState } from "react";
import "./Styles/Dashboard.css";
import pic from "./images/reg.jpg";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState({});

  const callingdata = async () => {
    try {
      const res = await fetch("/Dashboard", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-type": "appllication/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setuserdata(data);

      console.log(data);
      if (!(await res).status === 200) {
        const error = new Error(res.error);
        console.log("terror");
        throw error;
        // console.log("perror");
      }
    } catch (error) {
      console.log(error);
      console.log("error from dash");
      navigate("/Signin");
    }
  };

  useEffect(() => {
    callingdata();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { _id, firstname, lastname, email, mobailno, work } = userdata;

  return (
    <>
      <form method="GET">
        <div className="usermaindiv">
          <div className="userimgdiv d-flex ">
            <img className="userimg rounded-circle" src={pic} alt="...img" />

            <div className="username mt-auto ms-4 ">
              <h4>Hi {firstname} good to see you ! </h4>
              <p>{work}</p>
            </div>

            <div className="ms-auto ">
              <button className="btn btn-dark">Edit profile</button>
            </div>
          </div>

          <div className="userdetails">
            <div className="row p-3 ">
              <div className="col-4">
                <p className="userdata">User id : </p>
                <p className="userdata">Name : </p>
                <p className="userdata">Email : </p>
                <p className="userdata">Phone no : </p>
                <p className="userdata">Occupstion : </p>
                <p className="userdata">Hobby : </p>
              </div>
              <div className="col-4">
                <p className="userdata">{_id}</p>
                <p className="userdata">
                  {firstname} {lastname}
                </p>
                <p className="userdata">{email} </p>
                <p className="userdata">{mobailno}</p>
                <p className="userdata">{work}</p>
                <p className="userdata">chesh playing</p>
              </div>
              <div className="col-md-4">
                <div className="col3 rounded-circle m-3">
                  <div className="editcol3img ">
                    <p className=" text-primary text-justify ">Choose photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Dashboard;
