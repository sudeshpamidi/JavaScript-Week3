"use strict"

window.onload = function() {

    const googleBtn = document.getElementById("googleBtn");
    const hartfordBtn = document.getElementById("hartfordBtn");
    const w3Btn = document.getElementById("w3Btn");
    const myWinBtn = document.getElementById("myWinBtn");

    let popupWin;

    googleBtn.onclick = function() {
        window.open("https://google.com");
    };

    hartfordBtn.onclick = function() {
        let param = "heigth= 600, width=400"
        window.open("https://thehartford.com", "Hartford", param);
    };

    w3Btn.onclick = function() {
        let param = "heigth=500, width=400,left 30, top=30";
        window.open("https://www.w3schools.com/js", "w3", param);
    };




    myWinBtn.onclick = function() {
        popupWin = window.open("myPopup.html", "myPopup", "heigth=500, width=300");

        const myDiv = popupWin.document.getElementById("myDiv"); // This is not working
        myDiv.innerHTML = window.navigator.language; // This is not working
        popupWin.focus();
    };



};