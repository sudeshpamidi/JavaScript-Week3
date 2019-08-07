"use strict"
window.onload = function() {

    let checkboxes = document.querySelectorAll("input[type=checkbox]");

    checkboxes.forEach(function(e) {
        e.onclick = function() {
            let selection = e.value;
            let status = "none" //hide
            if (e.checked) {
                status = "block"; //show
            }
            let selectedImage = document.querySelectorAll("img[alt^=" + selection + "]");
            selectedImage.forEach(function(x) {
                x.parentNode.style.display = status;
            });
        };
    });
};