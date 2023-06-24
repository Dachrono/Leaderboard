import './style/index.css';
import { scoreTitle, list } from './modules/scores.js';
import form from './modules/form.js';
import { push, getData } from './modules/apiFunctions.js';

const box = document.getElementById('container');
const scoreCont = document.createElement('div');
scoreCont.id = 'scoreCont';
box.appendChild(scoreCont);

scoreTitle();
list();
getData();
form();

const formAct = document.getElementById('formCont');
formAct.addEventListener('submit', (e) => {
  e.preventDefault();
  const input1 = document.getElementById('name');
  const name = input1.value;
  const input2 = document.getElementById('score');
  const score = input2.value;
  push(name, score);
  input1.value = '';
  input2.value = '';
  const clean = document.getElementById('scoreList');
  clean.innerHTML = '';
  setTimeout(() => {
    (getData());
  }, 300);
});

const buton = document.getElementById('refresh');
buton.addEventListener('click', () => {
  const clean = document.getElementById('scoreList');
  clean.innerHTML = '';
  setTimeout(() => {
    (getData());
  }, 300);
});
