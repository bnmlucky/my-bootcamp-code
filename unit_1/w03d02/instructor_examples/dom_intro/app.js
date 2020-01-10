console.log('Stranger things are coming!');

document.querySelector('h1').innerText = 'Welcome to the Upside Down';

const image = document.querySelector('img');

console.log(image);

image.style.display = 'none';
image.style.display = 'block';
image.style.filter = 'grayscale(100%)';
image.style.width = '95%';
image.style.filter = '';

const eggos = document.createElement('img');

document.querySelector('.container').appendChild(eggos);

eggos.setAttribute(
  'src',
  'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg'
);

eggos.style.width = '100%';

eggos.remove();

const listItem = document.querySelectorAll('li');

listItem[0].innerText = 'Demo Dog Hangout';

const listEl = document.createElement('li');

listEl.innerText = 'New list item';

const ulEl = document.querySelector('ul');

ulEl.appendChild(listEl);
