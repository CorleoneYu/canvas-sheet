import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

const handleWheel = (event: WheelEvent) => {
  // 取消滚动时会拉扯页面
  event.preventDefault();
};
root?.addEventListener('wheel', handleWheel);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);

