import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import './styles/global.css';
import './styles/new.css';
import App from './App';
import { Provider } from './components/Context.js'


ReactDOM.render(
  <Provider>
<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
</style>
    <App />
  </Provider>,
  document.getElementById('root')
);