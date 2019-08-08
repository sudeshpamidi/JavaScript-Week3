//Description: 
//Author: Sudesh Pamidi
"use strict"
window.onload = function() {

    let json = `[
        { "category": "Sightseeing", "title": "Invisible Falls", "description": "Spend an afternoon searching for our invisible falls. Pan gold while you look.", "cost": 29.99 },
        { "category": "Adventure", "title": "Trekking", "description": "Alberta - get ready for an adventure that brings together the beautiful expanse of the prairie and the soaring majesty of the Canadian Rockies.", "cost": 59.99 }
    ]`;

    let tours = JSON.parse(json)

    console.log(tours);

    tours.forEach(function(e) {
        let tableElement = document.getElementById("tableTours");

        let tr = document.createElement("tr")
        tableElement.appendChild(tr);

        Array.from(e).forEach(function(x) {
            alert(x);
        });



    });

};