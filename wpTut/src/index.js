import * as _ from 'lodash';
import myName from './myName';

const component = () => {
    const element = document.createElement('div');
  
    // Lodash, now imported
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
  
    return element;
  }

const componentTwo = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join([`Sup lodash + ${myName('Chase')}`])

  return element
}

document.body.appendChild(component());
document.body.appendChild(componentTwo());