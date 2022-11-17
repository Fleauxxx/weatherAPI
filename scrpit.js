var city = document.getElementById("city");
var searchBtn = document.getElementById("searchBtn");
var apiKey = "1b531a9977e00deaae0dca3d2fcfaf62";
var today = document.getElementById("cityContainer");
var one = document.getElementById("one");
var day2 = document.getElementById("two");
var day3 = document.getElementById("three");
var day4 = document.getElementById("four");
var day5 = document.getElementById("five");

function getApi() {
  var requestForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${apiKey}&units=imperial`;
  fetch(requestForecast)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[1].dt);
      console.log(data.list[1].weather[0].icon);

      for (var i = 0; i < data.list.length; i++) {
        var listDate = document.createElement("p");
        var listIcon = document.createElement("p");
        var listTemp = document.createElement("p");
        var listHumid = document.createElement("p");
        var listWind = document.createElement("p");

        listDate.textContent = " Date " + data.list[0].dt;
        console.log(listDate);
        listIcon.textContent = data.list[0].weather[0].icon;
        listTemp.textContent = " Temp " + data.list[0].main.temp + " deg ";
        listHumid.textContent = " Humidity " + data.list[0].main.humidity + " % ";
        listWind.textContent = " Wind " + data.list[0].wind.speed + " mph ";

        day2.appendChild(listIcon);
        day2.appendChild(listTemp);
        day2.appendChild(listHumid);
        day2.appendChild(listWind);
        
        listIcon.textContent = data.list[0].weather[0].icon;
        listTemp.textContent = " Temp " + data.list[1].main.temp + " deg ";
        listHumid.textContent = " Humidity " + data.list[1].main.humidity + " % ";
        listWind.textContent = " Wind " + data.list[1].wind.speed + " mph ";
      
        day3.appendChild(listIcon);
        day3.appendChild(listTemp);
        day3.appendChild(listHumid);
        day3.appendChild(listWind);
      }
    });
}


searchBtn.addEventListener("click", getApi);
