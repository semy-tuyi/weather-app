
let key =  "979ebcb79e42ae20aff6917f54e34f0b";
let call = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=979ebcb79e42ae20aff6917f54e34f0b";


//get dom elements
let searchBtn = document.getElementById('search-btn');
let outPut = document.getElementById('result-box');

outPut.innerHTML = "Results appear here!";


// add event to the search button
searchBtn.addEventListener('click', search);
//toggle.addEventListener('click', search);


//loading gif
let loading = `<div class = "loader">
<img src="https://c.tenor.com/PfFDd3eNE_gAAAAi/loading-load.gif" width="100px" height="100px" alt="Loading..." />
</div>`;

// searching function
function search(event, status){
    event.preventDefault();

    outPut.innerHTML = loading;
    let city = document.getElementById('name').value;
    let toggle = document.getElementById('toggle');
        

    if(!toggle.checked){
        if(city !== ""){
           
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=979ebcb79e42ae20aff6917f54e34f0b`)
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                  } else {
                    throw Error(res.statusText);
                  }
            })
            .then( (data) => {
                    outPut.innerHTML = `<img class="icon" src =" http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                    <div >${data.weather[0].main}</div> <br>
                    <div >Description: ${data.weather[0].description}</div> <br>
                    <div class="location"> <b>${data.name}, ${data.sys.country} </b></div><br>
        
                    <div >Temperature: ${celicius(data.main.temp)} &#8451;</div> <br>
                    <div >Min Temperature: ${celicius(data.main.temp_min)} &#8451;</div> <br>
                    <div >Max Temperature: ${celicius(data.main.temp_max)} &#8451;</div> <br>
                    <div >Pressure: ${data.main.pressure} hPa</div> <br>
                    <div >Humidity: ${data.main.humidity} %</div>
                    `;
            })
            .catch((error) => {
                outPut.innerHTML = "City not found!";

            })
        }else{
            outPut.innerHTML = "Enter name of City please!";
        }
       

    }else{
        if(city !== ""){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=979ebcb79e42ae20aff6917f54e34f0b`)
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json();
                  } else {
                    throw Error(res.statusText);
                  }
            })
            .then( (data) => {
                outPut.innerHTML = `<img class="icon" src =" http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <div >${data.weather[0].main}</div> <br>
                <div >Description: ${data.weather[0].description}</div> <br>
                <div class="location"> <b>${data.name}, ${data.sys.country} </b></div><br>

                <div >Temperature: ${fahrenheit(data.main.temp)} <b>&#8457;</b></div> <br>
                <div >Min Temperature: ${fahrenheit(data.main.temp_min)} <b>&#8457;</b></div> <br>
                <div >Max Temperature: ${fahrenheit(data.main.temp_max)} <b>&#8457;</b></div> <br>
                <div >Pressure: ${data.main.pressure} hPa</div> <br>
                <div >Humidity: ${data.main.humidity} %</div>
                `;
            })
            .catch((error) => {
                outPut.innerHTML = "City not found!";
            })
        }else{
            outPut.innerHTML = "Enter name of City please!";
        }
    }

    
}
    
// convert temperature from kelvin to celicius
function celicius(temp){
    return (temp - 273.15).toFixed(2);
}

// kelvin to fahrenheit
function fahrenheit(temp){
    return ((temp -273.15) * 9/5 + 32).toFixed(2);
}
