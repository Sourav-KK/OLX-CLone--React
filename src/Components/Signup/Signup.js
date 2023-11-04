import React, { useState, useContext } from "react";

import { useHistory } from "react-router-dom";

import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../store/Context";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent

    // creating new user
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // updating user profile with name
        result.user.updateProfile({ displayName: userName }).then(() => {
          // data adding to firebase
          firebase
            .firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              userName: userName,
              phone: phone,
            })
            .then(() => {
              //after succefully creating account redirect to login page
              history.push("/login");
            });
        });
      });
    // console.log(firebase);
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt="" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
