import React from 'react';
import {buy_cake} from "../redux/cakes/cakeActions"
import { connect } from 'react-redux';

export default function Cakecontainer(props) {
    return (
        <div>
          <h1>Number of cakes:{props.numOfCakes}</h1>  
          <button onClick={props.buy_cake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
  return{
    numOfCakes:state.numOfCakes
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    buy_cake:()=>dispatch(buy_cake()),
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Cakecontainer);