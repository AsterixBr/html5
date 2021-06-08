//Uma função simples
function helloWorld() {
    document.write('Olá Mundo!');
}

//Chamandoa função
helloWorld();

//Uma função que recebe parâmetros
function helloWorldName(nome) {
    return document.write('<br> Olá Mundo, meu nome é' + nome);
}

//chamando a função com argumento
helloWorldName('Alexandre');

//Vejamos uma função que retorna um valor numérico
function calculaAreaRetangulo(base, altura) {
    var area = base * altura;
    return area;
}

//Podemos chamar a função para atribuir valores a variáveis
var retangulo = calculaAreaRetangulo(16, 4);

//Exibir o resultado
document.write('<br> Área do retangulo é: ' + retangulo);

//Recebendo múltiplos valores
function calculaAreaVolume(altura, largura, profundidade) {
    var area = altura * largura;
    var volume = altura * largura * profundidade;
    var resultadoAreaVolume = [area, volume];
    return resultadoAreaVolume;
}