import React, { useEffect } from "react";
import { userContext } from "./Context";
import { useContext, useState } from "react";
import "./Coin.css";
export default function Coin_data() {
  const { email, password, userName } = useContext(userContext);
  const [coin, setCoin] = useState("");
  const [rate1, setRate1] = useState({});
  const [result1, setResult1] = useState("");
  const [last1, setLast1] = useState("");
  const [next, setNext] = useState("");
  const [curre1, setCurren1] = useState("");

  const [click3, setClick3] = useState(false);
  useEffect(() => {
    if (click3) {
      async function coin_data() {
        try {
          const response = await fetch(
            `https://v6.exchangerate-api.com/v6/93da32d59191976c2d19137b/latest/${coin}`
          );
          const data = await response.json();
          setRate1(data.conversion_rates);
          setResult1(data.result);
          setLast1(data.time_last_update_utc);
          setNext(data.time_next_update_utc);
          setCurren1(data.base_code);
          console.log(rate1);
          console.log(result1);
          console.log(last1);
          console.log(next);
          console.log(curre1);
          console.log(data);
        } catch (e) {
          console.log(e);
        }
      }
      coin_data();
    }
  }, [click3, coin]);
  return (
    <div className="Coin_data">
      <div className="coint_nit">
        <h2>
          {" "}
          First go to login page and login all the detail then it will worked{" "}
        </h2>
      </div>
      {email && password && userName && (
        <div className="Coin_data">
          <div className="coin_input">
            <input
              type="text"
              placeholder="enter the currency"
              onChange={(e) => {
                setCoin(e.target.value);
              }}
            />
          </div>

          <div className="btn_coin">
            <button
              onClick={() => {
                setClick3(!click3);
              }}
            >
              Submit
            </button>
          </div>
          <div className="info_coin">
            <p>The result is :{result1}</p>
            <p>The coin is :{curre1}</p>
            <p>The last time the currency was updated was :{last1}</p>
            <p>The currency will be updated on :{next}</p>

            <ul>
              {rate1 && Object.keys(rate1).length > 0 ? (
                Object.keys(rate1).map((currency, index) => (
                  <li key={index}>
                    {currency}: {rate1[currency]}
                  </li>
                ))
              ) : (
                <li>Loading...</li> // Or some other loading message
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
