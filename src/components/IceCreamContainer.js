// combineReducers with connect function implementation for accesing state and acton creator
import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of ice-creams - {props.noOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy ice-creams</button>
    </div>
  )
}
//this function takes state as parameter and returns an object, here we just have single state i.e. noOfCakes
const mapStateToProps = state =>{
  return {
    noOfIceCreams : state.iceCream.noOfIceCreams
    //state.iceCream as seperate state variable is assigned in root reducer
  }
} 

const mapDispatchToProps = dispatch =>{
  return {
    buyIceCream : () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
  )(IceCreamContainer)