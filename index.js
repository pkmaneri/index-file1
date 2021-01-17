// creating a function to calculate sum
function sum() {
    // read first input value 
    const firstNum1 = document.getElementById("firstNum1").value;
    // read second input value
    const secondNum2 = document.getElementById("secondNum2").value;
    //  find result in sum
    const sum = parseInt(firstNum1) + parseInt(secondNum2);
    // write output value
    document.getElementById("result").innerHTML = sum;
    console.log(sum)
}
// creating a function to calculate multiple
function multiple() {
    // read first input value
    const num1 = document.getElementById("num1").value;
    // read second output value
    const num2 = document.getElementById("num2").value;
    //   find result in multiple
    const multiple = parseInt(num1) * parseInt(num2);
    // write output value
    document.getElementById("resultmul").innerHTML = multiple;
    console.log(multiple)
}
// creating a function to calculate multiple
function bmi() {
    // read first input value   
    const mass = document.getElementById("mass").value;
    // read second input value
    const height = document.getElementById("height").value;
    // write output value
    document.getElementById("resultbmi").innerHTML = parseInt(mass) / (parseInt(height * height))
    console.log(parseInt(mass) / (parseInt(height * height)))
}

// creating a function to calculate factorial 

function factorial() {
    // declaring an arr to store the indexes
    let arr = [];

    // read input value
    const factorialNumber = document.getElementById("factorialNumber").value;

    // declaring a integer variable to store final factorial value
    let result = 1

    // creating a loop, starting from the input value, till greater than 0, and decremeting
    // by 1
    for (let i = factorialNumber; i > 0; i--) {

        // reads the previous results value and multipling with index, 
        // and finally writing to result
        result = result * i;

        arr.push(i);
    }
    document.getElementById("resultfactorial").innerHTML = arr + " - " + result;
}
// creating a function to calculate natural number
function naturalnumber() {
    // read input value
    const number = document.getElementById("number").value;
    // declaring a natural number to store in final value
    const x = 10
    // write output value
    document.getElementById("x").innerHTML = x;
    // createing a loop, starting from the input value
    for (let i = 1; i <= x; i++) {
        console.log(i);
    }

}