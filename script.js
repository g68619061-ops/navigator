let temp = document.querySelector("#temp");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humidity");
let feel = document.querySelector("#feel");
let wind = document.querySelector("#wind");

let la;
let lo;

function a(data) {
    la = data.coords.latitude;
    lo = data.coords.longitude;
    console.log(`Latitude : ${la} Longitude : ${lo}`)
    jsd();
}
function b(error) {
    console.log("Error");
}

function c() {
    navigator.geolocation.getCurrentPosition(a, b);
}


c();

async function jsd() {
    let myap = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=e405b5324908da8d44e445b9c12b6bbb&units=metric`;
    try{
    let s = await fetch(myap);
    let gs = await s.json();
    console.log(gs);
    temp.innerHTML=`${Math.round(gs.main.temp)}°`;
    city.innerHTML=`City : ${gs.name}`;
    humidity.innerHTML=`Humidity : ${gs.main.humidity}%`;
    feel.innerHTML=`Feels Like : ${Math.round(gs.main.feels_like)}°`;
    wind.innerHTML=`Wind Speed ${gs.wind.speed}kmph`;
} catch (rr) {
    console.log("Error to fetch data");
}
}
