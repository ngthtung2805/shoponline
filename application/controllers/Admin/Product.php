<?php

class Product extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('product_model');
        $this->load->model('category_model');
    }

    function index() {
        //Kiểm tra lọc
        $id = $this->input->get('id');
        $id = intval($id);
        $input['where'] = array();
        if ($id > 0) {
            $input['where'] += array('ProductID' => $id);
        }

        $name = $this->input->get('name');
        if ($name) {
            $input['like'] = array('ProductName', $name);
        }

        $cateId = $this->input->get('category');
        $cateId = intval($cateId);
        if ($cateId > 0) {
            $input['where'] += array('CategoryID' => $cateId);
        }
        //Cài đặt phân trang
        $this->load->library('pagination_library');

        $per_page = $this->pagination_library->per_page;
        $offset = $this->pagination_library->get_offset();
        $total = $this->product_model->total($input);
        $input['limit'] = array($per_page, $offset);

        $url = base_url("admin/product/index?id=$id&name=$name&category=$cateId");
        $this->data = array(
            'message' => $this->session->flashdata('message'),
            'total' => $total,
            'temp' => 'admin/product/index',
            'list' => $this->product_model->get_all($input),
            'categories' => $this->category_model->get_categories(),
            'pagination' => $this->pagination_library->create_links($total, $url)
        );

        $this->load->view('admin/shared/layout', $this->data);
    }

    function delete($id) {
        $info = $this->product_model->single($id);
        if (!$info) {
            $this->session->set_flashdata('message', 'Không tồn tại sản phẩm này');
            redirect(admin_url('product'));
        }
        //Xóa sản phẩm
        $this->product_model->delete($id);
        //Xóa file ảnh của sản phẩm
        $product_link = product_img_url($info->Image);
        if (file_exists($product_link)) {
            unlink($product_link);
        }
        $this->session->set_flashdata('message', 'Xóa sản phẩm thành công');
        redirect(admin_url('product'));
    }

    function add() {
        $this->load->library('form_validation');
        $this->load->helper('form');
        //Nếu có dữ liệu post lên thì kiểm tra
        if ($this->input->post()) {
            $this->form_validation->set_rules('name', 'Tên sản phẩm', 'required|max_length[50]');
            $this->form_validation->set_rules('price', 'Giá', 'required|numeric');
            $this->form_validation->set_rules('quantity', 'Số lượng', 'required|numeric');
        }
        //Nếu nhập liệu chính xác
        if ($this->form_validation->run()) {
            $productname = $this->input->post('name');
            $categoryid = $this->input->post('category');
            $price = $this->input->post('price');
            $discount = $this->input->post('discount');
            $quantity = $this->input->post('quantity');
            $this->load->library('upload_library');
            $image = $this->upload_library->upload('./upload/product', 'image');
            $data = array(
                'ProductName' => $productname,
                'CategoryID' => $categoryid,
                'Price' => $price,
                'Discount' => $discount,
                'Quantity' => $quantity,
                'Image' => $image
            );

            if ($this->product_model->insert($data)) {
                $this->session->set_flashdata('message', 'Thêm mới dữ liệu thành công');
            } else {
                $this->session->set_flashdata('message', 'Không thể thêm dữ liệu');
            }
            redirect(admin_url('product'));
        }

        $this->data = array(
            'temp' => 'admin/product/add',
            'categories' => $this->category_model->get_categories()
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

    function edit($id) {
        $info = $this->product_model->single($id);
        $this->load->library('form_validation');
        $this->load->helper('form');
        if ($this->input->post()) {
            $this->form_validation->set_rules('name', 'Tên sản phẩm', 'required|max_length[50]');
            $this->form_validation->set_rules('price', 'Giá', 'required|numeric');
            $this->form_validation->set_rules('quantity', 'Số lượng', 'required|numeric');
        }
        //Nếu nhập liệu chính xác
        if ($this->form_validation->run()) {
            $productname = $this->input->post('name');
            $categoryid = $this->input->post('category');
            $price = $this->input->post('price');
            $discount = $this->input->post('discount');
            $quantity = $this->input->post('quantity');
            $this->load->library('upload_library');
            $image = $this->upload_library->upload('./upload/product', 'image');

            $data = array(
                'ProductName' => $productname,
                'CategoryID' => $categoryid,
                'Price' => $price,
                'Discount' => $discount,
                'Quantity' => $quantity
            );
            if ($image != NULL) {
                $data['Image'] = $image;
            }
            if ($this->product_model->update($id, $data)) {
                $this->session->set_flashdata('message', 'Chỉnh sửa dữ liệu thành công');
            } else {
                $this->session->set_flashdata('message', 'Không thể chỉnh sửa dữ liệu');
            }
            redirect(admin_url('product'));
        }
        $this->data = array(
            'temp' => 'admin/product/edit',
            'info' => $info,
            'categories' => $this->category_model->get_categories()
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

}
