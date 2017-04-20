<?php

class Login extends MY_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('account_model');
    }

    function index() {
        $this->load->library('form_validation');
        $this->load->helper('form');
        if ($this->input->post()) {
            $this->form_validation->set_rules('login', 'Đăng nhập', 'callback_check_login');
            if ($this->form_validation->run()) {
                $username = $this->input->post('username');
                $password = $this->input->post('password');
                $password = md5($password);
                $where = array(
                    'Username' => $username,
                    'Password' => $password
                );
                $user = $this->account_model->get_info_rule($where);
                $this->session->set_userdata('login', $user);
                $this->session->set_userdata('flash_message', 'Đăng nhập thành công');
                redirect(admin_url('home'));
            }
        }
        $this->load->view('admin/login/index');
    }

    function check_login() {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        $password = md5($password);
        $where = array(
            'Username' => $username,
            'Password' => $password
        );
        if ($this->account_model->check_exists($where)) {
            return true;
        }
        $this->form_validation->set_message(__FUNCTION__, 'Tên đăng nhập hoặc mật không chính xác');
        return false;
    }

}

?>