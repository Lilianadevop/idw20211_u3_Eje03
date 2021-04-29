
// Convierte de numeros a letras 
// Ejemplo:
// Entrada:13 salida:Thirteen(Trece)
// Para que se ejecute es necesario instalar number-to-words
/*
Como Instalar:
entrar a la carpeta donde esta el index
despues escribir: npm i number-to-words
*/
var converter = require('number-to-words');
console.log(converter.toWords(13));
/********************************************************/
// Convierte los numeros a letras como en los cheques
// Ejemplo:
// Entrada: 987.56 Salida: NOVECIENTOS OCHENTA Y SIETE 56/100 MXN
// Para que se ejecute es necesario instalar numalet
/*
Como Instalar:
entrar a la carpeta donde esta el index
despues escribir: npm i numalet
*/
var letra = require('numalet')();
console.log(letra(987.56));