<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pressure Washer</title>
</head>
<body>
<?php    
    $servername = "localhost";
    $username  = "root";
    $password = "";
    $db = "inventory";
  

    $connect = mysqli_connect($servername, $username, $password, $db);

    if ($connect->connect_errno) {
        die('Connection error' . $connect->connect_errno);
    }

    $quantity = $_POST['quantity'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $pin = $_POST['pin'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];



        $querySel ="SELECT qty FROM items WHERE name = 'KARCHERK5' ";
        $queryResSel = mysqli_query($connect,$querySel);
        
        if(mysqli_num_rows($queryResSel)>0){
            while($row  = mysqli_fetch_assoc($queryResSel)){
                $q =  $row['qty'];

                if($q >= $quantity){
                    $newQuant = $q - $quantity;
                    $totAmt = $quantity*35500;
                    $book = "INSERT INTO orders VALUE('$quantity', '$totAmt','KARCHER HIGH PRESSURE WASHER K5','$name','$address','$pin','$mobile','$email')";
                    $bookRes = mysqli_query($connect , $book);
                    $update = "UPDATE items  SET qty = '$newQuant' WHERE name='KARCHERK5'";
                    $updateRes = mysqli_query($connect , $update);
                    echo "<p>Qty : ".$quantity."</p>";
                    echo "<p>Total Amount: Rs.".$totAmt."</p>";
                    echo "<p>Product : KARCHER HIGH PRESSURE WASHER K5</p>";
                    echo "<p>Name : ".$name."</p>";
                    echo "<p>Address : ".$address."</p>";
                    echo "<p>Pin : ".$pin."</p>";
                    echo "<p>Mobile : ".$mobile."</p>";
                    echo "<p>Email : ".$email."</p>";
                }
                else{
                    echo "The quantity specified is not available!!";
                }
            }
        }

        if($queryResSel===false){
            echo "<p>ERROR ERROR ERROR</p>";
        }
?>
</body>

<style>
    body{
    background: rgb(34, 33, 33);
    margin-left: 20px;
    outline: white;
    font-family:sans-serif;
    color: rgb(77, 130, 143);

}
</style>
</html>