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

function constant_function() {
    const Video_Game = {type: " Action", brand:"Xbox", color:"black"};
    Video_Game.color = "white";
    Video_Game.price = "$499";
    document.getElementById("Constant").innerHTML = "The cost of the" + Video_Game.type + "was" + Video_Game.price;

}

var = 34;
document.write(x);
{
    let x = 33;
    document.write("<br> + x");
}
document.write("<br> + x");

function pie() {
    return Math.PI;
}

let car = {
    make: "Ford" 
    model: "Bronco"
    trim: "Raptor"
    year: "2024"
    description : function(){
        return "The car is a " + this.year + this.color + this.make + this.model + this.trim;
    }
};