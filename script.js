const apiKey = '9d880c3ce326af403bdd2ddd97de2772'; 
  function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=${apiKey}&units=metric`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const feels = data.main.feels_like;
            const ws = data.wind.speed;
            document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('fl').textContent = `Feels like: ${feels} °C`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity} %`;
            document.getElementById('wind').textContent = `Wind Speed: ${ws} m/s`;
            if(data.weather[0].main=='Clouds'){
              document.getElementById("cloudy").style.display="block";
                      }
            else if(data.weather[0].main=='Clear'){
              document.getElementById("sun").style.display="block";
            }    
            else if(data.weather[0].main=='Snow'){
              document.getElementById("snowy").style.display="block";
            }  
            else if(data.weather[0].main=='Rain'){
              document.getElementById("rain").style.display="block";
            }
            else if(data.weather[0].main=='Smoke'){
              document.getElementById("smoke").style.display="block";
            }
            else if(data.weather[0].main=='Mist'){
              document.getElementById("mist").style.display="block";
            }       
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
     
}

  
  getWeather(); 
  