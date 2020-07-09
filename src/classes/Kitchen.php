<?php
namespace Honest;


class Kitchen
{

    const UNKNOWN = 'Unknown item :(';

    /**
     * @var Db
     */
    private $db;

    public function __construct()
    {
        $this->db = Db::instance();
    }

    public function getFoodName(string $barcode)
    {
        switch ($barcode) {
            case '0guachead0000':
                return 'Guachead';
            case '0donger000000':
                return 'Donger';
            case '0doubledonger':
                return 'Double Donger';
            default:
                return self::UNKNOWN;
        }
    }

    public function payForFood(string $personsName, string $foodName)
    {
        return $this->db->run('INSERT into consumption (`food`, `person`, `created_at`) VALUES (?, ?, now())', [$foodName, $personsName]);
    }

    public function getHistory()
    {
        return $this->db->run('SELECT * from consumption ORDER BY created_at desc')->fetchAll();
    }
}
