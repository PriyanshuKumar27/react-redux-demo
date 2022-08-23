//action payload implementation
import React,{useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
      <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
      {/* we need to pass input value as parameter,
      this functions corresponds to buyCake in mapDispatchToProps buycake,
      so need to change param there as well*/}
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
    buyCake : (number) => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
  )(NewCakeContainer)