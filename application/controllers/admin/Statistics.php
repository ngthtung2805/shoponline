<?php

class Statistics extends MY_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('order_model');
    }

    function index() {
        $statistics = $this->input->get('statistics');
        if ($statistics == 'type') {
            $type = $this->input->get('filter_type');
            $list = $this->order_model->get_order_by_type($type);
            $totalSales = $this->order_model->get_total_sales_by_type($type);
        } else {
            $from = $this->input->get('from');
            $to = $this->input->get('to');
            $list = $this->order_model->get_order_by_period($from, $to);
            $totalSales = $this->order_model->get_total_sales_by_period($from, $to);
        }

        $this->data = array(
            'temp' => 'admin/statistics/index',
            'list' => $list,
            'totalSales' => $totalSales
        );
        $this->load->view('admin/shared/layout', $this->data);
    }

}
