/**
 * Explicación de la tarea
 * 
 * Realizar en JavaScript para node.js un programa que saque por consola
 * 
 * 1) El número PI con ocho decimales
 * 2) Dos línea en blanco
 * 3)  La ristra de caracteres UNICODE
 *      -> \u55e8\uff0c\u4f60\u597d\u5417
 */

var numeroPi = Math.PI;
var string = "Número PI con ocho decimales => " + numeroPi.toFixed(8);
string += "\n\n";
string += "Carácteres unicode: \u55e8\uff0c\u4f60\u597d\u5417";
console.log(string);