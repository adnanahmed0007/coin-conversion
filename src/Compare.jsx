import React, { useEffect, useState } from "react";
import { userContext } from "./Context";
import { useContext } from "react";
import "./Compare.css";
export default function Compare() {
  const { email, password, userName, click } = useContext(userContext);
  const [first1, setFirst1] = useState("");
  const [first2, setFirst2] = useState("");
  const [click2, setClick2] = useState(false);
  const [result, setResult] = useState("");
  const [time, setTime] = useState("");
  const [base, setBase] = useState("");
  const [target, setTarget] = useState("");
  const [rate, setRate] = useState("");
  const [last, setLast] = useState("");
  const [next, setNext] = useState("");
  const [update, setUpdate] = useState("");

  useEffect(() => {
    if (click2) {
      async function Compare_coin() {
        try {
          const response = await fetch(
            `https://v6.exchangerate-api.com/v6/93da32d59191976c2d19137b/pair/${first1}/${first2}`
          );
          const data = await response.json();
          setResult(data.result);
          setTime(data.time_next_update_utc);
          setBase(data.base_code);
          setTarget(data.target_code);
          setRate(data.conversion_rate);
          setLast(data.time_last_update_unix);
          setNext(data.time_next_update_unix);
          setUpdate(data.time_last_update_utc);

          console.log(result);
          console.log(time);
          console.log(base);
          console.log(target);
          console.log(rate);
          console.log(last);
          console.log(next);
          console.log(update);
        } catch (e) {
          console.log(e);
        }
      }

      Compare_coin();
    }
  }, [click2, first1, first2]);

  return (
    <div className="Compare">
      <div className="inf0_not">
        <h2>
          First go to login page and login all the detail then it will worked
        </h2>
      </div>
      {email && password && userName && click && (
        <div className="coini_compare">
          <div className="header_coin_compare">
            <div className="input1_compare">
              <input
                type="text"
                onChange={(e) => {
                  setFirst1(e.target.value);
                }}
                placeholder="enter base country ccurrency"
              />
            </div>
            <div className="input2_compare">
              <input
                onChange={(e) => {
                  setFirst2(e.target.value);
                }}
                type="text"
                placeholder="enter the target country currency to convertt "
              />
            </div>
            <div className="button1">
              <button
                onClick={() => {
                  setClick2(!click2);
                }}
              >
                Submit
              </button>
            </div>
            <div className="info_compare">
              <p>your result is : {result}</p>
              <p> your base coin is :{base}</p>
              <p> your target coin is:{target}</p>
              <p>
                {" "}
                your conversion rate from base coin:{base} && target coin:
                {target} is {rate}
              </p>
              <p>
                The coin_convertor from {base} to target {target} was last
                updated on {update}
              </p>
              <p>
                The coin_convertor from {base} to target will {target} be
                updated on {time}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
