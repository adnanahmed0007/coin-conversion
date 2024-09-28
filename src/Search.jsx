import React, { useEffect, useState } from "react";
export default function Search() {
  const [first11, setFirst11] = useState("");
  const [second11, setSecond11] = useState("");
  const [click11, setClick11] = useState(false);
  useEffect(() => {
    if (click11) {
      async function Search_coin11() {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/93da32d59191976c2d19137b/enriched/${first11}/${second11}`
        );
        const data = await response.json();
        console.log(data);
      }
      Search_coin11();
    }
  }, [click11, first11, second11]);
  return (
    <div className="Search">
      <div className="Search_coin">
        <div className="inpuit_seacrh">
          <input
            type="text"
            onChange={(e) => {
              setFirst11(e.target.value);
            }}
            placeholder="enter the base currency"
          />
        </div>
        <div className="inpuit_seacrh1">
          <input
            type="text"
            onChange={(e) => {
              setSecond11(e.target.value);
            }}
            placeholder="enter the target currency"
          />
        </div>
        <div className="btn_search">
          <button
            onClick={() => {
              setClick11(!click11);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
