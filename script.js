document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('numberForm');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function(event) {
        // Previne o envio padrão do formulário
        event.preventDefault();

        // Converte os valores para número
        const valorA = parseFloat(campoA.value);
        const valorB = parseFloat(campoB.value);

        // Verifica se B é maior que A
        if (valorB > valorA) {
            resultadoDiv.textContent = 'Formulário válido! Parabéns! 🎉';
            resultadoDiv.className = 'resultado sucesso';
        } else {
            resultadoDiv.textContent = 'Formulário inválido. B deve ser maior que A. 😕';
            resultadoDiv.className = 'resultado erro';
        }
    });
});