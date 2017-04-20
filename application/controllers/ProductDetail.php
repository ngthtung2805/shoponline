<?php
class ProductDetail extends MY_Controller{
    public function __construct() {
        parent::__construct();
        $this->load->model('product_model');
    }
    function index($id){
        $product = $this->product_model->single($id);
        
        $this->load->model('category_model');
        $category = $this->category_model->get_parent_category($product->CategoryID);

        $this->data += array(
            'temp'=>'site/productdetail/index',
            'title'=> $product->ProductName,
            'product'=>$product,
            'hottestProducts'=>$this->product_model->get_hottest_products(3),
            'products'=>$this->product_model->get_product_by_category($product->CategoryID, 10),
            'category'=>$category
        );
        $this->load->view('site/shared/layout', $this->data);
    }
    
}

