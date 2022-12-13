import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, data } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    /* fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
      .then((response) => response.json())
      .then((actualData) => dispatch(data(actualData)))
      .catch((err) => {
        console.log(err.message);
      }); */
  }, []);

  /* let displayData = ()=> {
    count.map((agent)=> {
      console.log (agent.displayName)
    })
  }
 */
  return (
    <>
      <div>
        <p style={{ display: "inline" }}>Cliques: </p>
        <p style={{ display: "inline" }}>{count}</p>
        <p style={{ display: "inline" }}> vezes </p>
        <button
          onClick={() => dispatch(increment())}
          type="button"
          style={{ display: "inline" }}
        >
          {" "}
          +{" "}
        </button>
        <button
          onClick={() => dispatch(decrement())}
          type="button"
          style={{ display: "inline" }}
        >
          {" "}
          -{" "}
        </button>
        <button
          onClick={() => dispatch(reset())}
          type="button"
          style={{ display: "inline" }}
        >
          {" "}
          reset{" "}
        </button>
      </div>
      {/* <div>
        <button type="button" onClick={displayData()}> lista </button>
      </div> */}
    </>
  );
}

export default Counter;
