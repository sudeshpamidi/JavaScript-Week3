//Dicription: This script contains supporting functions for index.html page - Adding table content with data in JSON object 
//Author : Sudesh Pamidi
"use strict"

let jsonMenu = `[{"meal" : "Breakfast", 
                   "menu":[{"item" : "Biscuit" , "discrption" :"Made with gloteen free" , "price": 0.99},
                           {"item" : "Egg Sandwitch" ,"discrption" :"Form Fresh Eggs" , "price": 3.99},
                           {"item" : "Muffine" ,"discrption" :"Made with gloteen and suger free",  "price": 1.99}
                          ]
                  },
                  {"meal" : "Lunch", 
                  "menu":[{"item" : "Chicken Sandwitch" ,"discrption" :"Organic" , "price": 0.99},
                          {"item" : "Chicken Wrap" , "discrption" :"Organic" ,"price": 3.99},
                          {"item" : "Muffine" , "discrption" :"Organic" ,"price": 1.99}
                         ]
                 },
                 {"meal" : "Dinner", 
                 "menu":[{"item" : "Taco" , "discrption" :"Organic" ,"price": 0.99},
                         {"item" : "Pizza" , "discrption" :"Organic" ,"price": 3.99},
                         {"item" : "Grilled Chicken" , "discrption" :"Organic" ,"price": 1.99}
                        ]
                }                                            
                ]`;

window.onload = function() {
    let menu = JSON.parse(jsonMenu);
    console.log(menu);

    let filter = ["meal"]
    let meal = JSON.parse(JSON.stringify(menu, filter));
    console.log(meal);

    // filter = ["menu"]
    // let menuItems = JSON.parse(JSON.stringify(menu, filter));
    // console.log("menuItems : " + JSON.stringify(menuItems[0]));

    //menu items

    const menuDropdown = document.getElementById("menu");
    const tbody = document.getElementById("tbody");
    const thead = document.getElementById("thead");

    fillDropDown(menuDropdown, meal);
    menuDropdown.onchange = refreshTbody;

    //first time by default
    let items = menu[menuDropdown.value].menu;

    addToThead(thead, items);

    addToTbody(tbody, items);

    //This is to fill the dropDown with the data in array of elements.
    function fillDropDown(dropdown, obj) {
        //adding the option dynamically
        let nextPos = dropdown.options.length;
        obj.forEach(function(e) {
            dropdown.options[nextPos] = new Option(e["meal"], nextPos);
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
        tbody.innerHTML = "";
        items = menu[menuDropdown.value].menu;
        addToTbody(tbody, items);
    }
};