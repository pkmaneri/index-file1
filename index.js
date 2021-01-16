function sum() {
    const firstNum1 = document.getElementById("firstNum1").value;
    const secondNum2 = document.getElementById("secondNum2").value;
    const sum = parseInt(firstNum1) + parseInt(secondNum2);
    document.getElementById("result").innerHTML = sum;
    console.log(sum)
}
function multiple() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const multiple = parseInt(num1) * parseInt(num2);
    document.getElementById("resultmul").innerHTML = multiple;
    console.log(multiple)
}

function bmi() {
    const mass = document.getElementById("mass").value;
    const height = document.getElementById("height").value;
    document.getElementById("resultbmi").innerHTML = parseInt(mass) / (parseInt(height * height))
    console.log(parseInt(mass) / (parseInt(height * height)))
}
function factorial(){
    let arr = [];
    const factorialNumber = document.getElementById("factorialNumber").value;
    let result =1
    for (let i = factorialNumber; i > 0; i--) {
        result=result*i;
        arr.push(i);
    }
    document.getElementById("resultfactorial").innerHTML= arr + " - " + result;
}

function naturalnumber() {
    const number = document.getElementById("number").value;
    const x = 10
    document.getElementById("x").innerHTML = x;

    for (let i = 1; i <= x; i++) {
        console.log(i);
    }

}