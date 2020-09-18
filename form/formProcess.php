<?php
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

 $name = test_input($_POST['nameID']);
 $email = test_input($_POST['emailID']);
 $text = test_input($_POST['msgID']);
 $business = test_input($_POST['businessID']);
  //upload data into DB
  $servername = "localhost";
  $username = "root";
  $password = "";
  $db = "form";
  // Create connection
  $conn = new mysqli($servername, $username, $password,$db);
  
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
      //End of get Last ID
  
      // Check extension
         // Insert record
         $query = "INSERT into form(Name,Busineess,Email,Message) VALUES('".$name.",".$business.",".$email.",".$text."')";
         if ($conn->query($query) === TRUE) {
          $printRes="New record created successfully";
      } else {
        $printRes= "Error: " . $query . "<br>" . $conn->error;
      } 
    }    
?>