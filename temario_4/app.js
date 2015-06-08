var express = require('express');
var path = require('path');
var app = express();


// Marcamos el directorio de páginas 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Mostramos el codigo html de las preguntas en su respectiva carpeta en public
app.get('/preguntas', function(req, res)
{
	res.sendFile(path.join(__dirname+'/public/preguntas.html'));
});


app.get('/respuesta', function(req, res, next)
{
	var id_pregunta = req.query.id_pregunta;
	var respuesta =  req.query.respuesta.toLowerCase();

	var respuestaCorrecta1 = 'Cristobal Colón';
	var respuestaCorrecta2 = 'Lisboa';

	var html = "";
	var volver_atras = "<div><a href='/preguntas'>Volver</a></div>";

	if(id_pregunta === "1")
	{

		if(respuestaCorrecta1.toLowerCase() == respuesta)
		{
			html += "<h2>Respuesta Correcta!</h2>";
		}
		else
		{
			html += "<h2>Respuesta Incorrecta</h2>";
		}

			html += "El descubridor de América es ";
			html += respuestaCorrecta1;
			html += volver_atras;
			res.send(html);
	}
	if(id_pregunta === "2")
	{		
		if(respuestaCorrecta2.toLowerCase() == respuesta)
		{
			html += "<h2>Respuesta Correcta!</h2>";
		}
		else
		{
			html += "<h2>Respuesta Incorrecta</h2>";
		}
		
			html += "La capital de Portugal es ";
			html += respuestaCorrecta2;
			html += volver_atras;
			res.send(html);
	}
	else
	{
		next(new Error('Pregunta desconocida'));
	}
});

// Si entramos en la ruta raiz, accedemos a preguntas directamente
app.get('/', function(req, res)
{
	res.redirect('/preguntas');
});

//Middleware de error
app.use(function(err, req, res, next)
{
	res.send(err.toString());
	console.log('Error ' + req.params[0]);
});

app.listen(8000);
console.log('listening on port 8000');
