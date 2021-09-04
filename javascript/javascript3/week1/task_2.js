

  
    
    document.querySelector('button').addEventListener('click',toGetWeather)
    function toGetWeather(){

        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display="block";
        const lowerDiv = document.getElementById('lowerDiv');
        lowerDiv.style.display="none";

        let url = "";
        const locationChoice = document.getElementById('useCurrentLocation');
        if (locationChoice.checked) {
            console.log("use current location");
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("dont use current location");
            const inputValue=document.getElementById('name').value;
            if(inputValue===""){
                console.log("write some city name");
                alert("write some city name");
                return;
            }
            url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&units=metric'+'&appid=6549eccbb4581e545d5589f434565718';
            populateWeatherData(url);
        }
        
    };

    function getFormattedTime(unixTime) {
        const dateObject = new Date(unixTime * 1000);
        const humanDateFormat = dateObject.toLocaleString();
        return humanDateFormat;
    }

    function error() {
        status.textContent = "Unable to retrieve your location";
      }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=6549eccbb4581e545d5589f434565718';
        populateWeatherData(url);
    }

    function populateWeatherData(url) {
        fetch(url)
        .then((response)=>response.json())
        .then((response)=>{
            const loadingDiv = document.getElementById('loading');
            loadingDiv.style.display="none";
            const lowerDiv = document.getElementById('lowerDiv');
            lowerDiv.style.display="block";

            console.log(response);
            const cityName=document.getElementById('city');
            cityName.innerText=response.name;
            const temp=document.getElementById('temp');
            temp.innerText="temp:    "+response.main.temp+" Degree Celcius";
            const sunrise=document.getElementById('sunrise');
            sunrise.innerText="Sunrise: "+getFormattedTime(response.sys.sunrise);
            const sunset=document.getElementById('sunset');
            sunset.innerText="Sunset  : "+getFormattedTime(response.sys.sunset);
            const windSpeed=document.getElementById('wind');
            windSpeed.innerText="Wind speed: "+response.wind.speed+" meter/sec";
            
            const weatherIcon=document.getElementById('icon');
            const iconIdImg=document.getElementById('iconIdImg');
            iconIdImg.src="http://openweathermap.org/img/w/"+response.weather[0].icon+".png";
            const clouds=document.getElementById('cloud');
            clouds.innerText="Cloudiness: "+response.clouds.all+" %";

            console.log(response.main.temp);
            console.log(response.sys.sunrise);
            console.log(response.sys.sunset);
            console.log(response.name);
            console.log(response.wind.speed);
            console.log(response.weather[0].icon);
            console.log(response.weather[0].description);
            console.log(response.cod);
            //console.log(map);
            
        })
    }


    /* fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=6549eccbb4581e545d5589f434565718')

        .then((response)=>response.json())
        .then((response)=>{
            console.log(response);
             let map;
            function initMap(){
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat:response.coord.lat  ,lon:response.coord.lon},
            
                zoom:4,
            })
                }
            })
             
 */

            /* console.log(response.main.temp);
            console.log(response.sys.sunrise);
            console.log(response.sys.sunset);
            console.log(response.name);
            console.log(response.wind.speed);
            console.log(response.weather[0].icon);
            console.log(response.weather[0].description);
            console.log(response.cod);
            console.log(map);

    
    let map;
            function initMap(){
            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat:response.coord.lat  ,lon:response.coord.lon},
            
                zoom:4,
            })
                } 
 */
     




