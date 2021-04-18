// import isSenior, {isAdult} from './person'
// import validator from 'validator';

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

const appRoot = document.getElementById('app1');

ReactDOM.render(<IndecisionApp />, appRoot);