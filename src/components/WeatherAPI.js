
const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c4acddbd9704590c8bc7fce7a64c425a';

export const fetchWeather = (lat, lon) => {
    const url = rootUrl + '&lat' + lat + '&lon=' + lon + "&units=metric";
    console.log(url);

    return fetch(url)
    .then(res => res.json())
    .then(json => ({
        temp: json.main.temp,
        weather: json.weather[0].main
    }));
}