import "./styles.css";
import Home from "./Home";

import Compare from "./Compare";
import Coin_data from "./Coin_data";
import Login from "./Login";
import Header from "./Header";
import { useContext, useState } from "react";
import { userContext } from "./Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [click, setClick] = useState(false);

  return (
    <userContext.Provider
      value={{
        userName,
        setUserName,
        password,
        setPassword,
        email,
        setEmail,
        click,
        setClick,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="/compare" element={<Compare />} />
            <Route path="/coin_data" element={<Coin_data />} />
          </Routes>
        </BrowserRouter>
      </div>
    </userContext.Provider>
  );
}
