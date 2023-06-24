const form = () => {
  let container = document.getElementById('scoreCont');
  const form = document.createElement('form');
  form.id = 'formCont';
  container.appendChild(form);

  container = document.getElementById('formCont');
  let box = document.createElement('div');
  box.id = 'boxInput';
  container.appendChild(box);
  container = document.getElementById('boxInput');
  const title = document.createElement('h3');
  title.id = 'h3';
  title.textContent = 'Add your score';
  container.appendChild(title);

  let input = document.createElement('input');
  input.id = 'name';
  input.placeholder = 'your name';
  container.appendChild(input);

  input = document.createElement('input');
  input.id = 'score';
  input.placeholder = 'your score';
  container.appendChild(input);

  container = document.getElementById('formCont');
  box = document.createElement('div');
  box.id = 'boxButton';
  container.appendChild(box);
  container = document.getElementById('boxButton');
  const button = document.createElement('button');
  button.textContent = 'submit';
  container.appendChild(button);
};

export default form;
