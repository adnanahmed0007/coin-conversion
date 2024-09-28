import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Link1() {
  return (
    <div className="Link">
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>

      <Link to={"/compare"}>Compare</Link>
      <Link to={"/coin_data"}>Coin_data</Link>
    </div>
  );
}
