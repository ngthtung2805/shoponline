<?php

class Category extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('category_model');
    }

    function index() {
        $input = array(
            'select' => 'Category.*,Parent.CategoryName as ParentName',
            'join' => array(
                'Category as Parent',
                'Category.ParentID = Parent.CategoryID',
                'left'
            )
        );

        $this->data = array(
            'message' => $this->session->flashdata('message'),
            'temp' => 'admin/category/index',
            'total' => $this->category_model->total(),
            'list' => $this->category_model->get_all($input)
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    function add() {
        $this->load->library('form_validation');
        $this->load->helper('form');

        //Nếu có dữ liệu post lên thì kiểm tra
        if ($this->input->post()) {
            $this->form_validation->set_rules('categoryname', 'Tên danh mục', 'required|max_length[50]');
        }
        //Nếu nhập liệu chính xác
        if ($this->form_validation->run()) {
            $categoryname = $this->input->post('categoryname');
            $parentid = $this->input->post('parent');
            $description = $this->input->post('description');

            $data = array(
                'CategoryName' => $categoryname,
                'ParentID' => $parentid,
                'Description' => $description
            );
            if ($this->category_model->insert($data)) {
                $this->session->set_flashdata('message', 'Thêm mới dữ liệu thành công');
            } else {
                $this->session->set_flashdata('message', 'Không thể thêm dữ liệu');
            }
            redirect(admin_url('category'));
        }
        $this->data = array(
            'temp' => 'admin/category/add',
            'list' => $this->category_model->get_all()
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    function delete() {
        $id = $this->uri->segment(4);
        $id = intval($id);
        $info = $this->category_model->single($id);
        if (!$info) {
            $this->session->set_flashdata('message', 'Không tồn tại danh mục này');
            redirect(admin_url('category'));
        }
        $this->category_model->delete($id);
        $this->session->set_flashdata('message', 'Xóa danh mục thành công');
        redirect(admin_url('category'));
    }

    //Hàm chỉnh sửa thông tin account
    function edit() {
        $this->load->library('form_validation');
        $this->load->helper('form');
        $id = $this->uri->segment(4);
        $id = intval($id);

        $info = $this->category_model->single($id);

        if ($this->input->post()) {
            $this->form_validation->set_rules('categoryname', 'Tên danh mục', 'required|max_length[50]');
        }
//         
        //Nếu nhập liệu chính xác
        if ($this->form_validation->run()) {
            $categoryname = $this->input->post('categoryname');
            $parentid = $this->input->post('parent');
            $description = $this->input->post('description');
            $data = array(
                'CategoryName' => $categoryname,
                'ParentID' => $parentid,
                'Description' => $description
            );
            if ($this->category_model->update($id, $data)) {
                $this->session->set_flashdata('message', 'Chỉnh sửa dữ liệu thành công');
            } else {
                $this->session->set_flashdata('message', 'Không thể thêm dữ liệu');
            }
            redirect(admin_url('category'));
        }

        $this->data = array(
            'list' => $this->category_model->get_all(),
            'temp' => 'admin/category/edit',
            'info' => $info
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

}

?>