<?php

class Pagination_library {

    var $CI;
    var $pagination;
    public $per_page = 20;

    function __construct() {
        $this->CI = &get_instance();
        $this->CI->load->library('pagination');
        $this->pagination = $this->CI->pagination;
    }

    function get_offset() {
        $page = intval($this->CI->input->get('page'));
        $page = ($page > 0) ? $page : 1;
        $offset = ($page - 1) * $this->per_page;
        return $offset;
    }

    function create_links($total, $url) {
        $config = $this->config($total, $url);
        $this->pagination->initialize($config);

        return $this->pagination->create_links();
    }

    function config($total, $url) {
        $config = array(
            'total_rows' => $total,
            'base_url' => $url,
            'per_page' => $this->per_page,
            'uri_segment' => 4,
            'next_link' => '>>',
            'prev_link' => '<<',
            'first_link' => 'Đầu',
            'last_link' => 'Cuối',
            'use_page_numbers' => TRUE,
            'query_string_segment' => 'page',
            'page_query_string' => TRUE
        );
        return $config;
    }

}

?>