//arreglo donde se encuentran las peliculas mas vistas en la actualidad
const peliAct = ['tt4154796', 'tt0499549', 'tt0120338', 'tt2488496', 'tt4154756',
		'tt0369610', 'tt6105098', 'tt0848228', 'tt2820852', 'tt2395427', 'tt1825683',
		'tt1201607', 'tt2527336', 'tt4881806', 'tt2294629'];

//arreglo de peliculas mas taquilleras en la historia
const peliHist = ['tt0031381', 'tt4154796', 'tt0499549', 'tt0076759', 'tt4154796',
		'tt0059742', 'tt0083866', 'tt0049833', 'tt0059113', 'tt2527336', 'tt0107290',
		'tt4154756', 'tt0073195', 'tt0070047', 'tt0110357'];

//arreglo con las series mas vistas
const series = ['tt0364845', 'tt6226232', 'tt5555260', 'tt0944947', 'tt1442437',
		'tt8111088', 'tt4574334', 'tt1520211', 'tt2372162', 'tt2861424'];

	//funcion que llama las peliculas por medio del fetch
function peliculasActualidad(data, x, section, nClase){
	var data = data;
	const enlace = document.createElement('a')
	const div = document.createElement('div');
	const art = document.createElement('article')
	const poster = document.createElement('img');
	const titulo = document.createElement('h2');
	const genero = document.createElement('p');
	const estreno = document.createElement('p');

	div.style.cursor = 'pointer'
	var seccion = document.getElementById(section);
	seccion.appendChild(enlace);
	enlace.setAttribute('href', '#'+section);

	poster.setAttribute('src', data.Poster);
	poster.setAttribute('width', '150px');
	poster.setAttribute('height', '194px')
	titulo.innerHTML = data.Title;
	genero.innerHTML = '<b>Genre: </b>' + data.Genre;
	estreno.innerHTML = data.Released;

	enlace.appendChild(div);
	div.appendChild(poster); div.appendChild(art);
	art.appendChild(titulo); art.appendChild(genero);
	art.appendChild(estreno);


	
	div.addEventListener('click', function(x){
		console.log(data);
	})

	//funcion para ver las caracteristicas de las peliculas seleccionadas
	enlace.addEventListener('click', function(x){
		document.getElementsByClassName('ver')[nClase].innerHTML = '';
		var imagen = document.createElement('img'),
			encabezado = document.createElement('div'),
			sinopsis = document.createElement('p'),
			rating = document.createElement('aside'),
			votos = document.createElement('h2'),
			premios = document.createElement('h4'),
			casting = document.createElement('p'),
			detalles = document.createElement('aside'),
			ciudad = document.createElement('p'),
			idioma = document.createElement('p'),
			estreno = document.createElement('p'),
			produccion = document.createElement('p'),
			nuevaSeccion = document.getElementById(section);
			volver = document.createElement('button');

		sinopsis.setAttribute('align', 'justify');

		nuevaSeccion.innerHTML = '';
		nuevaSeccion.style.height = 'auto';
		nuevaSeccion.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),
		rgba(0,0,0,0.8)),url(${data.Poster})`;
		nuevaSeccion.style.backgroundAttachment = 'fixed';
		nuevaSeccion.style.backgroundPosition = 'center';
		nuevaSeccion.style.color = 'white';
		nuevaSeccion.style.flexFlow = 'row wrap';
		nuevaSeccion.style.justifyContent = 'space-around';

		imagen.setAttribute('src', data.Poster);
		imagen.setAttribute('width', '180px');
		imagen.setAttribute('style', 'justify-content: end;')
		encabezado.innerHTML = `<h5>${data.Year}</h5><h2>${data.Title}</h2>
			<h3 style='border: inset gray; padding: 5px; text-align: center'>
			${data.Genre}</h3><br><h4 style='display: inline-block'>
			${data.Runtime}</h4><h4 style='position: relative; align-self:center;
			top:-18px'> 
			${data.Rated.slice(3, 5)}+<h4>`;
		encabezado.setAttribute('style', 'margin: 20px; border:none; width:auto;'+
			'flex-flow: column wrap; align-items: flex-start; background-color: transparent');
		
		rating.innerHTML = `<article style='float:left; margin: 0px 10px;
			text-align: center;'>
			<h2 style='margin-top: 0px; font-family: cursive;'>${data.imdbRating}</h2>
			<h5>${data.imdbVotes}</h5></article>
			<img src='imagenes/estrella.jpg' width=65px
			style='float:right'>`;
		rating.setAttribute('style', 'background-color: white; color: black;'
			+'margin:5px; border: inset aliceblue; box-shadow: 2px 5px 6px black;'+
			'border-radius: 5px');
		sinopsis.innerHTML ='<b>PLOT: <b>' + data.Plot + '<br>';
		premios.innerHTML =`<b>AWARDS: </b><img src='imagenes/oscar.png' 
		height='30px'><img src='imagenes/oscar.png' height='30px'>
		<img src='imagenes/oscar.png' height='30px'><br>${data.Awards}`;
		premios.style.padding = '20px';
		casting.innerHTML ='<b>CASTING: </b><br>' + data.Actors + '<br><br>';
		casting.style.padding = '20px';
		detalles.innerHTML = `<p>${data.Country}</p><p>${data.Language}</p>
			<p>${data.Production}</p><p>${data.Released}</p>`;
		ciudad.innerHTML = data.Country;
		idioma.innerHTML = data.Language;
		estreno.innerHTML = data.Released;
		produccion.innerHTML = data.Production;
		volver.innerHTML = 'Click to return';
		
		nuevaSeccion.appendChild(imagen);
		nuevaSeccion.appendChild(encabezado);
		nuevaSeccion.appendChild(rating); nuevaSeccion.appendChild(sinopsis);
		nuevaSeccion.appendChild(premios);nuevaSeccion.appendChild(casting); 
		nuevaSeccion.appendChild(detalles); nuevaSeccion.appendChild(volver);

		volver.addEventListener('click',function(){location.reload()}, true);}, 
		false) 
	//para verificar si la pelicula que busca esta entre las mejores
	var buscador = document.getElementById('buscar');
		
		buscador.addEventListener('input', function(){
			
		if(buscador.value[0] !== undefined){
		for(var i = 0; i < data.Title.length; i++){
			if(buscador.value[0].toLowerCase() === data.Title[i].toLowerCase()){
				break;
			}

			
		}
	
		if(data.Title.slice(i, buscador.value.length).toLowerCase() === buscador.value){
			var sectionBusqueda = document.getElementById('busqueda');
			sectionBusqueda.style.height = 'auto';
			sectionBusqueda.innerHTML = '<h3>This is your movie search?</h3>';
			sectionBusqueda.appendChild(enlace); enlace.appendChild(div);
			div.appendChild(poster); div.appendChild(art);
			art.appendChild(titulo); art.appendChild(genero);
			art.appendChild(estreno);
		}}
	}, false) 


}


//petch que llama las peliculas actuales
var nPeliActual = 1;
for(var i = 0; i < peliAct.length; i++){
fetch(`https://www.omdbapi.com/?apikey=9599534&i=${peliAct[i]}`)
	.then(res => res.json())
	.then(data => {
	peliculasActualidad(data, nPeliActual, 'peliculasActuales', 0);
	nPeliActual++;
	})
	.catch(err => console.log(err));
}

