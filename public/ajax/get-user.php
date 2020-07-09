<?php
require __DIR__ . '/../../vendor/autoload.php';

use Honest\Person;

$response = ['status' => 'failed'];
//$barcode = '038678561122';
$barcode = $_POST['barcode'];

if (empty($barcode)) {
    $response['message'] = 'User barcode was empty';
    echo json_encode($response);
    return false;
}
$kitchen = new \Honest\Kitchen();

try {

    if ($kitchen->getFoodName($barcode) !== $kitchen::UNKNOWN) {
        throw new Exception('Wrong scanner bro');
    }

    $person = new Person($barcode);

    $response = [
        'status' => 'success',
        'firstName' => $person->getFirstName(),
        'barcode' => $barcode
    ];

} catch (Exception $exception) {
    $response['message'] = $exception->getMessage();
} finally {
    echo json_encode($response);
}
