let palermoCity = document.querySelector("#palermo");
let palermoCityDateElement = palermoCity.querySelector(".date");
let palermoCityTimeElement = palermoCity.querySelector(".time");

let palermoCityElement = moment();

palermoCityDateElement.innerHTML = palermoCityElement.format("MMMM Do YYYY");
palermoCityTimeElement.innerHTML = palermoCityElement.format(
  "HH:mm:ss [<small>] A [</small>]"
);
let osloCity = document.querySelector("#oslo");
let osloCityDateElement = osloCity.querySelector(".date");
let osloCityTimeElement = osloCity.querySelector(".time");

let osloCityElement = moment();

osloCityDateElement.innerHTML = osloCityElement.format("MMMM Do YYYY");
osloCityTimeElement.innerHTML = osloCityElement.format(
  "HH:mm:ss [<small>] A [</small>]"
);
let bogotaCity = document.querySelector("#bogota");
let bogotaCityDateElement = bogotaCity.querySelector(".date");
let bogotaCityTimeElement = bogotaCity.querySelector(".time");

let bogotaCityElement = moment();

bogotaCityDateElement.innerHTML = bogotaCityElement.format("MMMM Do YYYY");
bogotaCityTimeElement.innerHTML = bogotaCityElement.format(
  "HH:mm:ss [<small>] A [</small>]"
);
