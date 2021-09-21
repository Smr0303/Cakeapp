import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy_cake } from "../redux/cakes/cakeActions";

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes:{numOfCakes}</h1>
      <button onClick={()=>dispatch(buy_cake())}>Buy Cake</button>
    </div>
  );
}
