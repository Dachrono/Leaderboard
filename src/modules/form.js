export default function form() {
  let container = document.getElementById('scoreCont');
  const form = document.createElement('form');
  form.id = 'formCont';
  container.appendChild(form);

  container = document.getElementById('formCont');
  const title = document.createElement('h3');
  title.textContent = 'Add your score';
  container.appendChild(title);

  let input = document.createElement('input');
  input.placeholder = 'your name';
  container.appendChild(input);

  input = document.createElement('input');
  input.placeholder = 'your score';
  container.appendChild(input);

  const button = document.createElement('button');
  button.textContent = 'submit';
  container.appendChild(button);
}