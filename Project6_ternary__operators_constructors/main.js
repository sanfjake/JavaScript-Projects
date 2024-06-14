function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short.":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 18)? "You are too young to vote":"You are old enough"
    document.getElementById("Vote").innerHTML = Can_vote + " to vote. ";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehcile_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color= Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Eric drives a " +Erik.Vehicle_Color + "-colored" + Erik.Vehcile_Model + 
    " manufactured in " + Erik.Vehicle_Year
}

function thisFunction() {
    var Weight, Is_Healthy
    Weight = document.getElementById("Weight").value;
    Is_Healthy = (Weight < 180)? "You are to heavy to be healthy":"You are at a"
    document.getElementById("Weight").innerHTML = Is_Healthy + "healthy weight."
}

function Person (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last; 
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Smith", 45, "Green");
var myMother = new Person ("Debbie", "Smith", 44, "Brown")

function myId() {
    document.getElementById("People_ID")innerHTML = 
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_pooint = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
