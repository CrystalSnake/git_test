import './style.css';
import Icon from './gear.png';
// import _ from 'lodash';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

//Odin ES6 lesson
// import your function
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Cody');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
