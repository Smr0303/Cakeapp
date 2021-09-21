import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_ice } from "../redux/iceCreams/iceActions";

export default function HooksCakeContainer() {
  const numOfIce = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes:{numOfIce}</h1>
      <button onClick={()=>dispatch(buy_ice())}>Buy Ice</button>
    </div>
  );
}

