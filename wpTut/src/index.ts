import * as _ from 'lodash';
import myName from './myName';
import './style.css' 

const component = () => {
    const element = document.createElement('div');
  
    // Lodash, now imported
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
  
    return element;
  }

const componentTwo = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join([`Sup lodash + ${myName('Chase')}`])
  element.classList.add('hey');

  return element
}

document.body.appendChild(component());
document.body.appendChild(componentTwo());