const header = document.querySelector("header");
const section = document.querySelector("section");
const requestURL =
  "https://jhon2409.github.io/TecnologiaWeb/JSONpra/ciudad.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
//conexion
request.responseType = "json";
request.send();
//funcion para la obtencion de los datos json

request.onload = function () {
  const ciudades_json = request.response;
  console.log(ciudades_json);

  //populateHeader(superHeroes);
 // showHeroes(superHeroes);
mostrarTitulo(ciudades_json);
mostrarCiudades(ciudades_json);


};

function mostrarTitulo(jsonObj)
{
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['titulo'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'pais: ' + jsonObj['pais:'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    const ciudades1 = jsonObj['ciudades'];
  
    for (var i = 0; i < ciudades1.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
     // const myPara2 = document.createElement('p');
    //const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      //nombre ciudad
      myH2.textContent = ciudades1[i].nombre;
      //año fundacion
      myPara1.textContent = 'fundado el: ' + ciudades1[i].fundacion;
     
      myPara3.textContent = 'lugareres turisticos:';
  
      const lugares = ciudades1[i].lugares_turisticos;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }