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

    dailyBtn.className = "secondary-card-text__color";
    monthlyBtn.className = "secondary-card-text__color";
    weeklyBtn.className = "secondary-card-text__color-active";

    for (let i = 0; i < listOfAffectedPTags.length; i++) {
        let index = Math.floor(i / 2);

        if (i % 2 == 0) {
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.weekly.current}hrs`
        }
        else {
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.weekly.previous}hrs`
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
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.daily.previous}hrs`
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
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.weekly.previous}hrs`
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
            document.getElementById(listOfAffectedPTags[i]).innerText = `${arrayOfData[index].timeframes.monthly.previous}hrs`
        }
    }
})

