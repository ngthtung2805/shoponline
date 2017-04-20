<?php

class Customer_model extends MY_Model {

    var $table = 'customer';
    var $key = 'CustomerID';

    function check_login($username, $password) {
        $where = array(
            'Username' => $username,
            'Password' => $password
        );
        if ($this->check_exists($where)) {
            return true;
        }
        
        return false;
    }

}

?>
