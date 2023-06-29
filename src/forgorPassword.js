import React from "react";
import "./forgotpassword.css";
const Forgtopassword = () => {
  return (
    <div class="container">
    <form class="sign-in-form" action="#">
      <h2>Sign In</h2>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <input type="email" placeholder="Email"/>
      <input type="phonenumber" placeholder="Phone Number"/>
      <button type="submit">Sign In</button>
    </form>
  </div>
  );
};

export default Forgtopassword;
