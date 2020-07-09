<?php
require __DIR__ . '/../../vendor/autoload.php';

use Honest\Kitchen;
use Honest\Person;

$response = ['status' => 'failed'];
//$barcode = '038678561122';
$barcode = $_POST['barcode'];
$foodBarcode = $_POST['foodbarcode'];

if (empty($barcode) || empty($foodBarcode)) {
    $response['message'] = 'One of the barcodes was empty';
    echo json_encode($response);
    return false;
}

try {
    $person = new Person($barcode);
    $kitchen = new Kitchen();
    $food = $kitchen->getFoodName($foodBarcode);

    if ($kitchen->payForFood($person->getFullName(), $food)) {
        $response['status'] = 'success';
        $response['food'] = $food;
    } else {
        $response['message'] = 'Could not save to db';
    }

} catch (Exception $exception) {
    $response['message'] = $exception->getMessage();
} finally {
    echo json_encode($response);
}
