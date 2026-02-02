const hanziEl = document.getElementById("hanzi");
const pinyinEl = document.getElementById("pinyin");
const englishEl = document.getElementById("english");

const speakBtn = document.getElementById("speakBtn");
const nextBtn = document.getElementById("nextBtn");
const togglePinyinBtn = document.getElementById("togglePinyin");
const toggleEnglishBtn = document.getElementById("toggleEnglish");

let currentWord = null;
let showPinyin = true;
let showEnglish = true;

function randomWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  hanziEl.textContent = currentWord.hanzi;
  pinyinEl.textContent = currentWord.pinyin;
  englishEl.textContent = currentWord.english;
}

togglePinyinBtn.onclick = () => {
  showPinyin = !showPinyin;
  pinyinEl.classList.toggle("hidden", !showPinyin);
};

toggleEnglishBtn.onclick = () => {
  showEnglish = !showEnglish;
  englishEl.classList.toggle("hidden", !showEnglish);
};

speakBtn.onclick = () => {
  const u = new SpeechSynthesisUtterance(currentWord.hanzi);
  u.lang = "zh-CN";
  speechSynthesis.speak(u);
};

nextBtn.onclick = randomWord;

randomWord();
