function cityClock(city,cityList){
    if( document.querySelector(`#${city}`)){
  let cityElement = document.querySelector(`#${city}`);
    if(cityElement=== null){          
    let cityDateElement = cityElement.querySelector(".date");
    let cityTimeElement = cityElement.querySelector(".time");
    cityDateElement.innerHTML = moment().tz(cityList).format("dddd Do yyyy");
    cityTimeElement.innerHTML = moment().tz(cityList).format("hh:mm:ss [<small>]A[</small>]");
    
    }
    }
}

cityClock("los-angles", "America/Los_Angeles");
cityClock("paris","Europe/Paris");
setInterval(() => cityClock("los-angles", "America/Los_Angeles"), 1000);
setInterval(() => cityClock("paris","Europe/Paris"), 1000);

let citySelector = document.querySelector("#citySelector");
citySelector.addEventListener("change" , (event)=>{
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_" , " ").split("/")[1];
    console.log(cityName);
    let citiesContainerElement = document.querySelector("#citiesContainer");
    citiesContainerElement.innerHTML =
    `
    <div class="cities" id=${cityTimeZone.split("/")[1]}>
          <div>
            <h2>${cityName}</h2>
            <div class="date">${moment().tz(cityTimeZone).format("dddd Do yyyy")}</div>
          </div>
          <div class="time">${moment().tz(cityTimeZone).format("hh:mm:ss [<small>]A[</small>]")}</div>
        </div>
    `;
    setInterval(() => cityClock(cityTimeZone.split("/")[1], cityTimeZone), 1000);

});


 
 