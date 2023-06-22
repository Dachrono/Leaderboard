export function scoreTitle() {
  let container = document.getElementById('scoreCont');

  let div = document.createElement('div');
  div.id = 'table';
  container.appendChild(div);

  container = document.getElementById('table');
  div = document.createElement('div');
  div.id = 'titleScore';
  container.appendChild(div);

  container = document.getElementById('titleScore');
  const title = document.createElement('h3');
  title.textContent = 'Recent Scores';
  container.appendChild(title);

  const button = document.createElement('button');
  button.textContent = 'buton';
  container.appendChild(button);
}

export function list() {
  let container = document.getElementById('table');
  const lista = document.createElement('ul');
  lista.id = 'scoreList';
  container.appendChild(lista);

  container = document.getElementById('scoreList');
  for (let i = 1; i < 6; i += 1) {
    const itemList = document.createElement('li');
    if (i % 2 === 0) {
      itemList.className = 'shadow';
    }
    itemList.id = `liItem${i}`;
    itemList.textContent = `name: ${i}`;
    container.appendChild(itemList);
  }
}