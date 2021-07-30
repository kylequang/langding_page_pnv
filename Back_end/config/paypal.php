<?php
/**
 * PayPal Setting & API Credentials
 * Created by Raza Mehdi <srmk@outlook.com>.
 */

return [
    'client_id' => 'AXvLzyNkAcQXd7XuDkorskQP9O_A2I4RWGuzhtyzu5F2SHZJGUzgt4HHSs6nx0h4C-G7hdf0K2NwGSOn',
    'secret' => 'EE7JxClt5Q9c1LxCW8-hMGK1Giv5nlZBRlfDCI6_l60gkVjihikvi95dvqZami7Eb0sxfEo7VYYeBKnh',
    'settings' => array(
        'mode' => 'sandbox',
        'http.ConnectionTimeOut' => 1000,
        'log.LogEnabled' => true,
        'log.FileName' => storage_path() . '/logs/paypal.log',
        'log.LogLevel' => 'FINE'
    ),
];