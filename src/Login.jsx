import React, { createContext } from "react";
import { useContext } from "react";
import { userContext } from "./Context";
import "./Login.css";
export default function Login() {
  const { email, setEmail } = useContext(userContext);
  const { password, setPassword } = useContext(userContext);
  const { userName, setUserName } = useContext(userContext);
  const { click, setClick } = useContext(userContext);
  return (
    <div className="Login">
      <div className="Login_header">
        <h1>Welcome To Login Page</h1>
      </div>
      <div className="input_field">
        <div className="gmail">
          <input
            type="gmail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="enter your gamil"
          />
        </div>
        <div className="userName">
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="enter the userName"
          />
        </div>
        <div className="password">
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="enterr the password"
          />
        </div>
      </div>
      <div className="button_submit">
        <button
          onClick={() => {
            setClick(!click);
          }}
        >
          Submit
        </button>
      </div>
      {click && password && userName && !email && (
        <div className="b">
          <p>your password is :..... saved</p>
          <p>your userName is saved :{userName}</p>
          <p> you can not login your email is not there</p>
        </div>
      )}
      {click && !password && userName && email && (
        <div className="b">
          <p>your email is saved :{email}</p>
          <p>your userName is saved :{userName}</p>
          <p>your password is not there you can not login</p>
        </div>
      )}
      {click && password && !userName && email && (
        <div className="b">
          <p>your email is saved :{email}</p>
          <p>your password is saved:....</p>
          <p>your userName is not there you can not login</p>
        </div>
      )}
      {click && password && userName && email && (
        <div className="b">
          <p>your email is saved :{email}</p>
          <p>your password is saved :...</p>
          <p>your userName is saved {userName}</p>
          <p> you are logged in suceesfully</p>
        </div>
      )}
    </div>
  );
}
