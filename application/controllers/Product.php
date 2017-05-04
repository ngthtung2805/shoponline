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

    function get_promotion_product() {
        $offset = $this->pagination_library->get_offset();
        $input = array(
            'limit' => array($this->per_page, $offset),
            'where' => 'Discount > 0'
        );
        $total = $this->product_model->total($input);
        $url = promotion_link();
        $this->_default($total, $url, 'Sản phẩm khuyến mãi', $input);
    }

    function get_featured_product() {
        $offset = $this->pagination_library->get_offset();
        $input = array(
            'limit' => array($this->per_page, $offset),
            'order' => array('TotalView' => 'DESC')
        );
        $total = $this->product_model->total($input);
        $url = featured_link();
        $this->_default($total, $url, 'Sản phẩm nổi bật', $input);
    }

    function index() {
        $offset = $this->pagination_library->get_offset();
        $input = array(
            'limit' => array($this->per_page, $offset),
        );
        $total = $this->product_model->total($input);
        $url = 'product';
        $this->_default($total, $url, 'Thời trang nam', $input);
    }

    //Xem chi tiết sản phẩm
    function view_detail($id) {
        $product = $this->product_model->single($id);

        $this->load->model('category_model');
        $category = $this->category_model->get_parent_category($product->CategoryID);

        //Cập nhật lượt xem
        $data = array(
            'TotalView' => $product->TotalView + 1
        );

        $this->product_model->update($product->ProductID, $data);
        $this->data += array(
            'temp' => 'site/product/viewdetail',
            'title' => $product->ProductName,
            'product' => $product,
            'hottestProducts' => $this->product_model->get_hottest_products(3),
            'products' => $this->product_model->get_product_by_category($product->CategoryID, 10),
            'category' => $category
        );
        $this->load->view('site/shared/layout', $this->data);
    }

    function search() {
        $key = $this->input->get('key-search');
        //$array = explode(' ', $key);
        $offset = $this->pagination_library->get_offset();
        $input = array(
            'limit' => array($this->per_page, $offset),
            'like' => array('ProductName',$key)
        );
       
        $total = $this->product_model->total($input);
        $url = 'product/search?key_search=' . $key;
        $this->_default($total, $url, 'Kết quả tìm kiếm với từ khóa: ' . $key, $input);
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
