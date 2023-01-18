var submitButton = document.getElementById("submit-button");

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");

var resultDiv = document.getElementById("result-div");
console.log(resultDiv);

submitButton.onclick=function(event){

    var operatorValue = operator.value;
    var resultOfOperation = 0;

    if(num1.value==="" || num2.value==="")
        return;

    switch(operator.value)
    {
        case "add":
           resultOfOperation = Number(num1.value)+Number(num2.value);
            break;

        case "sub":
            resultOfOperation = Number(num1.value)-Number(num2.value);
            break;

        case "mul":
            resultOfOperation = Number(num1.value)*Number(num2.value);
            break;

        case "div":
            resultOfOperation = Number(num1.value)/Number(num2.value);
            break;
    }

    event.preventDefault();
    resultDiv.innerHTML="Final Result: "+resultOfOperation;    
};