var hotel = {
    nome: 'Quay',
    quartos: 40,
    reservados: 25,
    academia: true,
    checaDisponibilidade: function() {
        return this.quartos - this.reservados;
    }
}


var subResultado = document.getElementById('quartos');
subResultado.textContent += hotel.quartos;

//var subResultado = document.getElementById('reservados');
//subResultado.textContent += hotel.reservados;

function btnReserva() {
    hotel.reservados--;
    mostrar(hotel.reservados);
}

function mostrar(valor) {

    if (hotel.reservados > 0) {
        document.getElementById("reservados").innerHTML = valor;
    } else {
        document.getElementById("reservados").innerHTML = 'Não há Vagas';
    }
}