// List of variable from html to be interacted with Javascript
var city = document.getElementById("city");
var searchBtn = document.getElementById("searchBtn");
var apiKey = "1b531a9977e00deaae0dca3d2fcfaf62";
var contain = document.getElementById("cityContainer");
var day1 = document.getElementById("one");
var day2 = document.getElementById("two");
var day3 = document.getElementById("three");
var day4 = document.getElementById("four");
var day5 = document.getElementById("five");
const cityName = localStorage.getItem("city");
const cityList = document.getElementById("cityList");

// function to a call today weather API
// function getApi2() {
//   var requestCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`;
//   fetch(requestCurrent)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// function to call 5 day weather  API
function getApi() {
  var requestForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${apiKey}&units=imperial`;
  fetch(requestForecast)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // persisting the data of cities that have been searched.
      localStorage.setItem(city.value, city.value);
      console.log(localStorage.getItem(city.value));
      var pastCity = document.createElement("h3");
      pastCity.setAttribute("class", "pastCity");
      pastCity.textContent = localStorage.getItem(city.value);
      cityList.appendChild(pastCity);

      // clearing the text content before uploading with new data
      day1.textContent = "";
      day2.textContent = "";
      day3.textContent = "";
      day4.textContent = "";
      day5.textContent = "";

      // creating variable elements to take in data
      var date = document.createElement("p");
      var iconCode = data.list[0].weather[0].icon;
      var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
      var listIcon = document.createElement("img");
      var listTemp = document.createElement("p");
      var listHumid = document.createElement("p");
      var listWind = document.createElement("p");
      // creating variable elements to take in data
      var iconCode2 = data.list[1].weather[0].icon;
      var iconUrl2 =
        "http://openweathermap.org/img/wn/" + iconCode2 + "@2x.png";
      var listIcon2 = document.createElement("img");
      var listTemp2 = document.createElement("p");
      var listHumid2 = document.createElement("p");
      var listWind2 = document.createElement("p");
      // creating variable elements to take in data
      var iconCode3 = data.list[2].weather[0].icon;
      var iconUrl3 =
        "http://openweathermap.org/img/wn/" + iconCode3 + "@2x.png";
      var listIcon3 = document.createElement("img");
      var listTemp3 = document.createElement("p");
      var listHumid3 = document.createElement("p");
      var listWind3 = document.createElement("p");
      // creating variable elements to take in data
      var iconCode4 = data.list[3].weather[0].icon;
      var iconUrl4 =
        "http://openweathermap.org/img/wn/" + iconCode4 + "@2x.png";
      var listIcon4 = document.createElement("img");
      var listTemp4 = document.createElement("p");
      var listHumid4 = document.createElement("p");
      var listWind4 = document.createElement("p");
      // creating variable elements to take in data
      var iconCode5 = data.list[4].weather[0].icon;
      var iconUrl5 =
        "http://openweathermap.org/img/wn/" + iconCode5 + "@2x.png";
      var listIcon5 = document.createElement("img");
      var listTemp5 = document.createElement("p");
      var listHumid5 = document.createElement("p");
      var listWind5 = document.createElement("p");

      // setting text content of variable we create then appending variables to the corresponding day
      date.textContent = moment().add(1, "days").calendar();
      listIcon.setAttribute("src", iconUrl);
      listTemp.textContent = " Temp " + data.list[0].main.temp + " deg ";
      listHumid.textContent = " Humidity " + data.list[0].main.humidity + " % ";
      listWind.textContent = " Wind " + data.list[0].wind.speed + " mph ";

      day1.appendChild(date);
      day1.appendChild(listIcon);
      day1.appendChild(listTemp);
      day1.appendChild(listHumid);
      day1.appendChild(listWind);

      // setting text content of variable we create then appending variables to the corresponding day
      listIcon2.setAttribute("src", iconUrl2);
      listIcon2.textContent = data.list[1].weather[0].icon;
      listTemp2.textContent = " Temp " + data.list[1].main.temp + " deg ";
      listHumid2.textContent =
        " Humidity " + data.list[1].main.humidity + " % ";
      listWind2.textContent = " Wind " + data.list[1].wind.speed + " mph ";

      day2.appendChild(listIcon2);
      day2.appendChild(listTemp2);
      day2.appendChild(listHumid2);
      day2.appendChild(listWind2);

      // setting text content of variable we create then appending variables to the corresponding day
      listIcon3.setAttribute("src", iconUrl3);
      listIcon3.textContent = data.list[2].weather[0].icon;
      listTemp3.textContent = " Temp " + data.list[2].main.temp + " deg ";
      listHumid3.textContent =
        " Humidity " + data.list[2].main.humidity + " % ";
      listWind3.textContent = " Wind " + data.list[2].wind.speed + " mph ";

      day3.appendChild(listIcon3);
      day3.appendChild(listTemp3);
      day3.appendChild(listHumid3);
      day3.appendChild(listWind3);

      // setting text content of variable we create then appending variables to the corresponding day
      listIcon4.setAttribute("src", iconUrl4);
      listIcon4.textContent = data.list[3].weather[0].icon;
      listTemp4.textContent = " Temp " + data.list[3].main.temp + " deg ";
      listHumid4.textContent =
        " Humidity " + data.list[3].main.humidity + " % ";
      listWind4.textContent = " Wind " + data.list[3].wind.speed + " mph ";

      day4.appendChild(listIcon4);
      day4.appendChild(listTemp4);
      day4.appendChild(listHumid4);
      day4.appendChild(listWind4);

      // setting text content of variable we create then appending variables to the corresponding day
      listIcon5.setAttribute("src", iconUrl5);
      listIcon5.textContent = data.list[4].weather[0].icon;
      listTemp5.textContent = " Temp " + data.list[4].main.temp + " deg ";
      listHumid5.textContent =
        " Humidity " + data.list[4].main.humidity + " % ";
      listWind5.textContent = " Wind " + data.list[4].wind.speed + " mph ";

      day5.appendChild(listIcon5);
      day5.appendChild(listTemp5);
      day5.appendChild(listHumid5);
      day5.appendChild(listWind5);

      // }
    });
}

contain.textContent = moment().format("l");

searchBtn.addEventListener("click", getApi,);
// pastCity.addEventListener("click", reload);
