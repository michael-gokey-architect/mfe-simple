import faker from 'faker';

const cartMessage = `<div> You have  ${faker.random.number()} basic items in your cart </div>`;

document.querySelector('#dev-cart').innerHTML = cartMessage;