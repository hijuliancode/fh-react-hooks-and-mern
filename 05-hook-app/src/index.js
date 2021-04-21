import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
// import HookApp from './HookApp';

ReactDOM.render(
    <>
      <div className="container">
        <CounterApp />
      </div>
    </>,
  document.getElementById('root')
);