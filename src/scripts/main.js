document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();
        
        let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block'
    });
});
