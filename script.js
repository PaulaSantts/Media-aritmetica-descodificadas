function calcularMedia() {
    // Obtendo os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const num3 = parseFloat(document.getElementById('numero3').value);
    const num4 = parseFloat(document.getElementById('numero4').value);
    const num5 = parseFloat(document.getElementById('numero5').value);

    // Calculando a média
    const media = (num1 + num2 + num3 + num4 + num5) / 5;

    // Exibindo o resultado
    document.getElementById('resultado').innerText = `A média aritmética é: ${media}`;
}