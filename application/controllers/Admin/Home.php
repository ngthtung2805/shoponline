<?php

class Home extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('order_model');
        $this->load->model('product_model');
        $this->load->model('category_model');
        $this->load->model('customer_model');
        $this->load->model('account_model');
    }

    function index() {
       // $this->load->library("Datetime_library");
       // pre($this->datetime_library->get_current_month());
                $totals = array(
            'order' => $this->order_model->total(),
            'product' => $this->product_model->total(),
            'category' => $this->category_model->total(),
            'customer' => $this->customer_model->total(),
            'employee' => $this->account_model->total()
        );
        $sales = array(
            'all'=>$this->order_model->get_total_sales_by_type('all'),
            'today'=>$this->order_model->get_total_sales_by_type('today'),
            'week'=>$this->order_model->get_total_sales_by_type('thisweek'),
            'month'=>$this->order_model->get_total_sales_by_type('thismonth'), 
            'year'=>$this->order_model->get_total_sales_by_type('thisyear')
        );
        $this->data = array(
            'temp' => 'admin/home/index',
            'totals' => $totals,
            'sales' => $sales
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

}
