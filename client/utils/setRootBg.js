import cloudyBg from "../images/cloudBg.png";
import dropyBg from "../images/dropBg.png";
import fogdyBg from "../images/fogdyBg.png";
import nightyBg from "../images/nightyBg.png";
import rainyBg from "../images/rainBg.png";
import snowyBg from "../images/snowBg.png";
import sunnyBg from "../images/sunBg.png";

const rootDiv = document.getElementById("root");

export default function setBg(condition){
    
    let lowerCaseCondition = condition.toLowerCase();
    let wordArray = lowerCaseCondition.split(" ");

    if (wordArray.includes("sunny")) {
        rootDiv.style.backgroundImage = `url(${sunnyBg})`;
        rootDiv.style.backgroundColor = `#FFDD85`;
    }
    else if (wordArray.includes("clear")) {
        rootDiv.style.backgroundImage = `url(${nightyBg})`;
        rootDiv.style.backgroundColor = `#589FFF`;
    }
    else if (wordArray.includes("cloudy") || wordArray.includes("overcast")) {
        rootDiv.style.backgroundImage = `url(${cloudyBg})`;
        rootDiv.style.backgroundColor = `#589FFF`;
    }
    else if (wordArray.includes("fog") || wordArray.includes("mist")) {
        rootDiv.style.backgroundImage = `url(${fogdyBg})`;
        rootDiv.style.backgroundColor = `#589FFF`;
    }
    else if (wordArray.includes("rain") || wordArray.includes("drizzle") ||
        wordArray.includes("sleet")) {
        rootDiv.style.backgroundImage = `url(${dropyBg})`;
        rootDiv.style.backgroundColor = `#589FFF`;
    }
    else if (wordArray.includes("thundery")) {
        rootDiv.style.backgroundImage = `url(${rainyBg})`;
        rootDiv.style.backgroundColor = `#589FFF`;        
    }
    else if (wordArray.includes("snow") || wordArray.includes("ice") ||
        wordArray.includes("blizzard")) {
        rootDiv.style.backgroundImage = `url(${snowyBg})`;
        rootDiv.style.backgroundColor = `#589FFF`;
    }
};