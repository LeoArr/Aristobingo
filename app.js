"use strict";
var lotto = '<iframe width="560" height="315" src="https://www.youtube.com/embed/m19ZYMJIK8I?rel=0&amp;controls=0&amp;showinfo=0&amp;start=2&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
var vinster = [
    'SHOT',
    'ARISTO-POD',
    'EN FUCK ME UP!',
    'ÄGG!',
    'PLÖTSLIG DÖD',
    'ETT TILL FRIKORT I DIN NÄSTA RELATION'
];

window.onload = load_new;

//init the modal popup window
function setup_popup() {
    var popup = document.getElementById("lucka_popup");
    var popupclose = document.getElementById("closeModal");
    popupclose.onclick = function() {
        popup.style.display = "none";
        document.getElementById("lucka_container").innerHTML = "";
    }
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            document.getElementById("lucka_container").innerHTML = "";
        }
    }
    return popup;
}

//adds content to the popup when the lucka is clicked
function set_popup_content(i) {
    var cont = document.getElementById("lucka_container");
    var lucka = Math.floor(Math.random() * vinster.length);
    var res = vinster[lucka];
    var p = document.createElement('p');
    p.innerText = res;
    vinster.splice(lucka, 1);
    cont.appendChild(p);
    cont.innerHTML += lotto;

}

//run on load. init allt
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
            event.target.classList.replace("lucka_stängd", "lucka_öppnad");
            set_popup_content(event.target.innerText);
        }
    }
}
