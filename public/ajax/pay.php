<?php
require __DIR__ . '/../../vendor/autoload.php';

use Honest\Bar;
use Honest\Person;

$response = ['status' => 'failed'];
//$barcode = '038678561122';
$barcode = $_POST['barcode'];

if (empty($barcode)) {
    $response['message'] = 'barcode was empty';
    echo json_encode($response);
    return false;
}

try {
    $person = new Person($barcode);
    $bar = new Bar();
    $bar->payForDrink($person->getId());

    $response = [
        'status' => 'success',
        'leaderboard' => $bar->getLeaderboardPosition($person->getId()),
        'firstName' => $person->getFirstName()
    ];

} catch (Exception $exception) {
    $response['message'] = $exception->getMessage();
} finally {
    echo json_encode($response);
}
