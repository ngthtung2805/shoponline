<?php

class Home extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('product_model');
    }

    function index() {
        $this->data += array(
            'temp' => 'site/home/index',
            'title'=> '4MENSHOP Thương hiệu thời trang nam giá rẻ',
            'listFeaturedProducts' => $this->product_model->get_featured_products(),
            'listLastestProducts' => $this->product_model->get_lastest_products(),
            'listHottestProducts' => $this->product_model->get_hottest_products(),
            'listPromotionProducts' => $this->product_model->get_promotion_products()
        );

        $this->load->view('site/shared/layout', $this->data);
    }

}

?>