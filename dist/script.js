// custom inline dropdown
document.getElementById('currentSeason').innerText = window.sessionStorage.getItem("season") || 'annual'

var hidSsn = document.querySelectorAll('#hiddenSeason')[0];
var hidSsns = document.querySelectorAll('#hiddenSeasons')[0];

var hidCity = document.querySelectorAll('#hiddenCity')[0];
var hidCities = document.querySelectorAll('#hiddenCities')[0];

function openDropdownSsns() {
  hidSsns.classList.toggle('open');
}

function openDropdownCities() {
  hidCities.classList.toggle('open');
}

function logCity(e) {
  var selectedCity = e.target.innerText
  window.sessionStorage.setItem("city", selectedCity);
  location.reload();
}


function logSeason(e) {
  var selectedSeason = e.target.innerText
  window.sessionStorage.setItem("season", selectedSeason);
  location.reload();
}

hidSsn.addEventListener("click", openDropdownSsns, false);
hidSsns.addEventListener("click", logSeason);

hidCity.addEventListener("click", openDropdownCities, false);
hidCities.addEventListener("click", logCity);

// window.sessionStorage.setItem("city", "singapore");
// function logToggle(e) {
//   window.sessionStorage.setItem("city", "singapore");

//   if (e.checked) {
//     window.sessionStorage.setItem("city", "zurich");
//   }

//   location.reload();
// }