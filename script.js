function getAirQuality() {
  fetch('https://api.airnowapi.org/v1/currents/observations/zipCode/10001/date/2023-07-01?distance=25&API_KEY=your_api_key')
    .then(response => response.json())
    .then(data => {
      const airQuality = data.observations[0].AQI;
      document.getElementById('airQuality').textContent = `Current Air Quality Index: ${airQuality}`;
    })
    .catch(error => console.error(error));
}

getAirQuality();
