function binarioDecimal(binario) {
    var decimal = 0,
        i = 0,
        resto;

    while (binario != 0) {
        resto = binario % 10;
        binario = Number.parseInt(binario / 10);
        decimal = decimal + resto * Math.pow(2, i);
        ++i;
    }

    return decimal;
}


var binario = prompt('Digite seu numero binario')
var decimal = binarioDecimal(binario);
document.writeln("O valor " + binario + " em binário é " +
    decimal + " em decimal.");