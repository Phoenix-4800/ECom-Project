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
                    $book = "INSERT INTO orders VALUE('$quantity','KARCHER HIGH PRESSURE WASHER K5','$name','$address','$pin','$mobile','$email')";
                    $bookRes = mysqli_query($connect , $book);
                    $update = "UPDATE items  SET qty = '$newQuant' WHERE name='KARCHERK5'";
                    $updateRes = mysqli_query($connect , $update);
                    echo "Qty : ".$quantity."<br>";
                    echo "Product : KARCHER HIGH PRESSURE WASHER K5<br>";
                    echo "Name : ".$name."<br>";
                    echo "Address : ".$address."<br>";
                    echo "Pin : ".$pin."<br>";
                    echo "Mobile : ".$mobile."<br>";
                    echo "Email : ".$email."<br>";
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