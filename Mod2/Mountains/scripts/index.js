//Dicription: This script contains supporting functions for index.html page - Adding table content with data in JSON object 
//Author : Sudesh Pamidi
"use strict"

//window.onload = function() {
$(document).ready(function() {
    let mountains
    $.getJSON("./data/data.json", function(data) {

        mountains = data.mountains
        console.log(mountains);

        const mountainDropdown = document.getElementById("mountain");
        const tbody = document.getElementById("tbody");
        const thead = document.getElementById("thead");
        const tMountain = document.getElementById("tableMountain");


        fillDropDown(mountainDropdown, mountains);

        mountainDropdown.onchange = refreshTbody;

        //first time by default
        let items = getMountainInfo(mountainDropdown.value);

        //addToThead(thead, items);
        //addToTbody(tbody, items);

        displayInTable(tMountain, items);

        //This is to fill the dropDown with the data in array of elements.
        function fillDropDown(dropdown, obj) {
            //adding the option dynamically
            let nextPos = dropdown.options.length;
            obj.forEach(function(e) {
                dropdown.options[nextPos] = new Option(e["name"], e["name"]);
                nextPos++;
            });
        }

        /** to add the rows and columms of tbody with data
         * @param thead table body element
         * @param data  array of elements
         */
        function addToThead(thead, data) {

            let tr = thead.insertRow(0)
            Object.keys(data[0]).forEach(function(k, i) {
                let th = document.createElement("th");
                th.innerHTML = k.toUpperCase(); //data[0][k];
                tr.appendChild(th);
            });

        };

        /** to add the rows and columms of tbody with data
         * @param tbody table body element
         * @param data  array of elements
         */
        function displayInTable(table, data) {

            Object.keys(data[0]).forEach(function(k, i) {
                let tr = table.insertRow(i)
                let cell = tr.insertCell(0);

                switch (k) {
                    case "img":
                        cell.innerHTML = "IMAGE" + ": ";
                        tr.appendChild(cell);

                        cell = tr.insertCell(1);
                        cell.innerHTML = data[0][k];

                        break;
                    default:
                        cell.innerHTML = k.toUpperCase() + ": ";
                        tr.appendChild(cell);

                        cell = tr.insertCell(1);
                        cell.innerHTML = data[0][k];

                };
                tr.appendChild(cell);
            });
        };


        /** to add the rows and columms of tbody with data
         * @param tbody table body element
         * @param data  array of elements
         */
        function addToTbody(tbody, data) {
            data.forEach(function(e) {
                let tr = tbody.insertRow("tr")
                Object.keys(e).forEach(function(k, i) {
                    let cell = tr.insertCell(i);
                    cell.innerHTML = e[k];
                });
            })
        };

        function refreshTbody() {
            //tbody.innerHTML = "";
            tMountain.innerHTML = "";
            items = items = getMountainInfo(mountainDropdown.value);
            displayInTable(tMountain, items);
        }
        /** to add the rows and columms of tbody with data
         * @param mountainName(text) Mountain Name
         * return the mountains element
         */
        function getMountainInfo(mountainName) {
            let mountain = mountains.filter(o => o.name == mountainName);
            return mountain;
        }
    })
});