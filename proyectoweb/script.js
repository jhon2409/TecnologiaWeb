function iniciarMap(){
    var coord = {lat:-17.9723284 ,lng: -67.1090367};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}