import { useState } from "react";
import "./signupPage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const url = "https://surveyor-app-server.vercel.app/users/";
  const headers = {
    "Content-Type": "application/json",
  };
  // const getPostsData = (user) => {
  //   axios
  //     .post(url, user, { headers: headers })
  //     .then((data) => toast.success(data.data.message))
  //     .catch((error) => toast.error(error.response.data.message));
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error("Password Don't Match");
    } else {
      const user = {
        userName: username,
        password: password,
        email: email,
        number: Phone,
      };
      console.log(user);
      axios
        .post(url, user, { headers: headers })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      //getPostsData(user);
    }
  };
  return (
    <>
      <div className="App">
        <div className="container">
          <h1>Sign up</h1>
          <form>
            <label>username</label>
            <input
              pattern="[a-zA-Z]"
              type="text"
              name="Name"
              className="field"
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            <label>password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label>confirm password</label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirm password"
              required
            />
            <label>phonenumber</label>
            <input
              type="tel"
              name="number"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="10"
              placeholder="Mobile No"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
            <label>Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email id"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <br />
            <br />
            <button
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
