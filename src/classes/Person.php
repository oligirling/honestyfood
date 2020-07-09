<?php
namespace Honest;

class Person
{
    const BARCODE_LENGTH = 12;

    /* @var Db */
    private $db;

    protected $barcode = '';

    protected $firstName = '';

    protected $secondName = '';

    protected $drinks;

    protected $gender = '';

    protected $id;

    public function __construct(string $barcode)
    {
        if (strlen($barcode) !== self::BARCODE_LENGTH) {
            throw new \Exception('Invalid barcode. Given length was '.strlen($barcode).' expected '.self::BARCODE_LENGTH);
        }
        $this->setBarcode($barcode);
        $this->load();
    }

    public static function addPerson(array $data)
    {
        $db = Db::instance();
        return $db->run('INSERT INTO people (`barcode`, `first_name`, `last_name`) VALUES (?, ?, ?)', [
            $data['barcode'],
            $data['fname'],
            $data['lname'],
            ]
        );
    }

    private function load()
    {
        $this->db = Db::instance();
        $result = $this->db->run('SELECT * from people where barcode = ?', [$this->barcode])->fetch();
        $this->setId($result->id);
        $this->setFirstName($result->first_name);
        $this->setSecondName($result->last_name);
    }

    /**
     * @param string $barcode
     */
    public function setBarcode(string $barcode)
    {
        $this->barcode = $barcode;
    }

    /**
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    /**
     * @param string $firstName
     */
    public function setFirstName(string $firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * @return string
     */
    public function getSecondName(): string
    {
        return $this->secondName;
    }

    /**
     * @param string $secondName
     */
    public function setSecondName(string $secondName)
    {
        $this->secondName = $secondName;
    }

    /**
     * @return string
     */
    public function getFullName(): string
    {
        return $this->firstName . ' ' . $this->secondName;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getDrinks() : int
    {
        return $this->drinks;
    }

    /**
     * @param int $drinks
     */
    public function setDrinks(int $drinks)
    {
        $this->drinks = $drinks;
    }
}
