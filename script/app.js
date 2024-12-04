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
//social card ids
let socialData = document.getElementById("socialData");
let socialSubData = document.getElementById("socialSubData");
//self care card ids
let selfCareData = document.getElementById("selfCareData");
let selfCareSubData = document.getElementById("selfCareSubData");


function getData(){
    return fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data;
    });
}

function defaultInformation(){
    getData().then(arrayOfData => {

        console.log(arrayOfData[5].timeframes.weekly.current);

        workData.innerText = `${arrayOfData[0].timeframes.weekly.current}hrs`;
        workSubData.innerText = `${arrayOfData[0].timeframes.weekly.previous}hrs`;

        playData.innerText = `${arrayOfData[1].timeframes.weekly.current}hrs`;
        playSubData.innerText = `${arrayOfData[1].timeframes.weekly.previous}hrs`;

        studyData.innerText = `${arrayOfData[2].timeframes.weekly.current}hrs`;
        studySubData.innerText = `${arrayOfData[2].timeframes.weekly.previous}hrs`;

        exerciseData.innerText = `${arrayOfData[3].timeframes.weekly.current}hrs`;
        exerciseSubData.innerText = `${arrayOfData[3].timeframes.weekly.previous}hrs`;

        socialData.innerText = `${arrayOfData[4].timeframes.weekly.current}hrs`;
        socialSubData.innerText = `${arrayOfData[4].timeframes.weekly.previous}hrs`;

        selfCareData.innerText = `${arrayOfData[5].timeframes.weekly.current}hrs`;
        selfCareSubData.innerText = `${arrayOfData[5].timeframes.weekly.previous}hrs`;
    })
    
    //selfCareData.innerText =
    //selfCareSubData.innerText = arrayOfData[5];
}

defaultInformation();

getData();

dailyBtn.addEventListener("click", function(){

})


weeklyBtn.addEventListener("click", function(){
    
})

monthlyBtn.addEventListener("click", function(){
    
})






// function testIDs(){
//     selfCareSubData.innerText = "Testing"
// }

// testIDs();