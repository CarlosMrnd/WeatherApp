import cloudy from "../images/cloud.svg";
import dropy from "../images/rain.svg";
import fogdy from "../images/fogdy.svg";
import nighty from "../images/night.svg";
import rainy from "../images/thunder.svg";
import snowy from "../images/snowy.svg";
import sunny from "../images/sun.svg";

export default function setWeatherImgs(condition) {

    let lowerCaseCondition = condition.toLowerCase();
    let wordArray = lowerCaseCondition.split(" ");

    if (wordArray.includes("sunny")) {
        return sunny;
    }
    else if (wordArray.includes("clear")) {
        return nighty;
    }
    else if (wordArray.includes("cloudy") || wordArray.includes("overcast")) {
        return cloudy;
    }
    else if (wordArray.includes("fog") || wordArray.includes("mist")) {
        return fogdy;
    }
    else if (wordArray.includes("rain") || wordArray.includes("drizzle") ||
        wordArray.includes("sleet")) {
        return dropy;
    }
    else if (wordArray.includes("thundery")) {
        return rainy;
    }
    else if (wordArray.includes("snow") || wordArray.includes("ice") ||
        wordArray.includes("blizzard")) {
        return snowy;
    }
};