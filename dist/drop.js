import {
  indiaCities,
  ukCities,
  australiaCities,
  usaCities,
  russiaCities,
} from "./countries.js";

window.addEventListener("DOMContentLoaded", function () {
  // countries("india");
  const countryDropdown = document.querySelector(".country-dropdown-table");
  countryDropdown.addEventListener("change", (e) => {
    countries(e.target.value);
  });
});

// window.onload = function () {
function countries(countryId) {
  let states = [];

  const citySelect = document.getElementById("city-table");
  const statesSelect = document.getElementById("state-table");

  switch (countryId) {
    case "india":
      states = Object.keys(indiaCities);
      break;
    case "usa":
      states = Object.keys(usaCities);
      break;
    case "uk":
      states = Object.keys(ukCities);
      break;
    case "australia":
      states = Object.keys(australiaCities);
      break;
    case "rus":
      states = Object.keys(russiaCities);
      break;

    default:
      console.log("select the country bro !!!");
      break;
  }

  // console.log(states);

  while (statesSelect.firstChild) {
    statesSelect.removeChild(statesSelect.lastChild);
  }

  states.forEach((state) => {
    let option = document.createElement("option");
    option.text = state;
    // statesSelect.add(option);
    // console.log(option, "opt");
    statesSelect.appendChild(option);
  });

  function fillCities(selectedState) {
    let cities = [];
    switch (countryId) {
      case "india":
        cities = indiaCities[selectedState];
        break;
      case "usa":
        cities = usaCities[selectedState];
        break;
      case "uk":
        cities = ukCities[selectedState];
        break;
      case "australia":
        cities = australiaCities[selectedState];
        break;
      case "rus":
        cities = russiaCities[selectedState];
        break;
      default:
        console.log("select the state bro!!!");
        break;
    }

    // Clear existing options in the cities select
    while (citySelect.firstChild) {
      citySelect.removeChild(citySelect.lastChild);
    }

    cities.forEach((city) => {
      let option = document.createElement("option");
      option.text = city;
      citySelect.appendChild(option);
    });
  }
  statesSelect.addEventListener("change", (e) => {
    const selectedState = e.target.value;
    fillCities(selectedState);
  });
}
