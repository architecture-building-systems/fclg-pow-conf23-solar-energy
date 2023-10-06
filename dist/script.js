// custom inline dropdown
document.getElementById('currentSeason').innerText = window.sessionStorage.getItem("model") || 'annual'

var d = document.querySelectorAll('.inline-dropdown')[0];
var s = document.querySelectorAll('.inline-selections')[0];
console.log(d)

function openDropdown(){
  s.classList.toggle('open');
}

function logDropdown(e){
    var selectedSeason = e.target.innerText
    console.log(selectedSeason)
    window.sessionStorage.setItem("model", selectedSeason);
    console.log(window.sessionStorage.getItem("model"));
    location.reload();
}

d.addEventListener("click", openDropdown, false);
s.addEventListener("click", logDropdown)