//fetch que llama las peliculas en la historia
var nPeliHistoricas = 1;
for(var i = 0; i < peliHist.length; i++){
fetch(`https://www.omdbapi.com/?apikey=9599534&i=${peliHist[i]}`)
	.then(res => res.json())
	.then(data => {
	peliculasActualidad(data, nPeliHistoricas, 'peliculasHistoricas', 1);
	nPeliHistoricas++;
	})
	.catch(err => console.log(err));
}

//fetch que llama a las series mas vistas
var nSeries = 1;
for(var i = 0; i < series.length; i++){
fetch(`https://www.omdbapi.com/?apikey=9599534&i=${series[i]}`)
	.then(res => res.json())
	.then(data => {
	// console.log(data);
	peliculasActualidad(data, nSeries, 'series', 2);
	nSeries++;
	})
	.catch(err => console.log(err));
}

//funcion para expandir el contenido deseado
function verMas(x, nClase){
	if(document.getElementById(x).style.height !== 'auto'){
		document.getElementById(x).style.height = 'auto';
		document.getElementsByClassName('ver')[nClase].innerHTML = 'See Less'
	} else {
		document.getElementById(x).style.height = '780px';
		document.getElementsByClassName('ver')[nClase].innerHTML = `See More 
		<img src="imagenes/flecha.png" height="8px">`;
	}
}

var nro = 1;
var nro2 = 1;
var noticias = document.getElementById('root');
//funcion para el slider de las noticias
function slideNoticias(n){
	if(n < 0){
		var slide_l = n * nro * 340;
		if(nro < 4){
			noticias.style.top = slide_l + 'px';
			nro++;
			nro2--;
		} else {
			console.log(n*nro);
			noticias.style.top = '0px';
			nro = 1;
			nro2 = 1;
		}
	}else{
		if(nro2 < 1){
			var slide_r = nro2 * 340; 
			noticias.style.top = slide_r + 'px';
			nro--;
			nro2++;
		} else {
			noticias.style.top = -340*3+'px';
			nro = 4;
			nro2 = -2;
			
		}
	}
	

}

setInterval(slideNoticias, 3000);