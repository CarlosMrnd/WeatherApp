export default function setWeatherHour(hour) {
    if (hour >= 0 && hour < 12) {
        return `${hour}am`;
    }
    else if (hour >= 12 && hour <= 23) {
        return `${hour}pm`;
    }
}