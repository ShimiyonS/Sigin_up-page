import { useState } from "react";
import "./signupPage.css";
import axios from "axios";
const Signup = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const url = "https://surveyor-app-server.vercel.app/users/";
  const headers = {
    "Content-Type": "application/json",
  };
  const getPostsData = (user) => {
    axios
      .post(url, user, { headers: headers })
      .then((data) => setSuccess(data.data.message))
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
    console.log(user);
    getPostsData(user);
    setTimeout(() => {
      alert(success);
    }, 600);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <h1>Siginup your own Account</h1>
          <form>
            <label>
              userName:
              <input
                type="text"
                name="Name"
                className="field"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                className="field"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </label>
            <label>
              PhoneNumber :
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="10"
                type="tel"
                name="number"
                className="field"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                className="field"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </label>
            <button
              type="submit"
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Siginup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
