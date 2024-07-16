Function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = [ "guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute", "Chelo"]
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var array_Pic = [];
    array_Pic[0] = "sleeping";
    array_Pic[1] = " playing";
    array_Pic[2] = " eating";
    array_Pic[3] = " purring";
    doccument.getElementById("Array").innerHTML = "In this picture, the array is " + array_Pic[3] + ".";
}