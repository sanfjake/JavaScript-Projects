function Car_Function() {
    var Car_Output;
    var Colors = document.getElementById("Car_Input").value;
    var Color_String = " is a great car!";
    switch(Car) {
        case "Corvette":
            Car_Output = "Corvette" + Car_String;
            break;
        case "Mustang":
            Car_Output = "Mustang" + Car_String;
            break;
        case "Tesla":
            Car_Output = "Tesla" + Car_String;
            break;
        case "Nismo":
            Car_Output = "Nismo" + Car_String;
            break;
        case "Camaro":
            Car_Output = "Camaro" + Car_String;
            break;
        case "Cadillac":
             Car_Output = "Cadillac" + Car_String;
             break;
        case "Supra":
             Car_Output = "Supra" + Car_String;
              break;
              Color_Output = "Please enter a car exactly as written on the aboce list.";
                }
                document.getElementById("Output").innerHTML = Car_Output
}