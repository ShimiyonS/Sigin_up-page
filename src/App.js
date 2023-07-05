import { useState } from "react";
import "./signupPage.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [confirmpassword, setConfirmPassword]= useState('');
  const [error,setError]=useState("");
  const url = "https://surveyor-app-server.vercel.app/users/";
  const headers = {
    "Content-Type": "application/json",
  };
  const getPostsData = (user) => {
    axios
      .post(url, user, { headers: headers })
      .then((data) => setSuccess(data.data.message))
      .catch((error) => setError(error));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(password !== confirmpassword){
      toast.error("Password Don't Match")
    }else{
      const user = {
        userName: username,
        password: password,
        email: email,
        number: Phone,
      };
      console.log(user);
      getPostsData(user);
      setTimeout(() => {
        toast.success(success)
        toast.error(error)
        }, 600);
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
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>confirm password</label>
            <input
              type="password"
              name="password"
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
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              placeholder="Email id"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <button
              type="submit"
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Sign up
            </button>
          </form>
         
        </div>
      </div>
          <ToastContainer/>
    </>
  );
}

export default App;
