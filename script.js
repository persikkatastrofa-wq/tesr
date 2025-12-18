function choose(option) {
  const text = document.getElementById("text");
  const choices = document.getElementById("choices");

  if (option === 1) {
    text.textContent = "Ты медленно оглядываешься. Стены покрыты трещинами, будто они устали держаться.";
    choices.innerHTML = `
      <button onclick="choose(3)">Подойти к стене</button>
      <button onclick="choose(4)">Отвернуться</button>
    `;
  }

  if (option === 2) {
    text.textContent = "Ты остаёшься на месте. Тишина давит сильнее, чем движение.";
    choices.innerHTML = `
      <button onclick="choose(1)">Всё-таки осмотреться</button>
    `;
  }

  if (option === 3) {
    text.textContent = "Приблизившись, ты замечаешь слабый свет из трещины.";
    choices.innerHTML = `
      <button onclick="choose(5)">Коснуться стены</button>
    `;
  }

  if (option === 4) {
    text.textContent = "Ты отворачиваешься. Иногда лучше не знать.";
    choices.innerHTML = ``;
  }

  if (option === 5) {
    text.textContent = "Стена тёплая. История продолжается…";
    choices.innerHTML = ``;
  }
}
