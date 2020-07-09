<?php
require __DIR__ . '/../../vendor/autoload.php';

$response = ['status' => 'failed'];

$addPerson = \Honest\Db::resetConsumption();

if ($addPerson) {
    $response['status'] = 'success';
}

echo json_encode($response);
