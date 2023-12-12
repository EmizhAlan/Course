
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
logo.textContent = 'Alan Project';

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
a4.href = 'https://emizhalan.github.io/Course/';


//top

const topp = document.createElement('div');
topp.classList.add('top');

const main = document.createElement('div');
main.classList.add('main');

const container = document.createElement('div');
container.classList.add('container');

const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.textContent = 'Welcome to Alan project';

const header1_subtext = document.createElement('p');
header1_subtext.classList.add('header1-subtext');
header1_subtext.textContent = 'This website is created to show my course project';

const header1subtext = document.createElement('button');
header1subtext.classList.add('header1-subtext');
header1subtext.textContent = 'Sign up';

const plaseholder = document.createElement('div');
plaseholder.classList.add('plaseholder');

const plaseim = document.createElement('img');
plaseim.classList.add('plaseim');
plaseim.src = 'images/9585e8e00c835b3c4945bfabc2737c43%20(1).jpeg';

//calculator

const thwo = document.createElement('div');
thwo.classList.add('thwo');

const hh = document.createElement('h2');
hh.classList.add('thwo-header');
hh.textContent = 'Calculator';

//calculator
const raschet = document.createElement('div');
raschet.classList.add('form');

const form = document.createElement('form');

const div1 = document.createElement('div');
div1.classList.add('flex');
const labele1 = document.createElement('label');
labele1.for = 'frontGear';
labele1.textContent = 'Передняя звезда:';
const select1 = document.createElement('select');
select1.type = 'number';
select1.id = 'frontGear';
const option10T = document.createElement('option');
option10T.value = '10';
option10T.textContent = '10T';
var options1 = [
    "10T", "11T", "12T", "13T", "14T", "15T", "16T", "17T", "18T", "19T",
    "20T", "21T", "22T", "23T", "24T", "25T", "26T", "27T", "28T", "29T",
    "30T", "31T", "32T", "33T", "34T", "35T", "36T", "37T", "38T", "39T",
    "40T", "41T", "42T", "43T", "44T", "45T", "46T", "47T", "48T", "49T",
    "50T", "51T", "52T", "53T", "54T", "55T", "56T", "57T", "58T", "59T",
    "60T", "61T", "62T", "63T", "64T", "65T", "66T", "67T", "68T", "69T"
];
for (var i = 0; i < options1.length; i++) {
    var option1 = document.createElement('option');
    option1.value = options1[i];
    option1.textContent = options1[i];
    select1.appendChild(option1);
}
const br1 = document.createElement('br')

const div2 = document.createElement('div');
div2.classList.add('flex');
const labele2 = document.createElement('label');
labele2.for = 'rearGear';
labele2.textContent = 'Задняя звезда:';
const select2 = document.createElement('select');
select2.type = 'number';
select2.id = 'rearGear';
const option70 = document.createElement('option');
option70.value = '9';
option70.textContent = '9T';
const br2 = document.createElement('br')
var options2 = [
    "9",
    "10T", "11T", "12T", "13T", "14T", "15T", "16T", "17T", "18T", "19T",
    "20T", "21T", "22T", "23T", "24T", "25T", "26T", "27T", "28T", "29T",
    "30T", "31T", "32T", "33T", "34T", "35T", "36T", "37T", "38T", "39T",
    "40T", "41T", "42T", "43T", "44T", "45T", "46T", "47T", "48T", "49T",
    "50T", "51T", "52T", "53T", "54T", "55T", "56T", "57T", "58T", "59T",
    "60T", "61T", "62T", "63T", "64T", "65T", "66T", "67T", "68T", "69T"
];
for (var i = 0; i < options2.length; i++) {
    var option2 = document.createElement('option');
    option2.value = options2[i];
    option2.textContent = options2[i];
    select2.appendChild(option2);
}

