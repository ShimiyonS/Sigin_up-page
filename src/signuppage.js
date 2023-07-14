import React from "react";
import {useState} from "react";
import "./signupPage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const Signuppage = () => {
    const id = useParams();
    console.log(id);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  //const url = "https://surveyor-app-server.vercel.app/users/";
  const headers = {
    "Content-Type": "application/json",
  };
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
      const url = "https://surveyor-app-server.vercel.app/users/";
      const response = axios.post(url, user, { headers: headers });
      console.log(response);
      response.then((data) => toast(data)).catch((error) => toast(error));
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
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label>password</label>
            <input
              type="password"
              name="password"
              placeholder={id}
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
              pattern="[0-9]*"
              maxLength="10"
              value={id.number}
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
              value={id.email}
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
};

export default Signuppage;
