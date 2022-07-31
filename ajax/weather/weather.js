function getTemperature() {
    let zip = document.getElementById("zip").value;
    let unitsElements = document.getElementsByName("units");
    let units = "metric";
    for (let i = 0; i < unitsElements.length; i++) {
        if (unitsElements[i].checked) {
            units = unitsElements[i].value;
        }
    }
    let temp = new XMLHttpRequest();
    temp.onload = function() {
        let response = JSON.parse(this.responseText);
        console.log(response.weather[0].description);
        if (response.weather[0].main === "Clear") {
            document.getElementById("sunny").style.display = "inline-block";
        } else {
            document.getElementById("storm").style.display = "inline-block";
        }

        document.getElementById("currentTemperature").innerText = response.main.temp + "°";
        document.getElementById("sky").innerText = response.weather[0].description;
        document.getElementById("city").innerText = response.name + ", " + response.sys.country;
        document.getElementById("stats").innerText = "Weather in " + response.name + ", " + response.sys.country;
    }
    temp.open("GET", `https://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=c6ebfa1431fa103d0a7783eb5b7a4d62&units=${units}`, true);
    temp.send();
}