const title = () => {
  const container = document.getElementById('container');
  const element = document.createElement('h1');
  element.id = 'title';
  element.textContent = 'Leaderboard';
  container.appendChild(element);
};

export default title;
