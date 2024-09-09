document.getElementById("firstP").innerHTML = "Primeiro Parágrafo";

function sum (){
    let num1 = parseFloat(document.getElementById("idNum1").value)
    let num2 = parseFloat(document.getElementById("idNum2").value)

    let result = num1 + num2

    document.getElementById("idRes").value = result

}