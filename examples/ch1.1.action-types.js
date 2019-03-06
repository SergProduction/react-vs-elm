import React from 'react'
import { connect } from 'react-redux'


// ACTION TYPES

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}


// ACTIONS

const increment = {
  type: actionTypes.INCREMENT
}

const decrement = {
  type: actionTypes.DECREMENT
}



// REDUCER

const reducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      return state + 1
    }
    case actionTypes.DECREMENT: {
      return state + 1
    }
    default: {
      return state
    }
  }
}



// VIEW

const ViewApp = (props) => (
  <div>
    <button onClick={props.decrement}> - </button>
    <div>{props.counter}</div>
    <button onClick={props.increment}> + </button>
  </div>
)



// CONNECT

const mapStateToProps = (state) => ({
  counter: state
})
const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement),
  increment: () => dispatch(increment),
})



const App = connect(mapStateToProps, mapDispatchToProps)(ViewApp)