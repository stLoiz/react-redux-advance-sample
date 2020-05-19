import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css';
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <div className="Panel">
          <div>
            <CounterControl
              label="Increment"
              clicked={this.props.onIncrementCounter}
            />
            <CounterControl
              label="Decrement"
              clicked={this.props.onDecrementCounter}
            />
            <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
            <CounterControl
              label="Subtract 5"
              clicked={this.props.onSubtractCounter}
            />
          </div>
          <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
            Store result
          </button>
          <div>
            <ul className="Results">
              {this.props.storedResults.map((result) => {
                return (
                  <li
                    onClick={() => this.props.onRemoveResult(result.id)}
                    key={result.id}
                  >
                    {result.value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="Description">
            <p>
              The functionality of the demo project basically is to increase,
              subtract, add a number and store the result or remove it. By using
              the above buttons.
            </p>
            <p>Technically this demo:</p>
            <ul>
              <li>Adds a middleware simple logger.</li>
              <li>Adds Redux DevTools configuration.</li>

              <li>Creates action creators and reducers.</li>
              <li>
                Handles asynchronous code by using the middleware package called
                <a href="https://github.com/reduxjs/redux-thunk"> Thunk.</a>
              </li>
              <li>
                Structures the reducers and actions folder as it can be
                implemented in bigger projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
    onStoreResult: (counter) => dispatch(actionCreators.storeResult(counter)),
    onRemoveResult: (id) => dispatch(actionCreators.removeResult(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
