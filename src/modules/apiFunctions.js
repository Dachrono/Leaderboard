export const newGame = async () => {
  const gameKey = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ name: 'Codding man' }),
  });

  const recibe = await gameKey.json();
  return recibe;
};

export const push = async (name, scoreNum) => {
  const scorePlayer = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MYsXU2xCvXjx7srBTEFt/scores/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score: scoreNum }),
  });
  const sendIt = await scorePlayer.json();
  return sendIt;
};

export const getData = async () => {
  const dataReq = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MYsXU2xCvXjx7srBTEFt/scores/');
  const dataRec = await dataReq.json();
  const dataRes = dataRec.result;
  dataRes.sort((a, b) => b.score - a.score);
  const container = document.getElementById('scoreList');
  for (let i = 0; i < dataRes.length; i += 1) {
    const itemList = document.createElement('li');
    if (i % 2 === 0) {
      itemList.className = 'shadow';
    } else {
      itemList.className = 'white';
    }
    itemList.id = `liItem${i + 1}`;
    itemList.textContent = `${dataRes[i].user}: ${dataRes[i].score}`;
    container.appendChild(itemList);
  }
};