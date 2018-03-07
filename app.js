"use strict";

var lotto = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/m19ZYMJIK8I?rel=0&amp;controls=0&amp;showinfo=0&amp;start=2&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/mfPhqk8Gtd4?rel=0&amp;controls=0&amp;showinfo=0&amp;start=5&autoplay=1&end=15" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/P_5-OSVYyis?rel=0&amp;controls=0&amp;showinfo=0&amp:start=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLeifOlssonFanClub%2Fvideos%2F1980499622213480%2F&show_text=0&width=560&mute=0&autoplay=1" width="560" height="315" style="border:none;overflow:hidden"allow="autoplay scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>',
      '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLeifOlssonFanClub%2Fvideos%2F1950731018523674%2F&show_text=0&width=560&mute=0&autoplay=1" width="560" height="420" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>']

var vinster = [
    'SHOT!',
    'TVÄTTMEDEL!',
    'ÄGG!',
    'PLÖTSLIG DÖD',
    'ETT TILL FRIKORT I DIN NÄSTA RELATION',
    'MUSIKFRÅGA!',
    'FINSKA PIROGER!',
    'DAGENS DUBBEL!',
    'FÄRGFEMMAN!',
    'KAFFE!',
    'GÅTA!',
    "2760!",
    "PATET-LUCKAN!",
    "TRYKK-LUCKAN!",
    "KATTMAT!",
    "BLINDBÖCK!",
    "INSERT TEXT HERE!",
    "FÖRR VS SNART!",
    "FÖRSTEN SOM STÄLLER SIG UPP FÅR EN SHOT!",
    "DÖMD-FRÅGA!",
    "CHARIZADER!",
    "PICTIONARY!",
    "FLIP CUP!",
    "CAPS!",
    "AVSLUTA MENINGEN!"
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
    cont.innerHTML += lotto[Math.floor(Math.random() * lotto.length)];

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
            console.log(event);
            event.target.parentNode.classList.replace("lucka_stängd", "lucka_öppnad");
            event.target.classList.replace("lucka_stängd", "lucka_öppnad");
            this.onclick = "";
            popup.style.display = "block";
            set_popup_content(event.target.innerText);
        }
    }
}
