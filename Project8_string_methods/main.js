function full_Sentence() {
    var part_1 = "You"; 
    var part_2 = "are a";
    var part_3 = "great person!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play make Jake a hard working man.";
    var Section = Sentence.slice(26,50);
    document.getElementById("Slice").innerHTML = Section;
}

let greeting = 'this will change the sentence to all upper case';
let greeting = greeting.toUpperCase();
document.write(text);

let text = "Mr. Blue has a blue house";
let position = text.search("Blue");
document.write(text)

function string_Method() {
    var x =182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var x = 12934.98769876;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

let num = 5.56789;
let n = num.toFixed();

let text = "Hello World!";
let result = text.valueOf();