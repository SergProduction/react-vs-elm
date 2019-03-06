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

const defaultState = {
  count: 0,
  lastCounter: 0,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      return { ...state, count: state.count + 1 }
    }
    case actionTypes.DECREMENT: {
      return { ...state, count: state.count - 1 }
    }
    case actionTypes.SETCOUNTER: {
      return { count: state.count + 1, lastCounter: state.count }
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
    <div>lastCounter: {props.lastCounter}</div>
  </div>
)



// CONNECT

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch(decrement),
  increment: () => dispatch(increment),
  setCounter: (counter) => dispatch(setCounter(counter))
})



const App = connect(mapStateToProps, mapDispatchToProps)(ViewApp)