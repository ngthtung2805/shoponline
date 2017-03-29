<?php

class Product extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('product_model');
    }

    function index() {
        //Load thư viên phân trang
        $this->load->library('pagination');
        $total = $this->product_model->get_total();
        $config = array(
            'total_rows' => $total,
            'base_url' => base_url('admin/product/index'),
            'per_page' => 10,
            'uri_segment' => 4,
            'next_link' => '>>',
            'prev_link' => '<<',
             'first_link'=>'Đầu',
            'last_link'=>'Cuối'
        );
        $this->pagination->initialize($config);
        
        $segment=$this->uri->segment(4);
        $segment= intval($segment);
        $input = array(
            'limit' => array($config['per_page'], $segment)
        );
        
        $this->data = array(
            'message' => $this->session->flashdata('message'),
            'temp' => 'admin/product/index',
            'total' => $total,
            'list' => $this->product_model->get_list($input)
        );

        $this->load->view('admin/shared/layout', $this->data);
    }

}
