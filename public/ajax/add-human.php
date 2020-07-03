<?php
require __DIR__ . '/../../vendor/autoload.php';

$response = ['status' => 'failed'];
$data = $_POST;

if (empty($data)) {
    $response['message'] = 'data was empty';
    echo json_encode($response);
    return false;
}
$data['barcode'] = $data['fname'] . ' ' . $data['lname'];
$addPerson = \Honest\Person::addPerson($data);

if ($addPerson) {
    $response['barcode'] = $data['barcode'];
    $response['status'] = 'success';
}

echo json_encode($response);
