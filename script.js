// --- Первая сцена ---
const scene1 = {
  id: "scene1",
  text: `Я сижу за длинным столом. Деревянные доски под локтями холодные, а воздух в зале густой от свечей и тяжёлой тишины. Каждое слово родителей — словно удар молотка в груди, каждое движение — экзамен, от которого невозможно отвести взгляд. 
Я слышу, как где-то за спиной поскрипывает половица, как тихо дышат сёстры. Всё вокруг подчинено правилам. И я чувствую, как внутри растёт что-то, что нельзя сдержать слишком долго.
Сегодняшний вечер обычный, но я знаю: одно неверное слово, один резкий жест — и позор повиснет надо мной, как тень от деревьев в полдень. Сердце стучит быстрее, руки потеют. В горле стоит ком, но я должен выбрать, что делать.`,
  choices: [
    { text: "Сдержаться, улыбнуться, ничего не сказать.", effect: "suppress" },
    { text: "Ответить резко, сказать то, что думаю.", effect: "outburst" },
    { text: "Скрыться, уйти в свою комнату.", effect: "hide" }
  ]
};

// --- Глобальные переменные ---
let currentScene = scene1;
let lastChoice = null;

// --- Функция отображения сцены ---
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

// --- Функция обработки выбора ---
function choose(effect) {
  lastChoice = effect;
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

// --- Показ слотов сохранения ---
function showSaveSlots() {
  const textDiv = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");

  textDiv.textContent = "Выберите слот для сохранения:";
  choicesDiv.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    const slotBtn = document.createElement("button");
    const slotName = localStorage.getItem(`slot${i}`) || "Пусто";
    slotBtn.textContent = slotName;
    slotBtn.classList.add("slot-button");
    slotBtn.onclick = () => {
      localStorage.setItem(`slot${i}`, currentScene.id + "|" + (lastChoice || ""));
      alert(`Прогресс сохранён в слот ${i}`);
      showScene(currentScene);
    };
    choicesDiv.appendChild(slotBtn);
  }

  addBackButton();
}

// --- Показ слотов загрузки ---
function showLoadSlots() {
  const textDiv = document.getElementById("text");
  const choicesDiv = document.getElementById("choices");

  textDiv.textContent = "Выберите слот для загрузки:";
  choicesDiv.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    const saved = localStorage.getItem(`slot${i}`);
    const display = saved ? saved.split("|")[0] : "Пусто";
    const slotBtn = document.createElement("button");
    slotBtn.textContent = display;
    slotBtn.classList.add("slot-button");
    slotBtn.onclick = () => {
      if (saved) {
        const parts = saved.split("|");
        lastChoice = parts[1] || null;
        alert(`Прогресс из слота ${i} загружен. Выбранный вариант: ${lastChoice || "нет"}`);
        showScene(currentScene);
      } else {
        alert("Слот пуст.");
      }
    };
    choicesDiv.appendChild(slotBtn);
  }

  addBackButton();
}

// --- Добавление кнопки "Назад" ---
function addBackButton() {
  const choicesDiv = document.getElementById("choices");
  const backBtn = document.createElement("button");
  backBtn.id = "back-btn";
  backBtn.textContent = "Назад";
  backBtn.onclick = () => showScene(currentScene);
  choicesDiv.appendChild(backBtn);
}

// --- Старт игры ---
showScene(currentScene);

