import _ from 'lodash';
import printMe from './print.js';
import myName from './myName.js';

function component() {
    const element = document.createElement('div');
    const newDivy = document.createElement('div');
    const btn = document.createElement('button');
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    newDivy.innerHTML = myName('Chase')

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());