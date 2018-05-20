<?php
  session_start();

  $PSSW = "fulmicotone";
  
  if(isset($_POST['password'])) {
    $pssw = $_POST['password'];
    $_SESSION['auth'] = strcmp($pssw, $PSSW);
    echo $_SESSION['auth'];
  }

?>