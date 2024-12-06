let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");
//work card ids
let workData = document.getElementById("workData");
let workSubData = document.getElementById("workSubData");
//play card ids
let playData = document.getElementById("playData");
let playSubData = document.getElementById("playSubData");
//study card ids
let studyData = document.getElementById("studyData");
let studySubData = document.getElementById("studySubData");
//exercise card ids
let exerciseData = document.getElementById("exerciseData")
let exerciseSubData = document.getElementById("exerciseSubData")
//social card ids
let socialData = document.getElementById("socialData");
let socialSubData = document.getElementById("socialSubData");
//self care card ids
let selfCareData = document.getElementById("selfCareData");
let selfCareSubData = document.getElementById("selfCareSubData");


let firstBody = document.getElementById("firstBody");
let thirdBody = document.getElementById("thirdBody");
let secondBody = document.getElementById("secondBody");
let mainContainer = document.getElementById("mainContainer")

let buttonsDiv = document.getElementById("buttonsDiv");

let cardOne = document.getElementById("cardOne");
let cardTwo = document.getElementById("cardTwo");
let cardThree = document.getElementById("cardThree");
let cardFour = document.getElementById("cardFour");
let cardFive = document.getElementById("cardFive");
let cardSix = document.getElementById("cardSix");

// Step 1: Create a media query string
const mediaQuery = window.matchMedia("(max-width: 767px)");

// Step 2: Define a function to handle changes
function handleMediaQueryChange(event) {
  if (event.matches) {
    // If the screen width is 767px or less
    thirdBody.className = "d-flex flex-column align-items-center";
    secondBody.className = "d-flex flex-column align-items-center";
    firstBody.className = "d-flex flex-column align-items-center";
    cardOne.classList.add("w-100");
    cardTwo.classList.add("w-100");
    cardThree.classList.add("w-100");
    cardFour.classList.add("w-100");
    cardFive.classList.add("w-100");
    cardSix.classList.add("w-100");

    buttonsDiv.classList.add("text-alignment__mobile-responsive");
    buttonsDiv.classList.remove("d-flex", "flex-column", "justify-content-center");
  } else {
    // If the screen width is greater than 767px
    thirdBody.className = "row";
    secondBody.className = "row ";
    firstBody.className = "row w-75 d-flex justify-content-center";

    cardOne.classList.remove("w-100");
    cardTwo.classList.remove("w-100");
    cardThree.classList.remove("w-100");
    cardFour.classList.remove("w-100");
    cardFive.classList.remove("w-100");
    cardSix.classList.remove("w-100");

    buttonsDiv.className = "card-body d-flex flex-column justify-content-center rounded-4 card-textbox__colors";
  }
}

// Step 3: Add an event listener to listen for changes in the media query
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Step 4: Call the function initially to apply styles based on the current screen width
handleMediaQueryChange(mediaQuery);



const listOfAffectedPTags =
    [
        "workData", "workSubData",
        "playData", "playSubData",
        "studyData", "studySubData",
        "exerciseData", "exerciseSubData",
        "socialData", "socialSubData",
        "selfCareData", "selfCareSubData"
    ];

async function getData() {
    const jsonData = await fetch("./data/data.json")
    const data = await jsonData.json();

    return data;
}


async function defaultInformation() {
    let arrayOfData = await getData();

    dailyBtn.className = "secondary-card-text__color ";
    monthlyBtn.className = "secondary-card-text__color";
    weeklyBtn.className = "secondary-card-text__color-active ";

    for (let i = 0; i < listOfAffectedPTags.length; i++) {
        let index = Math.floor(i / 2);

        if (i % 2 == 0) {
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.weekly.current}hrs`
        }
        else {
            document.getElementById(listOfAffectedPTags[i]).innerText = `Last Week - ${arrayOfData[index].timeframes.weekly.previous}hrs`
        }
    }
}

defaultInformation();

dailyBtn.addEventListener("click", async function () {
    let arrayOfData = await getData();

    weeklyBtn.className = "secondary-card-text__color";
    monthlyBtn.className = "secondary-card-text__color";
    dailyBtn.className = "secondary-card-text__color-active";

    for (let i = 0; i < listOfAffectedPTags.length; i++) {
        let index = Math.floor(i / 2);

        if (i % 2 == 0) {
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.daily.current}hrs`
        }
        else {
            document.getElementById(listOfAffectedPTags[i]).innerText = `Yesterday - ${arrayOfData[index].timeframes.daily.previous}hrs`
        }
    }
})


weeklyBtn.addEventListener("click", async function () {
    let arrayOfData = await getData();

    dailyBtn.className = "secondary-card-text__color";
    monthlyBtn.className = "secondary-card-text__color";
    weeklyBtn.className = "secondary-card-text__color-active";

    for (let i = 0; i < listOfAffectedPTags.length; i++) {
        let index = Math.floor(i / 2);

        if (i % 2 == 0) {
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.weekly.current}hrs`
        }
        else {
            document.getElementById(listOfAffectedPTags[i]).innerText = `Last Week - ${arrayOfData[index].timeframes.weekly.previous}hrs`
        }
    }

})

monthlyBtn.addEventListener("click", async function () {
    let arrayOfData = await getData();

    weeklyBtn.className = "secondary-card-text__color";
    dailyBtn.className = "secondary-card-text__color";
    monthlyBtn.className = "secondary-card-text__color-active";

    for (let i = 0; i < listOfAffectedPTags.length; i++) {
        let index = Math.floor(i / 2);

        if (i % 2 == 0) {
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.monthly.current}hrs`
        }
        else {
            document.getElementById(listOfAffectedPTags[i]).innerText = `Last Month - ${arrayOfData[index].timeframes.monthly.previous}hrs`
        }
    }
})

