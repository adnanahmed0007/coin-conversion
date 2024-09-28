import React, { useEffect, useState } from "react";
import { userContext } from "./Context";
import { useContext } from "react";
import "./Home.css";
export default function Home() {
  const [click12, setClik112] = useState(false);
  const [symbol1, setSymbol] = useState({});
  const { click, password, email, userName } = useContext(userContext);
  useEffect(() => {
    if (click12) {
      async function home_add() {
        const url =
          "https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols";
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "3757ece4d9msh3ebacece6864e2ap1b3b7djsna20808ecd1a5",
            "x-rapidapi-host":
              "currency-conversion-and-exchange-rates.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          const symbols = result.symbols;
          setSymbol(symbols);
          console.log(symbols);
        } catch (error) {
          console.error(error);
        }
      }
      home_add();
    }
  }, [click12]);
  return (
    <div className="Home">
      <div className="home_content">
        <h1>Welcome to Coin_Conversion </h1>
        <h2>If you are not logging please logging </h2>
      </div>
      <div className="Heading454">
        <h1>The full form of All country currency are as follows</h1>
      </div>
      {click && password && userName && email && (
        <div className="home_info">
          <button
            onClick={() => {
              setClik112(!click12);
            }}
          >
            ADD{" "}
          </button>
          {symbol1 && Object.keys(symbol1).length > 0 ? (
            Object.keys(symbol1).map((coi, index) => (
              <li key={index}>
                {coi}:{symbol1[coi]}
              </li>
            ))
          ) : (
            <li>Loading...</li> // Or some other loading message
          )}
        </div>
      )}
    </div>
  );
}
