function sum() {
    const firstnum1 = document.getElementById("firstnum1").value;
    const secondNum2 = document.getElementById("secondNum2").value;
    const sum = parseInt(firstnum1) + parseInt(secondNum2);
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

