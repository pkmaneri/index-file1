function sum() {
    let firstNum1 = document.getElementById("firstNum1").value;
    let secondNum2 = document.getElementById("secondNum2").value;
    let  sum = parseInt(firstNum1) + parseInt(secondNum2)
    document.getElementById("result").innerHTML = sum
    console.log(sum)
}

