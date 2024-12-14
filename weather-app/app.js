const btn = document.getElementById("check")
const city = document.getElementById("city")
const country = document.getElementById("country")
const root = document.getElementById("root")


btn.addEventListener("click", async () => {
    root.innerHTML = `<h1>Loading...</h1>`
    const apiKey = `fdabf7a837697500f924aadb2ec1f3de`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${apiKey}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    func(data)
})

const func = (data) => {
    
        if(data.cod == 404){
           return Swal.fire({
                title: "Sorry!",
                text: data.message,
                icon: "error"
              }).then((data) => {
                if(data.isConfirmed){
                 window.location.reload()
                    
                }else if(data.isDismissed){
                    window.location.reload()
                }
                
              });
    }else{

        
        root.innerHTML = `
        <div id="container">
        <img src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" id="tempIcon">
            <div class="flex">
            <h2 id="weatherCountry">${data.name}</h2>
            <h2 id="temperature">${data.main.temp}°<strong>C</strong></h2>
            <h2 id="weatherDescription">${data.weather[0].main}</h2>
            <ul>
                <div class="features">
                <li id="feelsLike">Feels Like ${data.main.feels_like}°C</li>
                <li id="humidity">Humidity ${data.main.humidity}</li>
                <li id="longitude">Longitude ${data.coord.lon}</li>
                <li id="latitude">Latitude ${data.coord.lat}</li>
                </div>
                </ul>
                </div>
                `
            }
        }





{/* <p>${data.name}</p><br>
<img width="100" src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">
<h1>${data.main.temp} C</h1>
<h3>${data.weather[0].main}</h3> */}
