/**
 * Realizar en JavaScript un programa, de nombre “merge”, que integre n ficheros en uno solo.
 * 
 * El programa se debe invocar de la siguiente forma
 * node merge.js <dest> <f1> <f2> .. <fn>
 * 
 * El programa debe crear un fichero <dest> concatenando los contenidos de <f1> a <fn>, siendo n un número variable de ficheros.
 */

var fs = require('fs');
var $file_dest = 'mergeFiles';
var $file_body = '';

if(process.argv.length < 4){
    console.log('Error arguments: syntax: "node merge.js <f1> <f2> ... <fn>');
    process.exit();
}

for(var i in process.argv){
    if(i < 2){ continue; }
    var text = "Contenido del archivo " + process.argv[i] + "\n";
    fs.writeFile(process.argv[i], text, function (err) {
        if (err) return console.log(err);
    });
}

fs.writeFile($file_dest, $file_body, function (err) {
    if (err) return console.log(err);
});

for(var i in process.argv){
    if(i < 2){ continue; }
    var file = process.argv[i];
    fs.readFile(
        file,
        function(err, data){
            fs.appendFile(
                $file_dest,
                data,
                function(err){
                    if(err) throw err;
                    console.log("Archivo combinado");
                }
            );
        }
    );
}   