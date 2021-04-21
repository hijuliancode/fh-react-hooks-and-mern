import React from 'react';
import ReactDOM from 'react-dom';
// import HookApp from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <>
      <div className="container">
        <CounterWithCustomHook />
      </div>
    </>,
  document.getElementById('root')
);