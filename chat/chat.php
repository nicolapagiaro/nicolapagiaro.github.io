<?php
  session_start();

  $query = "";
  $queryTot = "";
  $MAX_LIMIT = 150;
  $response = array('status' => -1, 'error' => '', 'data' => [], 'count' => 0);

  // retriving data from POST
  if(!isset($_POST['dataInizio']) || !isset($_POST['dataFine']) || !isset($_POST['order']) || !isset($_POST['page'])) {
    
    $response['status'] = 1; // some errors
    $response['error'] = "Dati non passati";
    
    echo json_encode($response);
  }
  else {
    $dataI = strtotime($_POST['dataInizio']);
    $dataF = strtotime($_POST['dataFine']);
    $order = $_POST['order'];
    $page = $_POST['page'];
    
    if(empty($dataI) || empty($dataF)) {
      $query =  "SELECT * 
               FROM messaggi
               ORDER BY timestamp $order
               LIMIT $MAX_LIMIT";
      
      $queryTot = "SELECT count(*) 
               FROM messaggi
               ORDER BY timestamp $order
               LIMIT $MAX_LIMIT";
    }
    else {
       $query ="SELECT * 
             FROM messaggi
             WHERE timestamp >= $dataI AND timestamp <= $dataF
             ORDER BY timestamp $order
             LIMIT $MAX_LIMIT";
      
       $queryTot = "SELECT count(*) 
                   FROM messaggi
                   WHERE timestamp >= $dataI AND timestamp <= $dataF
                   ORDER BY timestamp $order
                   LIMIT $MAX_LIMIT";
    }
        
    $dir = 'sqlite:chat_only.db';
    $dbh = new PDO($dir);
    $ret = array();
    
    // query per prendere i dati
    foreach ($dbh->query($query) as $row)
    {
      array_push($ret, array('key_from_me' => $row['key_from_me'], 'data' => $row['data'], 'timestamp' => $row['timestamp']));
    }
    
    // query per il tot dei risultati
    foreach($dbh->query($queryTot) as $row) {
      $response['count'] = $row[0];
    }
    
    $response['status'] = 0; // tutto ok
    $response['data'] = $ret;

    echo json_encode($response);
  }

  $dbh = null;
?>