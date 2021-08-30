<?php 
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$genero = $_POST['genero'];

if( !empty($nombres) || !empty($apellidos) || !empty($email) || !empty($telefono) || !empty($genero) ) {
    
    $host = "localhost";
    $dbusername =  "root";
    $dbpassword =  "";
    $dbname = "usuariosoruro";

    $coon =  new mysqli($host,$dbusername,$dbpassword,$dbname);
    if(mysqli_connect_error()){
        die('connect error('.mysqli_connect_errno().')'.mysqli_connect_error() );
    }
    else {
        $SELECT = " SELECT telefono from usuario where telefono = ? limit 1";
        $INSERT = " INSERT INTO usuario (nombres,apellidos,email,telefono,genero) values(?,?,?,?,?)";
      
        $stmt = $coon->prepare($SELECT);
        $stmt ->bind_param( "i", $telefono);
        $stmt ->execute();
        $stmt ->bind_result($telefono);
        $stmt ->store_result();
        $rnum = $stmt->num_rows;
        if($rnum == 0){
            $stmt ->close();
            $stmt = $coon->prepare($INSERT);
            $stmt ->bind_param( "sssis", $nombres,$apellidos,$email,$telefono,$genero);
            $stmt ->execute();
            echo "REGISTRO COMPLETADO.";
        }
        else{
            echo "Alguien registro el numero.";
        }
        $stmt->close();
        $coon->close();
    }
}
 else {
     echo "todos los datos SON OBLIGATORIOS";
     die ();
 }
?>