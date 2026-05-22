let temp = document.querySelector("#temp");
let city = document.querySelector("#city");
let humidity = document.querySelector("#humidity");
let feel = document.querySelector("#feel");
let wind = document.querySelector("#wind");
let deny = document.querySelector("#deny");
let main = document.querySelector("#main");
let condition = document.querySelector("#condition");
let body = document.querySelector("body");
let owner = document.querySelector("#owner");
let la;
let lo;

function a(data) {
    la = data.coords.latitude;
    lo = data.coords.longitude;
    console.log(`Latitude : ${la} Longitude : ${lo}`)
    deny.style.display = "none";
    main.style.display = "flex";
    jsd();
}

function b(error) {
    console.log("Error");
    deny.style.display = "block";
    deny.style.color = "red";
    deny.innerHTML = "Trun On Location Service"
    main.style.display = "none";
}

function c() {
    navigator.geolocation.getCurrentPosition(a, b);
}
c();

async function jsd() {
    let myap = `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&appid=e405b5324908da8d44e445b9c12b6bbb&units=metric`;
    try {
        let s = await fetch(myap);
        let gs = await s.json();
        console.log(gs);
        temp.innerHTML = `${Math.round(gs.main.temp)}°`;
        city.innerHTML = `City : ${gs.name}`;
        humidity.innerHTML = `Humidity : ${gs.main.humidity}%`;
        feel.innerHTML = `Feels Like : ${Math.round(gs.main.feels_like)}°`;
        wind.innerHTML = `Wind Speed : ${Math.round(gs.wind.speed)} kmph`;
        condition.innerHTML = `${gs.weather[0].description}`;
        if (condition.innerHTML === "haze") {
            body.style.backgroundImage = "linear-gradient(white, white, rgba(0, 69, 83, 0.87))";
            owner.style.color = "white";
        }
    } catch (rr) {
        console.log("Error to fetch data");
        alert("Problem to fetching data.")
    }
}
