"use strict";
function loop(){
let link = "https://kea-alt-del.dk/kata-distortion/";
//fetch the json inside the link
function getData(link) {
    fetch(link)
        .then(res => res.json())
        .then(show);
}


//json loaded => show json in console, data changes every 10 seconds, set interval

function show(json) {
    console.log(json.inQueue);    
    document.querySelector("#num").textContent = json.inQueue;
    // document.querySelector("#num").classList.add('active');
    document.querySelector(".time").textContent = json.inQueue * 1.25;
 }

getData(link);

};

//load svg

function loadSVG(a,b){ 
    fetch(a)
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.querySelector(b).innerHTML = data;
    })
    
    }
// loadSVG("que.svg","#my-svg");

setInterval(loop,1000);