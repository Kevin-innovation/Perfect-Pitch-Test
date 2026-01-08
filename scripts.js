const play = document.getElementById('playBtn');
const result = document.getElementById("result");
const scoreText = document.getElementById("score");

const c = document.querySelector(".c-btn");
const d = document.querySelector(".d-btn");
const e = document.querySelector(".e-btn");
const f = document.querySelector(".f-btn");
const g = document.querySelector(".g-btn");
const a = document.querySelector(".a-btn");
const b = document.querySelector(".b-btn");

const c_audio = new Audio('./sounds/sounds/도.wav');
const d_audio = new Audio('./sounds/sounds/레.wav');
const e_audio = new Audio('./sounds/sounds/미.wav');
const f_audio = new Audio('./sounds/sounds/파.wav');
const g_audio = new Audio('./sounds/sounds/솔.wav');
const a_audio = new Audio('./sounds/sounds/라.wav');
const b_audio = new Audio('./sounds/sounds/시.wav');

let currentAnswer = null;
let currentAudio = null;

let correct = 0;
let wrong = 0;
let main = 0;
const total = 10;

scoreText.textContent =  `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${main}`;

play.addEventListener("click", () => {
  if (main >= total) {
    result.textContent = "게임 종료!";
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const random = Math.floor(Math.random() * 7) + 1;

  switch (random) {
    case 1:
      currentAudio = c_audio;
      currentAnswer = "C";
      break;
    case 2:
      currentAudio = d_audio;
      currentAnswer = "D";
      break;
    case 3:
      currentAudio = e_audio;
      currentAnswer = "E";
      break;
    case 4:
      currentAudio = f_audio;
      currentAnswer = "F";
      break;
    case 5:
      currentAudio = g_audio;
      currentAnswer = "G";
      break;
    case 6:
      currentAudio = a_audio;
      currentAnswer = "A";
      break;
    case 7:
      currentAudio = b_audio;
      currentAnswer = "B";
      break;
  }

  currentAudio.currentTime = 0;
  currentAudio.play();
});

c.addEventListener("click", () => {
  main++;
  if (currentAnswer === "C") {
    correct++;
    result.textContent = "정답";
  } else {
    wrong++;
    result.textContent = `오답 정답은 ${currentAnswer}`;
  }

  currentAnswer = null;
  scoreText.textContent = `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${total - main}`;
});


d.addEventListener("click", () => {
  main++;
  if (currentAnswer === "D") {
    correct++;
    result.textContent = "정답";
  } else {
    wrong++;
    result.textContent = `오답 정답은 ${currentAnswer}`;
  }

  currentAnswer = null;
  scoreText.textContent = `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${total - main}`;
});

e.addEventListener("click", () => {
  main++;
  if (currentAnswer === "E") {
    correct++;
    result.textContent = "정답";
  } else {
    wrong++;
    result.textContent = `오답 정답은 ${currentAnswer}`;
  }

  currentAnswer = null;
  scoreText.textContent = `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${total - main}`;
});

f.addEventListener("click", () => {
  main++;
  if (currentAnswer === "F") {
    correct++;
    result.textContent = "정답";
  } else {
    wrong++;
    result.textContent = `오답 정답은 ${currentAnswer}`;
  }

  currentAnswer = null;
  scoreText.textContent = `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${total - main}`;
});

g.addEventListener("click", () => {
  main++;
  if (currentAnswer === "G") {
    correct++;
    result.textContent = "정답";
  } else {
    wrong++;
    result.textContent = `오답 정답은 ${currentAnswer}`;
  }

  currentAnswer = null;
  scoreText.textContent = `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${total - main}`;
});

a.addEventListener("click", () => {
  main++;
  if (currentAnswer === "A") {
    correct++;
    result.textContent = "정답";
  } else {
    wrong++;
    result.textContent = `오답 정답은 ${currentAnswer}`;
  }

  currentAnswer = null;
  scoreText.textContent = `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${total - main}`;
});

b.addEventListener("click", () => {
  main++;
  if (currentAnswer === "B") {
    correct++;
    result.textContent = "정답";
  } else {
    wrong++;
    result.textContent = `오답 정답은 ${currentAnswer}`;
  }

  currentAnswer = null;
  scoreText.textContent = `정답 수: ${correct}   오답 수: ${wrong}   남은 문제수: ${total - main}`;
});