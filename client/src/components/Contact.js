import { useEffect, useState } from "react";
import "./Styles/Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [inputdata, setinputdata] = useState({
    firstname: " ",
    email: " ",
    message: " ",
  });

  const getuserdata = async () => {
    try {
      const res = await fetch("/Dashboard", {
        method: "GET",
        headers: {
          "Content-type": "appllication/json",
        },
      });

      const data = await res.json();
      setinputdata(data);

      if (!res) {
        console.log("nothing in getuserdata rsponce");
      }
    } catch (error) {
      console.log(error);
      console.log(" contect try not runs");
      navigate("/Signin");
    }
  };

  const { firstname, email } = inputdata;

  useEffect(() => {
    getuserdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onchangehandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputdata({ ...inputdata, [name]: value });
  };

  const datapost = async (event) => {
    event.preventDefault();

    const { firstname, email, message } = inputdata;

    try {
      const res = await fetch("/contect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          email,
          message,
        }),
      });

      setinputdata({ ...inputdata, message: " " });
      if (res) {
        console.log("message send");
        console.log(res);
        console.log(inputdata);
      }
    } catch (error) {
      console.log(error);
      console.log("  postdata not runs");
    }
  };

  return (
    <>
      <div className="conmaindiv">
        <div className="d-md-flex justify-content-evenly pt-5">
          {/* <div>{inputdata}</div> */}
          <div className="">
            <h6> Phone no.</h6>
            <i class="bi bi-telephone-outbound-fill text-info"></i>
            <span className="ms-2">+91 8787280000</span>
          </div>
          <div className="">
            <h6>Email</h6>
            <span className="ms-2">mernappbynv@gmail.com</span>
          </div>
        </div>

        {/* textarea */}

        <div className="formfitst">
          <div
            mathod="POST"
            style={{
              //   width: "80%",
              //   margin: "auto",
              padding: "25px",
              backgroundColor: "white",
            }}
          >
            <div className="d-md-flex justify-content-evenly my-3">
              <div>
                <div className="inputstyle me-2">
                  <input
                    className="input"
                    name="firstname"
                    value={firstname}
                    onChange={onchangehandle}
                    placeholder="Name"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>

              <div>
                <div className="inputstyle">
                  <input
                    className="input"
                    name="email"
                    value={email}
                    onChange={onchangehandle}
                    placeholder="Email"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <span>message</span>
              <i class="bi-alarm" style={{ fontSize: "20px" }}></i>
              <textarea
                className="form-control my-3"
                id="exampleFormControlTextarea1"
                rows="5"
                name="message"
                value={inputdata.message}
                onChange={onchangehandle}
                placeholder="Type here"
              ></textarea>
              {/* button */}
              <div className="">
                <button onClick={datapost} className="conbutton">
                  <span> Send </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <i class="bi bi-telephone-outbound-fill text-info"> hello</i>
    </>
  );
};

export default Contact;
