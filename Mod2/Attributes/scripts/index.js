//Description: 
//Author: Sudesh Pamidi
"use strict"
window.onload = function() {

    let images = [
        { filename: "images/empirestate.jpg", description: "Empirestate" },
        { filename: "images/brooklyn.jpg", description: "Brooklyn" },
        { filename: "images/centralpark.jpg", description: "Central Park" }
    ];

    //let imageElements = document.querySelectorAll("img");
    let imageElements = Array.from(document.images);

    let i = 0;
    imageElements.forEach(function(e) {
        e.src = images[i].filename;
        e.alt = images[i].description;
        i++;
    });

    let plusBtn = document.getElementById("plusBtn")
    let minusBtn = document.getElementById("minusBtn")

    let para = document.querySelectorAll("p");

    plusBtn.onclick = increaseFont;
    minusBtn.onclick = decreaseFont;

    //increase the font size by 10%
    function increaseFont() {
        para.forEach(function(p) {
            if (p.style.fontSize == "") {
                p.style.fontSize = "1.0em";
            } else {
                p.style.fontSize = parseFloat(p.style.fontSize) + parseFloat(p.style.fontSize) * 0.1 + "em"
            }
        });
    };

    //decrease the font size by 10%
    function decreaseFont() {
        para.forEach(function(p) {
            if (p.style.fontSize == "") {
                p.style.fontSize = "1.0em";
            } else {
                p.style.fontSize = parseFloat(p.style.fontSize) - parseFloat(p.style.fontSize) * 0.1 + "em"
            }
        });
    }

};