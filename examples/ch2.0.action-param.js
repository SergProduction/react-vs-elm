import React from 'react'
import { connect } from 'react-redux'


// ACTION TYPES

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SETCOUNTER: 'SETCOUNTER'
}


// ACTIONS

const increment = {
  type: actionTypes.INCREMENT
}

const decrement = {
  type: actionTypes.DECREMENT
}

const setCounter = (counter) => ({
  type: actionTypes.SETCOUNTER,
  data: counter,
})



// REDUCER

const reducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      return state + 1
    }
    case actionTypes.DECREMENT: {
      return state + 1
    }
    case actionTypes.SETCOUNTER: {
      return action.data
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
    <button onClick={() => props.setCounter(0)}> reset </button>
  </div>
)



// CONNECT

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement),
  increment: () => dispatch(increment),
  setCounter: (counter) => dispatch(setCounter(counter))
})



const App = connect(mapStateToProps, mapDispatchToProps)(ViewApp)