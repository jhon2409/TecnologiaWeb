//ID CIUDAD: cobija 3919998
 
//url: api.openweathermap.org/data/2.5/weather?id=3919966&units=metric&appid=e317cdfde49f91c94afb80b04a9c6062
const requestURL ="https://api.openweathermap.org/data/2.5/weather?id=3919998&units=metric&appid=e317cdfde49f91c94afb80b04a9c6062";
const request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType ='json';
request.send();
//obteniendo los datos json
request.onload = function(){
    const clima_json= request.response;
    console.log(clima_json);
   // document.getElementById('tem-act').innerHTML=clima_json['main'].temp;
   MostrarInformacion(clima_json);
}
function MostrarInformacion(objJson)
{
    var header1= document.querySelector('header');
    var myh1= document.createElement('h1');
    var tema=document.createElement('h2');
    var min=document.createElement('h2');
    var max=document.createElement('h2');
    var hume=document.createElement('h2');
 
    myh1.textContent = objJson.name;
    tema.textContent='Temperatura Actual:' +objJson.main.temp+' C';
    min.textContent='Temperatura minima:' +objJson.main.temp_min+' C';
    max.textContent='Temperatura maxima:' +objJson.main.temp_max +' C';
    hume.textContent='Humedad:' +objJson.main.humidity +' %';
 
    header1.appendChild(myh1);
    header1.appendChild(tema);
    header1.appendChild(min);
    header1.appendChild(max);
    header1.appendChild(hume);
    
}