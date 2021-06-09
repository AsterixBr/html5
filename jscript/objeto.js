var hotel = {
    nome: 'Quay',
    quartos: 40,
    reservados: 25,
    academia: true,
    cehcaDisponibilidade: function() {
        return this.quartos - this.reservados;
    }
}

var total = (40);
var reservado = (1);
var resultado = total - reservado;

var subResultado = document.getElementById('total');
subResultado.textContent += hotel.quartos;

var subResultado = document.getElementById('reservado');
subResultado.textContent += hotel.reservados;

var subResultado = document.getElementById('resultado');
subResultado.textContent -= resultado;