//create a function to change city element to searched city

document.addEventListener("DOMContentLoaded", function () {
  function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-Temp");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(
      response.data.temperature.current
    );
  }
  function searchHandle(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "91t68d1a23a3153b0a155oba25d504df";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayTemperature);

    cityElement.innerHTML = city;
  }

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", searchHandle);
});

// display the current date and time using JavaScript: Tuesday
document.addEventListener("DOMContentLoaded", function () {
  let now = new Date();

  let listItem = document.querySelector("#date");

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()]; // return a value between 0-6 for the day
  let hours = now.getHours(); //get hours
  let minutes = now.getMinutes(); // get minutes
  let amOrPm = hours >= 12 ? "PM" : "AM"; //am or pm

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let formattedTime = `${day}  ${hours}:${minutes} ${amOrPm}`;
  listItem.innerHTML = `${formattedTime}`;
});
