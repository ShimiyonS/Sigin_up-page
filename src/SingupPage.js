import { useState } from "react";
import "./signupPage.css";
import axios from "axios";
const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const url = "https://surveyor-app-server.vercel.app/users/";
  const headers=  {
    "Content-Type": "application/json",
  }
  const getPostsData = (user) => {
    axios
      .post(url,
        user ,
       { headers: headers}
      )
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      userName: username,
      password: password,
      email: email,
      number: Phone,
    };

    getPostsData(user);
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <form>
            <div className="tag">
              <div>User Name:</div>
              <input
                type="text"
                name="Name"
                id=""
                className="field"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="tag">
              <div>Password:</div>
              <input
                type="text"
                name=""
                id=""
                className="field"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="tag">
              <div>Phone Number:</div>
              <input
                type="text"
                name="number"
                id=""
                className="field"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="tag">
              <div>Email:</div>
              <input
                type="text"
                name="Email"
                id=""
                className="field"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;