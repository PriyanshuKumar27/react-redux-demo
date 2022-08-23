//ownProps in mapStateToProps, reusing component ItemContainer based on props received from parent component
import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  console.log(props)
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

//Here, second paramter is its own prop i.e. components prop, which by convention is referred to as ownProps
const mapStateToProps = (state, ownProps) =>{
  const itemState = ownProps.cake 
  ? state.cake.numOfCakes 
  : state.iceCream.noOfIceCreams
  console.log(itemState);
  return{
    item : itemState // item refers to redux state variable either for noOfCakes or noOfIceCreams
  }
}
const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
    return{
        buyItem : dispatchFunction // buyItem 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);