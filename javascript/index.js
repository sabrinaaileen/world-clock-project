function changeTime() {
  let cairoCity = document.querySelector("#cairo");
  let cairoCityDateElement = cairoCity.querySelector(".date");
  let cairoCityTimeElement = cairoCity.querySelector(".time");

  let cairoCityElement = moment().tz("Africa/Cairo");

  cairoCityDateElement.innerHTML = cairoCityElement.format("MMMM Do YYYY");
  cairoCityTimeElement.innerHTML = cairoCityElement.format(
    "HH:mm:ss [<small>] A [</small>]"
  );
  let osloCity = document.querySelector("#oslo");
  let osloCityDateElement = osloCity.querySelector(".date");
  let osloCityTimeElement = osloCity.querySelector(".time");

  let osloCityElement = moment().tz("Europe/Oslo");

  osloCityDateElement.innerHTML = osloCityElement.format("MMMM Do YYYY");
  osloCityTimeElement.innerHTML = osloCityElement.format(
    "HH:mm:ss [<small>] A [</small>]"
  );
  let bogotaCity = document.querySelector("#bogota");
  let bogotaCityDateElement = bogotaCity.querySelector(".date");
  let bogotaCityTimeElement = bogotaCity.querySelector(".time");

  let bogotaCityElement = moment().tz("America/Bogota");

  bogotaCityDateElement.innerHTML = bogotaCityElement.format("MMMM Do YYYY");
  bogotaCityTimeElement.innerHTML = bogotaCityElement.format(
    "HH:mm:ss [<small>] A [</small>]"
  );
}

function showSelectedCity(event) {
  let cityTimezoneElement = event.target.value;
  let cityName = cityTimezoneElement.replace("_", " ").split("/")[1];
  let cityTimeElement = moment().tz(cityTimezoneElement);
  let cityElement = document.querySelector("#selected-city");
  cityElement.innerHTML = `
<div class="cities">
          <div>
            <h2>${cityName}</h2>
            <p class="date">${cityTimeElement.format("MMMM Do YYYY")}</p>
          </div>
          <div>
            <h3 class="time">${cityTimeElement.format(
              "HH:mm:ss [<small>] A [</small>]"
            )}</h3>
          </div>
        </div>
`;
}

changeTime();
setInterval(changeTime, 1000);

let selectedCity = document.querySelector("#select-city");
selectedCity.addEventListener("change", showSelectedCity);
