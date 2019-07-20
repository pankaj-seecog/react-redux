import React from 'react';
import {connect} from 'react-redux';
//connect() is a higher order component
class Counter extends React.Component{


render(){
  return (
    <div>
The count is {this.props.cCounter}<br/>
<button onClick={this.props.cINC}>++</button> | 
<button onClick={this.props.cDEC}>--</button> | 
<button onClick={this.props.ADD}>Add</button>
    </div>
  )
}

}


let mapStateToProps =state=>{
  console.log('The count is ',state.count)
return {
  cCounter : state.count
}
}


let mapDispatchToProps = (dispatch)=>{
return {
  cINC : ()=>dispatch({type : 'INC'}),
  cDEC : ()=>dispatch({type : 'DEC'}),
  ADD : ()=>dispatch({type : "ADD",val : 5})
}
}

//I want to map the store state to the props of current component

export default connect(mapStateToProps,mapDispatchToProps)(Counter);