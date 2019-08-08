//Description: 
//Author: Sudesh Pamidi
"use strict"
window.onload = function() {

    let images = [
        { filename: "empirestate.jpg", description: "Empirestate" },
        { filename: "brooklyn.jpg", description: "Brooklyn" },
        { filename: "centralpark.jpg", description: "Central Park" }
    ];

    const imagesDropdown = document.getElementById("imagesDropdown");
    const imageDiv = document.getElementById("imageDiv")
    const plusBtn = document.getElementById("plusBtn");
    const minusBtn = document.getElementById("minusBtn");

    //adding the option dynamically
    let nextPos = imagesDropdown.options.length;
    images.forEach(function(e) {
        imagesDropdown.options[nextPos] = new Option(e.description, e.filename);
        nextPos++;
    });

    plusBtn.onclick = addImage;
    minusBtn.onclick = deleteImage;

    function addImage() {
        let imgTag = document.createElement("img");
        let pTag = document.createElement("p");

        imgTag.src = "images/" + imagesDropdown.options[imagesDropdown.selectedIndex].value;
        imgTag.alt = imagesDropdown.options[imagesDropdown.selectedIndex].text;
        imageDiv.appendChild(imgTag);


        pTag.innerHTML = imagesDropdown.options[imagesDropdown.selectedIndex].text;
        imageDiv.appendChild(pTag);


    };

    function deleteImage() {
        let lastChild = imageDiv.lastChild;

        imageDiv.removeChild(lastChild);
    };



};