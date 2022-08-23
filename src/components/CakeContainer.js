//accessing state and dispatching action via connect function
import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cakes</button>
    </div>
  )
}
//this function takes state as parameter and returns an object, here we just have single state i.e. noOfCakes
const mapStateToProps = state =>{
  return {
    numOfCakes : state.cake.numOfCakes
  }
} 

const mapDispatchToProps = dispatch =>{
  return {
    buyCake : () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
  )(CakeContainer)