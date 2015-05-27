/**
 * Dado el siguiente programa JavaScript que implementa la agenda de telefonos:
 * function agenda (titulo, inic) {
 * var _titulo = titulo;
 * var _contenido = inic;
 *
 * return {
 *   titulo: function()                    { return _titulo; },
 *   meter:  function(nombre, tf) { _contenido[nombre]=tf; },
 *   tf:     function(nombre)         { return _contenido[nombre]; },
 *   borrar: function(nombre)     { delete _contenido[nombre]; },
 *   toJSON: function()              { return JSON.stringify(_contenido);}
 * }
 * }
 * var amigos = agenda ("Amigos",
 *            { Pepe: 113278561,
 *              José: 157845123,
 *              Jesús: 178512355
 *            });
 * 
 * Añadir un método listar() al cierre agenda(..) {...} que liste por consola cada par "nombre, tf" 
 * en una línea, de forma que al listar la agenda amigos generase:
 *
 * "Pepe, 113278561 \nJosé, 157845123 \nJesús: 178512355 \n"
 
 * incluir ademas una última instrucción en el programa que liste la agenda amigos por 
 * consola utilizando el nuevo método listar.
 */

function agenda (titulo, inic) {
  var _titulo = titulo;
  var _contenido = inic;
 
  return {
    titulo: function() { return _titulo; },
    meter:  function(nombre, tf) { _contenido[nombre]=tf; },
    tf:     function(nombre) { return _contenido[nombre]; },
    borrar: function(nombre) { delete _contenido[nombre]; },
    toJSON: function() { return JSON.stringify(_contenido); },
    countRow: function(obj){
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return parseInt(size);
    },
    listar: function(){ 
        $return = "********************\n";
        $return += "*      AGENDA      *\n";
        $return += "********************\n";

        if(this.countRow(_contenido) === 0)
            return "No hay usuario en su agenda";

            $return += "Nombre,\tTeléfono\n";
        for(var i in _contenido)
            $return += i+",\t"+_contenido[i]+"\n";
            
        return $return;
    }
  };
}

var amigos = agenda ("Amigos", { Pepe: 113278561, José: 157845123, Jesús: 178512355 });

console.log(amigos.listar());