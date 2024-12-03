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
alert("help me")

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