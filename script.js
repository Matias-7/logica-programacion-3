function calculateFactorial() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    
    
    if (isNaN(input) || input === '') {
        resultDiv.textContent = 'Error: Por favor, ingrese un número válido.';
        return;
    }
    
    const number = parseInt(input);
    
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    
    resultDiv.textContent = `El factorial de ${number} es ${factorial}.`;
}

document.getElementById('numberInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        calculateFactorial();
    }
});