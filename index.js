const greetingBtn = document.getElementById('greeting-btn');
const greetings = ['こんにちは', 'こんばんは', 'おはよう'];
const audioFiles = ['ohayo.m4a', 'konnichiwa.m4a', 'konbanwa.m4a'];
let currentGreetingIndex = 0;

greetingBtn.addEventListener('click', () => {
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  const greeting = greetings[currentGreetingIndex];
  const audio = new Audio(audioFiles[currentGreetingIndex]);
  audio.play();
  greetingBtn.textContent = greeting;
});

const API_KEY = '09d760fab7096c1a649a40bfccdf1e59';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&units=metric&lang=ja&appid=${API_KEY}`;

const weatherCodeToJapanese = {
  '01d': '晴れ',
  '02d': '晴れ（一部雲）',
  '03d': '曇り（やや薄い雲）',
  '04d': '曇り（厚い雲）',
  '09d': '小雨',
  '10d': '雨',
  '11d': '雷雨',
  '13d': '雪',
  '50d': '霧'
};

fetch(url)
  .then(response => response.json())
  .then(data => {
    const weatherCode = data.weather[0].icon;
    const weatherDescription = weatherCodeToJapanese[weatherCode] || data.weather[0].description;
    // HTMLに天気を表示する処理
    const element = document.createElement('div');
    element.innerHTML = `
      <img class="weather-icon" src="https://openweathermap.org/img/wn/${weatherCode}.png" alt="${weatherDescription}">
      <span class="weather-description">${weatherDescription}</span>
    `;
    document.getElementById('weather').appendChild(element);
  })
  .catch(error => console.error(error));
