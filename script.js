// Первая сцена
const scene1 = {
  text: `Я сижу за длинным столом. Деревянные доски под локтями холодные, а воздух в зале густой от свечей и тяжёлой тишины. Каждое слово родителей — словно удар молотка в груди, каждое движение — экзамен, от которого невозможно отвести взгляд. 
Я слышу, как где-то за спиной поскрипывает половица, как тихо дышат сёстры. Всё вокруг подчинено правилам. И я чувствую, как внутри растёт что-то, что нельзя сдержать слишком долго.
Сегодняшний вечер обычный, но я знаю: одно неверное слово, один резкий жест — и позор повиснет надо мной, как тень от деревьев в полдень. Сердце стучит быстрее, руки потеют. В горле стоит ком, но я должен выбрать, что делать.`,
  choices: [
    { text: "Сдержаться, улыбнуться, ничего не сказать.", effect: "suppress" },
    { text: "Ответить резко, сказать то, что думаю.", effect: "outburst" },
    { text: "Скрыться, уйти в свою комнату.", effect: "hide" }
  ]
};

// Функция отображения сцены
function showScene(scene) {
  const textDiv = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");

  textDiv.textContent = scene.text;

  choicesDiv.innerHTML = "";
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => choose(choice.effect);
    btn.classList.add("fade-in");
    btn.style.animationDelay = `${Math.random() * 0.3}s`;
    choicesDiv.appendChild(btn);
  });
}

// Функция выбора
function choose(effect) {
  const textDiv = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");

  if (effect === "suppress") {
    textDiv.textContent = "Я сдерживаю себя, улыбаюсь, скрывая бурю внутри. Сердце колотится, но никто не замечает внутренней тревоги.";
  }
  if (effect === "outburst") {
    textDiv.textContent = "Я выпускаю гнев наружу, голос дрожит, руки сжаты. Родители морщат лбы, уважение к моей дисциплине падает, но мне легче дышать.";
  }
  if (effect === "hide") {
    textDiv.textContent = "Я скользну прочь, слышу собственное сердце громче, чем голоса за столом. Безопасно, но пустота внутри растёт, потому что я снова не показал себя.";
  }

  choicesDiv.innerHTML = `<button onclick="alert('Следующая сцена будет готова позже')">Продолжить</button>`;
}

// Старт
showScene(scene1);
