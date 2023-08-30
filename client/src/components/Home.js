import { useEffect, useState } from "react";
import "./Styles/home.css";

const Home = () => {
  const [userdata, setuserdata] = useState("");

  const getdata = async () => {
    try {
      const res = await fetch("/Dashboard", {
        method: "GET",
        headers: {
          "Content-type": "appllication/json",
        },
      });

      const data = await res.json();
      setuserdata(data);
      console.log(data);
      console.log("data get from back end");
    } catch (error) {
      console.log(error);
      console.log("home getdata not workes");
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="home">
        <div className="homedata text-center">
          <h2>
            Welcome
            {/* <i className="bi bi-telephone-outbound-fill text-dark"></i> */}
          </h2>
          <h4>
            {userdata.firstname} {userdata.lastname}
          </h4>
          <h4>
            {userdata
              ? "Nise to see you !"
              : "This is tha full-stack MERN site created by Nirbhay!"}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
