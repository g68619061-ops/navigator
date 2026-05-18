// const myapi = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

// async function mine() {
//     let z = await fetch(myapi);
//     let s = await z.json();
//     console.log(s);

// }
// mine();

let mydata = document.querySelector("#data");
let myerror = document.querySelector("#error");
let fetchi = document.querySelector("h1");

let lati;
let longi;

function a(data) {
    console.log(data);
    lati = data.coords.latitude;
    longi = data.coords.longitude;
    console.log(`Latitude : ${lati} and Logitude : ${longi}`)
    mydata.innerHTML = `Latitude : ${lati}<br>Logitude : ${longi}`
    fetchi.style.display="none";
}

function b(error) {
    console.log(`Problem to fetch data ${error}`);
    myerror.innerHTML = `Problem to fetch data ${error}`
    myerror.style.color = "red";
     fetchi.style.display="none";

}

function f() {
    navigator.geolocation.getCurrentPosition(a, b);
}
f();