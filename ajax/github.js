function loadUsers() {
    let year = document.getElementById("year").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        let response = JSON.parse(this.responseText);
        console.log(response);

        let htmlElement = response.map(item => `
        
            <div id="card" class="card" style="border: 1px solid red" draggable="true" ondragstart="drag(event)">
            <img src=${item.avatar_url} alt="Avatar" style="width:100%">
            <div class="container">
            <h4><b>${item.login}</b></h4>
            <a href="https://github.com/${item.login}" target="_blank">Github</a>
            </div>
            </div>

        
        `)
            .join(' ');
        document.getElementById("demo").innerHTML = htmlElement;
    }
    xhttp.open("GET", "https://api.github.com/users?since=" + year, true);
    // https://api.openweathermap.org/data/2.5/weather?zip=19711,US&appid=c6ebfa1431fa103d0a7783eb5b7a4d62&units=metric
    xhttp.send();
}