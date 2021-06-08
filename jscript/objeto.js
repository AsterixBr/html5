var hotel = {
    nome: 'Quay',
    quartos: 40,
    reservados: 25,
    academia: true,
    cehcaDisponibilidade: function() {
        return this.quartos - this.reservados;
    }
}

var total = (40)