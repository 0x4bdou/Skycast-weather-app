export default async function handler(req, res) {

  const API_KEY = process.env.WEATHER_KEY;
  const city = req.query.city;

  if (!city) {
    return res.status(400).json({
      error: "City parameter is required"
    });
  }

  try {

    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    );

    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();

    const lat = weatherData.coord.lat;
    const lon = weatherData.coord.lon;

    const airRes = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const airData = await airRes.json();

    res.status(200).json({
      weatherData,
      forecast: forecastData,
      air: airData
    });

  } catch (error) {

    res.status(500).json({
      error: "Failed to fetch weather data"
    });

  }

}