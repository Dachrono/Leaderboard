import './style/index.css';
import { scoreTitle, list } from './modules/scores.js';
import form from './modules/form.js';

const box = document.getElementById('container');
const scoreCont = document.createElement('div');
scoreCont.id = 'scoreCont';
box.appendChild(scoreCont);

scoreTitle();
list();
form();
