import * as _ from 'lodash';
import myName from './myName';
import './style.css' 
import Logo from './logo.svg'
import printMe from './print.js'

const firstDiv = () => {
  const element = document.createElement('div');

  // Lodash, now imported
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');    

  return element;
}

const secondDiv = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join([`Sup lodash + ${myName('Chase')}`])
  element.classList.add('hey');

  const tehLogo = new Image()
  tehLogo.src = Logo

  element.appendChild(tehLogo)

  const btn = document.createElement('btn')
  btn.innerHTML = 'Click me harder'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}



document.body.appendChild(firstDiv());
document.body.appendChild(secondDiv());