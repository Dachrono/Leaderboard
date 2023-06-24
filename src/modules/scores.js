export const scoreTitle = () => {
  let container = document.getElementById('scoreCont');

  let div = document.createElement('div');
  div.id = 'table';
  container.appendChild(div);

  container = document.getElementById('table');
  div = document.createElement('div');
  div.id = 'titleScore';
  container.appendChild(div);

  container = document.getElementById('titleScore');
  const title = document.createElement('h2');
  title.textContent = 'Recent Scores';
  container.appendChild(title);

  const button = document.createElement('button');
  button.id = 'refresh';
  button.textContent = 'Refresh';
  container.appendChild(button);
};

export const list = () => {
  const container = document.getElementById('table');
  const lista = document.createElement('ul');
  lista.id = 'scoreList';
  lista.scrollTop = 0;
  container.appendChild(lista);
};