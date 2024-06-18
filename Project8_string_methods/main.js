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