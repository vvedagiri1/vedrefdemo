export default async function decorate(block) {
  const props = [...block.children];
  console.log(props);
  const firsttag = props[0].textContent.trim();
  console.log('First tag is ');
  console.log(firsttag);
  const container = document.createElement('table');
  const API_KEY = '3237161ae1634c9a8e051934260902';
  const location = 'ny';
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${firsttag}`;
  const options = {};
  const response = await fetch(url,options);
  const data = await response.json();

  const weatherHTML = `
    <div class="weather-card">
      <h3>${data.location.name}</h3>
      <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" />
      <p class="temp">${data.current.temp_c}°C</p>
      <p class="condition">${data.current.condition.text}</p>
    </div>
  `;
  
  block.innerHTML = weatherHTML;
  
}
