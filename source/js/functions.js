"use strict";

function loop() {

    let link = 'https://kea-alt-del.dk/kata-distortion/';

    // Fetch json from the link
    function getData( link ) {
        fetch( link )
            .then( res => res.json() )
            .then( show );

    }


    // Show json in console
    function show( json ) {

        let template = document.querySelector( '#template' );
        let container = document.querySelector( '#container' );

        let clon = template.cloneNode( true ).content;

        let queueNumber = json.inQueue * 4;

        clon.querySelector('.inQueue').style.height = queueNumber + '%';
        clon.querySelector('.queueNumber').textContent = json.inQueue;

        container.appendChild( clon );

        console.log( json );
        console.log( json.inQueue );

        document.querySelector( '#name' ).textContent = json.name;
        document.querySelector( '#number' ).textContent = json.inQueue;
    }

    getData( link );

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

// Set interval - data changes every 10 seconds
setInterval(loop,10000);

// Read the script when DOM is downloaded
document.addEventListener("DOMContentLoaded", loop);