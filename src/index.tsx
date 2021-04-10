import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

console.log('执行');
root?.addEventListener('wheel', (event: WheelEvent) => {
  // 取消滚动时会拉扯页面
  event.preventDefault();
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);