const div3 = document.createElement('div');
div3.classList.add('flex');
const labele3 = document.createElement('label');
labele3.for = 'fireSize';
labele3.textContent = 'Размер покрышки (в мм):';
const select3 = document.createElement('select');
select3.type = 'number';
select3.id = 'fireSize';
const option139 = document.createElement('option');
option139.value = '935';
option139.textContent = '47-203 | 12x1.75 | 935 мм';
const br3 = document.createElement('br')
var options3 = [
    "0", "1", "935", "940", "1020", "1055", "1185", "1195", "1245", "1290",
    "1300", "1340", "1340", "1350", "1450", "1460", "1490", "1515", "1565",
    "1545", "1615", "1770", "1785", "1890", "1925", "1965", "1753", "1795",
    "1905", "1913", "1950", "2005", "2010", "2023", "2050", "2068", "2070",
    "2083", "2170", "1970", "2068", "2100", "1938", "1944", "1952", "2125",
    "2105", "2145", "2155", "2161", "2169", "2079", "2090", "2148", "2182",
    "2070", "2080", "2086", "2096", "2105", "2136", "2146", "2155", "2168",
    "2180", "2200", "2224", "2235", "2242", "2268", "2288", "2293", "2274",
    "2293", "2300", "2268", "2281", "2306", "2318", "2326", "2318", "23412345234"
];

for (var i = 0; i < options3.length; i++) {
    var option3 = document.createElement('option');
    option3.value = options3[i];
    option3.textContent = options3[i] + ' мм';
    select3.appendChild(option3);
}

const div4 = document.createElement('div');
div4.classList.add('flex');
const labele4 = document.createElement('label');
labele4.for = 'cadence';
labele4.textContent = 'Каденс:';
const select4 = document.createElement('input');
select4.type = 'number';
select4.id = 'cadence';
const br4 = document.createElement('br')

const btn = document.createElement('button');
btn.id = 'btn';
btn.textContent = 'Рассчитать';

const gearRatioResult = document.createElement('div');
gearRatioResult.id = 'gearRatioResult';

const gearStepResult = document.createElement('div');
gearStepResult.id = 'gearStepResult';

const speedResult = document.createElement('div');
speedResult.id = 'speedResult';

btn.addEventListener('click', function() {
    var frontGear = parseInt(document.getElementById("frontGear").value);
    var rearGear = parseInt(document.getElementById("rearGear").value);
    var tireSize = parseInt(document.getElementById("fireSize").value);
    var cadence = parseInt(document.getElementById("cadence").value);
  
    var gearRatio = frontGear / rearGear;
    var gearStep = (tireSize * gearRatio) / 1000;
    var speed = (cadence * tireSize * gearRatio) * 0.00006;
  
    const one1 = document.getElementById("gearRatioResult").innerHTML = "Передаточное число: " + gearRatio;
    const zero = document.getElementById("gearStepResult").innerHTML = "Шаг укладка: " + gearStep;
    const free = document.getElementById("speedResult").innerHTML = "Скорость велосипеда: " + speed + " км";
 
});

//footer

const footer = document.createElement('footer');
footer.textContent = 'Copyright © The Alan project 2023';


//Add to document
shapka.appendChild(Opt2008RU);
body.appendChild(shapka);
body.appendChild(header);
body.appendChild(topp);
body.appendChild(thwo);
thwo.appendChild(hh);
thwo.appendChild(raschet);
body.appendChild(footer);
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
topp.appendChild(main);
main.appendChild(container);
container.appendChild(header1);
container.appendChild(header1_subtext);
container.appendChild(header1subtext);
main.appendChild(plaseholder);
plaseholder.appendChild(plaseim);

//Addcalculator

raschet.appendChild(div1);
div1.appendChild(labele1);
div1.appendChild(select1);
//select1.appendChild(option10T);
raschet.appendChild(br1);

raschet.appendChild(div2);
div2.appendChild(labele2);
div2.appendChild(select2);
//select2.appendChild(option70);
raschet.appendChild(br2);

raschet.appendChild(div3);
div3.appendChild(labele3);
div3.appendChild(select3);
//select3.appendChild(option139);
raschet.appendChild(br3);

raschet.appendChild(div4);
div4.appendChild(labele4);
div4.appendChild(select4);
raschet.appendChild(br4);

raschet.appendChild(btn);
raschet.appendChild(gearRatioResult);
raschet.appendChild(gearStepResult);
raschet.appendChild(speedResult);

