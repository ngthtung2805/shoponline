<?php

class Order_model extends MY_Model {

    var $table = 'order';
    var $key = 'OrderID';
    var $CI;

    function __construct() {
        parent::__construct();
        $this->CI = &get_instance();
    }

    /*
     * Lấy thông tin chi tiết đơn hàng
     * @param $id : mã đơn hàng
     * @return array: mảng đơn hàng (gồm chi tiết)
     */

    public function get_order_detail($id) {
        $order = $this->get_row($id);
        if ($order->CustomerID != 0) {
            $this->CI->load->model('customer_model');
            $customer = $this->CI->customer_model->single($order->CustomerID);
            $order->CustomerName = $customer->CustomerName;
            $order->Email = $customer->Email;
            $order->Phone = $customer->Phone;
        }
        //Get detail
        $option = array(
            'select' => 'orderdetail.*, product.ProductName',
            'join' => array(
                array('product', 'orderdetail.ProductID= product.ProductID', '')
            ),
            'where' => 'OrderID=' . $id
        );
        $this->CI->load->model('orderdetail_model');
        $details = $this->CI->orderdetail_model->get_all($option);

        $order->Details = $details;
        return $order;
    }

    //get order
    public function get_order($limit, $offset) {
        $input = array(
            'limit' => array($limit, $offset)
        );
        $orders = $this->get_all($input);
        $this->CI->load->model('customer_model');
        foreach ($orders as $row) {
            if ($row->CustomerID != 0) {
                $customer = $this->CI->customer_model->single($row->CustomerID);
                $row->CustomerName = $customer->CustomerName;
                $row->Email = $customer->Email;
                $row->Phone = $customer->Phone;
            }
        }
        return $orders;
    }

    private function where($type) {
        $this->CI->load->library('datetime_library');
        $where = array();
        switch ($type) {
            case 'today':
                $where = array('Date(OrderDate)' => date('Y-m-d'));
                break;
            case 'yesterday':
                $yesterday = $this->CI->datetime_library->get_yesterday();
                $where = array('Date(OrderDate)' => $yesterday);
                break;
            case 'thisweek':
                $week = $this->CI->datetime_library->get_current_week();
                $where = array(
                    'Date(OrderDate) <=' => $week['sunday'],
                    'Date(OrderDate) >=' => $week['monday']
                );
            case 'lastweek':
                $week = $this->CI->datetime_library->get_last_week();
                $where = array(
                    'Date(OrderDate) <=' => $week['sunday'],
                    'Date(OrderDate) >=' => $week['monday']
                );
                break;
            case 'thismonth':
                $month = $this->CI->datetime_library->get_current_month();
                $where = array(
                    'Date(OrderDate) <=' => $month['last'],
                    'Date(OrderDate) >=' => $month['first']
                );
                break;
            case 'lastmonth':
                $month = $this->CI->datetime_library->get_last_month();
                $where = array(
                    'Date(OrderDate) <=' => $month['last'],
                    'Date(OrderDate) >=' => $month['first']
                );
                break;
            case 'thisyear':
                $year = $this->CI->datetime_library->get_current_year();
                $where = array(
                    'Date(OrderDate) <=' => $year['last'],
                    'Date(OrderDate) >=' => $year['first']
                );
                break;
            case 'lastyear':
                $year = $this->CI->datetime_library->get_last_year();
                $where = array(
                    'Date(OrderDate) <=' => $year['last'],
                    'Date(OrderDate) >=' => $year['first']
                );
                break;
            default:
                $where = array();
                break;
        }
        return $where;
    }

    function get_order_by_type($type) {
        $this->CI->load->library('datetime_library');
        $where = $this->where($type);
        $input['where'] = $where;
        $orders = $this->get_all($input);
        $this->CI->load->model('customer_model');
        foreach ($orders as $row) {
            if ($row->CustomerID != 0) {
                $customer = $this->CI->customer_model->single($row->CustomerID);
                $row->CustomerName = $customer->CustomerName;
                $row->Email = $customer->Email;
                $row->Phone = $customer->Phone;
            }
        }
        return $orders;
    }

    function get_total_sales_by_type($type) {
        $where = $this->where($type);
        return $this->get_sum('Total', $where);
    }

    function get_order_by_period($start, $end) {
        $start = date('Y-m-d', strtotime($start));
        $end = date('Y-m-d', strtotime($end));
        $where = array(
            'Date(OrderDate) <=' => $end,
            'Date(OrderDate)>=' => $start
        );
        $input['where'] = $where;
        $orders = $this->get_all($input);
        $this->CI->load->model('customer_model');
        foreach ($orders as $row) {
            if ($row->CustomerID != 0) {
                $customer = $this->CI->customer_model->single($row->CustomerID);
                $row->CustomerName = $customer->CustomerName;
                $row->Email = $customer->Email;
                $row->Phone = $customer->Phone;
            }
        }
        return $orders;
    }

    function get_total_sales_by_period($start, $end) {
        $start = date('Y-m-d', strtotime($start));
        $end = date('Y-m-d', strtotime($end));
        $where = array(
            'Date(OrderDate) <=' => $end,
            'Date(OrderDate)>=' => $start
        );
        return $this->get_sum('Total', $where);
    }

}
