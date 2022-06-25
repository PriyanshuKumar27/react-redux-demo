import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

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