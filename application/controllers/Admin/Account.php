<?php

class Account extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('account_model');
    }

    /*
     * Lấy danh sách account
     */

    function admin() {
        $option = array(
            'where' => 'RoleID =1'
        );

        $this->data = array(
            'temp' => 'admin/account/admin',
            'list' => $this->account_model->get_all($option),
            'total' => $this->account_model->total($option),
            'message' => $this->session->flashdata('message')
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    function user() {
        $option = array(
            'where' => 'RoleID =2'
        );
        $this->data = array(
            'temp' => 'admin/account/user',
            'list' => $this->account_model->get_all($option),
            'total' => $this->account_model->total($option)
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    function role() {
        $this->load->model('role_model');
        $this->data = array(
            'temp' => 'admin/account/role',
            'list' => $this->permission_model->get_all(),
            'total' => $this->permission_model->total()
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    function add() {
        $this->load->library('form_validation');
        $this->load->helper('form');

        //Nếu có dữ liệu post lên thì kiểm tra
        if ($this->input->post()) {
            $this->form_validation->set_rules('username', 'Tên đăng nhập', 'required|max_length[50]|callback_check_username');
            $this->form_validation->set_rules('password', 'Mật khẩu', 'required|max_length[50]');
            $this->form_validation->set_rules('repassword', 'Nhập lại mật khẩu', 'required|matches[password]');
            $this->form_validation->set_rules('fullname', 'Họ và tên', 'required');
            $this->form_validation->set_rules('email', 'Email', 'required|valid_email|callback_check_email');
            $this->form_validation->set_rules('phone', 'Số điện thoại', 'numeric|max_length[12]|min_length[9]');
        }
        //Nếu nhập liệu chính xác
        if ($this->form_validation->run()) {
            $username = $this->input->post('username');
            $password = $this->input->post('password');
            $fullname = $this->input->post('fullname');
            $email = $this->input->post('email');
            $birthday = $this->input->post('birthday');
            $address = $this->input->post('address');
            $phone = $this->input->post('phone');
            if ($this->input->post('gender') == 'male') {
                $gender = 1;
            } else {
                $gender = 0;
            }
            if ($this->input->post('role')=='admin') {
                $role = 1;
            } else {
                $role = 2;
            }
            $this->load->library('upload_library');
            $image= $this->upload_library->upload('./upload/account','image');
            $data = array(
                'RoleID' => $role,
                'Username' => $username,
                'Password' => md5($password),
                'Name' => $fullname,
                'Email' => $email,
                'Birthday' => $birthday,
                'Gender' => $gender,
                'Address' => $address,
                'Phone' => $phone,
                'Image'=>$image
            );
          
            if ($this->account_model->insert($data)) {
                $this->session->set_flashdata('message', 'Thêm mới dữ liệu thành công');
            } else {
                $this->session->set_flashdata('message', 'Không thể thêm dữ liệu');
            }
            redirect(admin_url('account/admin'));
        }
        $this->data = array(
            'temp' => 'admin/account/add'
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    //Kiểm tra username đã tồn tại hay chưa
    function check_username() {
        $username = $this->input->post('username');
        $where = array(
            'username' => $username
        );
        if ($this->account_model->check_exists($where)) {
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
        if ($this->account_model->check_exists($where)) {
            $this->form_validation->set_message(__FUNCTION__, 'Email đã tồn tại.');
            return false;
        }

        return true;
    }

    //Hàm chỉnh sửa thông tin account
    function edit() {
        $this->load->library('form_validation');
        $this->load->helper('form');
        $id = $this->uri->segment(4);
        $id = intval($id);
        $info = $this->account_model->single($id);
        if (!$info) {
            $this->session->set_flashdata('message', "Không tồn tại tài khoản này");
            redirect(admin_url('account/admin'));
        }
        $this->data = array(
            'temp' => 'admin/account/edit',
            'info' => $info
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    function delete() {
        $id = $this->uri->segment(4);
        $id = intval($id);
        $info = $this->account_model->single($id);
        if (!$info) {
            $this->session->set_flashdata('message', 'Không tồn tại tài khoản này');
            redirect(admin_url('account/admin'));
        }
        $this->account_model->delete($id);
        $this->session->set_flashdata('message', 'Xóa tài khoản thành công');
        redirect(admin_url('account/admin'));
    }

    function logout() {
        if ($this->session->userdata('login')) {
            $this->session->unset_userdata('login');
            redirect(admin_url('login'));
        }
    }

}
?>

