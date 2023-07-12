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
changeTime();
setInterval(changeTime, 1000);
