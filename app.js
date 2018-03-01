"use strict";

window.onload = load_new;

function setup_popup() {
    var popup = document.getElementById("lucka_popup");
    var popupclose = document.getElementById("closeModal");
    popupclose.onclick = function() {
        popup.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
    return popup;
}

function set_popup_content(i) {
    var cont = document.getElementById("lucka_container");
    console.log(i);
    var res = "";
    switch(parseInt(i)) {
        case 1:
            res = "ABSINT";
            break;
        case 2:
            res = "ARISTO-POD";
            break;
        case 3:
            res = "EN FUCK ME UP!"
            break;
        default:
            res = "<404>";
    }
    cont.innerText = res;
}

function load_new() {
    var popup = setup_popup();
    var luckor = document.getElementById('goa_luckor_container');
    for (var i = 0; i < 25; i++) {
        var lucka = document.createElement('div')
        var number = document.createElement('div');
        lucka.classList.add("lucka_stängd");
        number.classList.add("lucka_number");
        number.innerText = i + 1;
        lucka.appendChild(number);
        luckor.appendChild(lucka);
        lucka.onclick = function(event) {
            popup.style.display = "block";
            set_popup_content(event.target.innerText);
        }
    }
}
