document.write("10" + 5);

function my_Function() {
    document.getElementById("Test1") .innerHTML = 0/0;
}

function my_Function(){
document.getElementById("Test2") .innerHTML = isNaN('This is a string');
}

function my_Function() {
document.getElementById("Test3") .innerHTML = isNaN('007');
}

function my_Function(){
document.getElementById("Test4") .innerHTML = isNaN ('800')
}

document.write(2.55E400);

document.write(-3.7337E400);

document.write(15>5);

document.write(15>50);

console.log(2 + 2);

document.write(10 == 10);

document.write(3 == 11);

x = 10;
y = 10;
document.write(x === y);

a = 5;
b = 20;
document.write(a === b);



document.write(5 > 3 && 6 >4);

document.write(5 > 10 && 6 > 13);

document.write(3 > 1 || 6 > 3);

document.write(10 > 20 || 10 > 9);

function not_Function(){
    document.getElementById("Not").innerHTML = !(20 > 10);
}