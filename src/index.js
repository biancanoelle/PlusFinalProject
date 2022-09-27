let h2 = document.querySelector("h2");

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  let dateElement = document.querySelector("#date");
  let searchForm = document.querySelector("#search-form");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", search);

function showWeather(response) {
  let h3 = document.querySelector("h3");
  let temperature = Math.round(response.data.main.temp);
  console.log(response);
  h3.innerHTML = `${temperature}°F  ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "3499ef150985eccadd080ff408a018df";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(url).then(retrievePosition);
}

navigator.geolocation.getCurrentPosition(retrievePosition);
