import "./Styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(7, 8, 12, 0.094)",
        }}
      >
        <div className="d-flex justify-content-evenly pt-5">
          <div className="formo">
            <input
              className="input"
              placeholder="Name"
              required=""
              type="text"
            />
            <span className="input-border"></span>
          </div>
          <div className="formo">
            <input
              className="input"
              placeholder="Email"
              required=""
              type="email"
            />
            <span className="input-border"></span>
          </div>

          <div className="formo">
            <input
              className="input"
              placeholder="Occupstion"
              required=""
              type="text"
            />
            <span className="input-border"></span>
          </div>
        </div>

        {/* textarea */}

        <div
          style={{
            width: "80%",
            margin: "auto",
            marginTop: "60px",
            padding: "20px",
            // backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "80%",
              margin: "auto",
              padding: "15px",
              backgroundColor: "white",
            }}
          >
            <div className="d-flex justify-content-evenly m-5">
              <div>
                <div className="formo me-2">
                  <input
                    className="input"
                    placeholder="Phone no"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>

              <div>
                <div className="formo">
                  <input
                    className="input"
                    placeholder="some thing"
                    required=""
                    type="text"
                  />
                  <span className="input-border"></span>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <span>Massage</span>

              <textarea
                className="form-control my-3"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Type here"
              ></textarea>
              {/* button */}
              <div className="">
                <button className="conbutton">
                  <span> Send </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
