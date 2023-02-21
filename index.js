const greetingBtn = document.getElementById('greeting-btn');
const greetings = ['おはよう', 'こんにちは', 'こんばんは'];
const audioFiles = ['ohayo.mp3', 'konnichiwa.mp3', 'konbanwa.wav'];
let currentGreetingIndex = 0;

greetingBtn.addEventListener('click', () => {
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  const greeting = greetings[currentGreetingIndex];
  const audio = new Audio(audioFiles[currentGreetingIndex]);
  audio.play();
  greetingBtn.textContent = greeting;
});
