import "./Styles/Dashboard.css";
import pic from "./images/reg.jpg";
const Dashboard = () => {
  return (
    <>
      <div className="usermaindiv">
        <div className="userimgdiv d-flex ">
          <img className="userimg rounded-circle" src={pic} alt="...img" />

          <div className="username mt-auto ms-4 ">
            <h4>Nirbhay verma</h4>
            <p>Full-stack MERN Developer</p>
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
              <p className="userdata">#94545759043764</p>
              <p className="userdata">nirbhay verma</p>
              <p className="userdata">nirnhay@gmail.com </p>
              <p className="userdata">8998677654</p>
              <p className="userdata">Student </p>
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
    </>
  );
};

export default Dashboard;
