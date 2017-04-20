<?php

class Product extends MY_Controller {

    private $per_page;

    public function __construct() {
        parent::__construct();
        $this->load->model('product_model');
        $this->load->model('category_model');
        $this->load->library('pagination_library');
        $this->per_page = $this->pagination_library->per_page;
    }

    function get_by_category($id = 0) {
        $offset = $this->pagination_library->get_offset();
       $input = array(
            'limit' => array($this->per_page, $offset),
            'where' => 'CategoryID =' . $id
        );
        $total = $this->product_model->total($input);
        $category = $this->category_model->single($id);
        $url = product_link($id, $category->CategoryName);
        $this->_default($total, $url, $category->CategoryName, $input);
    }

    function index() {
        $offset = $this->pagination_library->get_offset();
        $input = array(
            'limit' => array($this->per_page, $offset),
        );
        $total = $this->product_model->total($input);
        $url = 'product/all';
        $this->_default($total, $url, 'Thời trang nam', $input);
    }

    function _default($total, $url, $title, $input) {
        $this->data = array(
            'temp' => 'site/product/index',
            'title' => $title,
            'totalRows' => $total,
            'pagination' => $this->pagination_library->create_links($total, $url),
            'listProducts' => $this->product_model->get_all($input),
            'hottestProducts' => $this->product_model->get_hottest_products(5),
            'categories' => $this->category_model->get_categories()
        );
        $this->load->view('site/shared/layout', $this->data);
    }

}
