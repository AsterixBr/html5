var data = new Date(),
    diasemana, dia, nomemes, mes, ano, msgtermina;
diasemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
nomemes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
dia = diasemana[data.getDay()];
ndia = data.getDate();
mes = nomemes[data.getMonth()];
ano = data.getFullYear();

msgtermina = 'A oferta vai terminar : '
msgtermina += dia + ', dia ' + ndia + '<br> de ' + mes + ' de ' + ano;

var EscreverNoHTML = document.getElementById('promoção');
EscreverNoHTML.innerHTML = msgtermina;