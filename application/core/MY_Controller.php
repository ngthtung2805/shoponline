<?php

class MY_Controller extends CI_Controller {

    //Biến gửi dữ liệu sang view
    public $data = array();

    function __construct() {
        parent::__construct();

        $controller = $this->uri->segment(1);
        switch ($controller) {
            case 'admin': {
                    //Xử lý dữ liệu khi truy cập vào admin
                    
                    $this->check_login();
                    break;
                }
            default: {
                   
                }
        }
    }

    //Kiểm tra trạng thái đăng nhập của admin
    private function check_login() {
        $controller = $this->uri->segment(2);
        $controller = strtolower($controller);
        $login = $this->session->userdata('login');
        if (!$login && $controller != 'login') {
            redirect(admin_url('login'));
        }
        if ($login && $controller == 'login') {
            redirect(admin_url('home'));
        }
    }

}
?>

