<?php

class Customer extends MY_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('customer_model');
    }

    function login($call = '') {
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
                $user = $this->customer_model->get_info_rule($where);
                $this->session->set_userdata('user_login', $user);
                $this->session->set_userdata('flash_message', 'Đăng nhập thành công');
                redirect(base_url($call));
            }
        }
        $this->data = array(
            'temp' => 'site/customer/login',
            'title' => 'Đăng nhập 4MENSHOP'
        );
        $this->load->view('site/shared/layout', $this->data);
    }

    function check_login() {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        $password = md5($password);
        if ($this->customer_model->check_login($username, $password))
            return true;
        $this->form_validation->set_message(__FUNCTION__, 'Tên đăng nhập hoặc mật không chính xác');
        return false;
    }

    function register() {
        $this->load->library('form_validation');
        $this->load->helper('form');

        //Nếu có dữ liệu post lên thì kiểm tra
        if ($this->input->post()) {
            $this->form_validation->set_rules('username', 'Tên đăng nhập', 'required|max_length[50]|callback_check_username');
            $this->form_validation->set_rules('password', 'Mật khẩu', 'required|max_length[50]');
            $this->form_validation->set_rules('repassword', 'Nhập lại mật khẩu', 'required|matches[password]');
            $this->form_validation->set_rules('name', 'Họ và tên', 'required');
            $this->form_validation->set_rules('email', 'Email', 'required|valid_email|callback_check_email');
            $this->form_validation->set_rules('phone', 'Số điện thoại', 'numeric|max_length[12]|min_length[9]');
        }
        //Nếu nhập liệu chính xác
        if ($this->form_validation->run()) {
            $username = $this->input->post('username');
            $password = $this->input->post('password');
            $fullname = $this->input->post('name');
            $email = $this->input->post('email');
            $birthday = $this->input->post('birthday');
            $address = $this->input->post('address');
            $phone = $this->input->post('phone');
            if ($this->input->post('gender') == 'male') {
                $gender = 1;
            } else {
                $gender = 0;
            }

            $data = array(
                'Username' => $username,
                'Password' => md5($password),
                'CustomerName' => $fullname,
                'Email' => $email,
                'Birthday' => $birthday,
                'Gender' => $gender,
                'Address' => $address,
                'Phone' => $phone
            );
 
            if ($this->customer_model->insert($data)) {
               
                $this->session->set_flashdata('message', 'Thêm mới dữ liệu thành công');
            } else {
                $this->session->set_flashdata('message', 'Không thể thêm dữ liệu');
            }
           redirect(base_url('customer/login'));
        }
        $this->data = array(
            'temp' => 'site/customer/register',
            'title' => 'Đăng kí tài khoản 4MENSHOP'
        );
        $this->load->view('site/shared/layout', $this->data);
    }

    //Kiểm tra username đã tồn tại hay chưa
    function check_username() {
        $username = $this->input->post('username');
        $where = array(
            'username' => $username
        );
        if ($this->customer_model->check_exists($where)) {
            $this->form_validation->set_message(__FUNCTION__, 'Tên đăng nhập đã tồn tại');
            return false;
        }

        return true;
    }

    function check_email() {
        $email = $this->input->post('email');
        $where = array(
            'email' => $email
        );
        if ($this->customer_model->check_exists($where)) {
            $this->form_validation->set_message(__FUNCTION__, 'Email đã tồn tại.');
            return false;
        }

        return true;
    }

    function logout() {
        if ($this->session->userdata('user_login')) {
            $this->session->unset_userdata('user_login');
            redirect(base_url());
        }
    }

    function account() {
        $this->data = array(
            'temp' => 'site/customer/account'
        );
        $this->load->view('site/shared/layout', $this->data);
    }

}
