const body = document.querySelector('body');

const shapka = document.createElement('div');
shapka.classList.add('shapka');

const Opt2008RU = document.createElement('h1');
Opt2008RU.textContent = 'Opt2008.ru';

//header

const header = document.createElement('div');
header.classList.add('header');

const logo = document.createElement('p')
logo.classList.add('logo');

const links = document.createElement('div');
links.classList.add('links');

const ul1 = document.createElement('ul');

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

const a1 = document.createElement('a');
a1.classList.add('sos');
a1.textContent = 'Tovar';
a1.href = 'home/emizh/Course/index.html';

const a2 = document.createElement('a');
a2.classList.add('sos');
a2.textContent = 'Contacts';
a2.href = 'home/emizh/Course/index.html';

const a3 = document.createElement('a');
a3.classList.add('sos');
a3.textContent = 'About';
a3.href = 'test_delete/Plain Text.html';

const a4 = document.createElement('a');
a4.classList.add('sos');
a4.textContent = 'Home';
a4.href = 'file:///home/emizh/Course/index.html#';


//Add to document
shapka.appendChild(Opt2008RU);
body.appendChild(shapka);
body.appendChild(header);
header.appendChild(logo);
header.appendChild(links);
links.appendChild(ul1);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);
ul1.appendChild(li4);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
