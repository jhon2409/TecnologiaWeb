//APIKEY: e317cdfde49f91c94afb80b04a9c6062

//ID CIUDAD: cocha 3919985 cobija 3919998

//id oruro 3909234

//id departamento de oruro




//url: api.openweathermap.org/data/2.5/weather?id=3919966&units=metric&appid=e317cdfde49f91c94afb80b04a9c6062

const requestURL ="https://api.openweathermap.org/data/2.5/weather?id=3909233&units=metric&appid=e317cdfde49f91c94afb80b04a9c6062";

const request= new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType ='json';

request.send();

//obteniendo los datos json

request.onload = function(){

    const clima_json= request.response;

    console.log(clima_json);

   document.getElementById('tem-act').innerHTML=clima_json['main'].temp;

   document.getElementById('tem-act1').innerHTML=clima_json['main'].temp_max;

   document.getElementById('tem-act2').innerHTML=clima_json['main'].humidity;

   document.getElementById('tem-act3').innerHTML=clima_json['coord'].lon;

   document.getElementById('tem-act4').innerHTML=clima_json['coord'].lat;

   document.getElementById('tem-act5').innerHTML=clima_json['sys'].sunrise;

   MostrarInformacion(clima_json);

}

function MostrarInformacion(objJson)

{

    //var header1= document.querySelector('clima');

   // var myh1= document.createElement('h1');

   // var tema=document.createElement('h2');

   // var min=document.createElement('h2');

   // var max=document.createElement('h2');

  //  var hume=document.createElement('h2');

   // var pre=document.createElement('h2');




   // myh1.textContent = objJson.name;

   // tema.textContent='Temperatura Actual:' +objJson.main.temp+' C';

   // min.textContent='Temperatura minima:' +objJson.main.temp_min+' C';

   // max.textContent='Temperatura maxima:' +objJson.main.temp_max +' C';

   // hume.textContent='Humedad:' +objJson.main.humidity +' %';

   // pre.textContent='Temperatura maxima:' +objJson.coord.lon+' C';



    //header1.appendChild(myh1);

   // header1.appendChild(tema);

   // header1.appendChild(min);

   // header1.appendChild(max);

   // header1.appendChild(hume);

   // header1.appendChild(lon);

    

}