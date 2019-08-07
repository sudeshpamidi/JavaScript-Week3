"use strict"
window.onload = function() {

    const pElements = document.getElementsByTagName("p");
    const imgElements = document.getElementsByTagName("img");
    const hidBtn = document.getElementById("hidBtn");
    const showBtn = document.getElementById("showBtn");


    // for (let i = 0; i < pElements.length; i++) {
    //     alert(pElements[i].innerHTML);
    // };


    hidBtn.onclick = function() {
        for (let i = 0; i < imgElements.length; i++) {
            //imgElements[i].classList.add("hide"); // .style.border = "2px solid red";
            imgElements[i].className = "hide";
        };
    };

    showBtn.onclick = function() {
        for (let i = 0; i < imgElements.length; i++) {
            //imgElements[i].classList.add("show"); // .style.border = "2px solid red";
            imgElements[i].className = "show image-sm";
        };
    };
}