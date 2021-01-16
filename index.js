function sum() {
    const firstNum1 = document.getElementById("firstNum1").value;
    const secondNum2 = document.getElementById("secondNum2").value;
    const sum = parseInt(firstNum1) + parseInt(secondNum2);
    document.getElementById("result").innerHTML = sum;
    console.log(sum)
}
function multiple() {
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;
    const multiple = parseInt(Num1) * parseInt(Num2);
    document.getElementById("resultmul").innerHTML = multiple;
    console.log(multiple)
}

function bmi() {
    const Mass = document.getElementById("Mass").value;
    const Height = document.getElementById("Height").value;
    document.getElementById("resultbmi").innerHTML = parseInt(Mass) / (parseInt(Height * Height))
    console.log((parseInt(Height * Height)))
}

