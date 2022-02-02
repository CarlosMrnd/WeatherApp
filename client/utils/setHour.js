export default function setWeatherHour(hour) {
    hour < 12 ? `${hour}am` :
        hour < 19 ? `${hour}pm` :
        console.log("holis");
}