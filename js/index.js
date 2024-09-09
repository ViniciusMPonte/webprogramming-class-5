document.getElementById("firstP").innerHTML = "Calculadora";

function calculate (){
    let num1 = parseFloat(document.getElementById("idNum1").value)
    let num2 = parseFloat(document.getElementById("idNum2").value)
    
    let operator = document.getElementById("operator").value
    let result

    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2
            } else {
                result = 'Erro: divisão por zero'
            }
            break;
        default:
            result = 'Operação inválida'
    }

    

    document.getElementById("idRes").value = result

}