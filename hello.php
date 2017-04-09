<?php
    $r = $_GET['name'];

    sleep(2);
        
    if (empty($r)) {
        header('HTTP1.1 500 Internal Server Error dayo');
    } else {
        print('Hello,' . $r . '!!');
    }