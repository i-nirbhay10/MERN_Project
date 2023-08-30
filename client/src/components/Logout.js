import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Logout = () => {
  const { dispatch } = useContext(userContext);

  const navigate = useNavigate();

  const exituser = async () => {
    try {
      if (window.confirm("are you sure")) {
        const res = await fetch("/logout", {
          method: "GET",
          headers: {
            Accept: "appllication/json",
            "Content-type": "appllication/json",
          },
          credentials: "include",
        });

        if (res.status === 200) {
          dispatch({ type: "USER", payload: false });
          console.log("log out from if");
          // window.alert("logout succesfull click okk to go back");
          navigate("/");
        } else {
          console.log("log out from else");
        }
      } else {
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
      console.log("log out error");
      navigate("/Signin");
    }
  };

  useEffect(() => {
    exituser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return;
};

export default Logout;
