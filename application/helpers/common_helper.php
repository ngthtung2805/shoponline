<?php

function public_url($url = '') {
    return base_url('public/' . $url);
}

function admin_url($url = '') {
    return base_url('admin/' . $url);
}

function pre($list, $exit = true) {
    echo "<pre>";
    print_r($list);
    if ($exit) {
        die();
    }
}

function format_price($price) {
    return number_format($price, 0, ',', ',') . ' VNĐ';
}

function product_img_url($imgname) {
    return base_url('upload/product/' . $imgname);
}

function account_img_url($img_name) {
    return base_url('upload/account/' . $img_name);
}

function product_detail_link($id, $name) {
    $name = str_to_slug($name);
    return base_url("sanpham/$id-$name.html");
}

function product_link($id, $name) {
    $name = str_to_slug($name);
    return base_url("danhmuc/$id-$name");
}

function promotion_link(){
    return base_url('danhmuc/san-pham-khuyen-mai.html');
}

function str_to_slug($str) {
    $str = trim(mb_strtolower($str));
    $str = preg_replace('/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/', 'a', $str);
    $str = preg_replace('/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/', 'e', $str);
    $str = preg_replace('/(ì|í|ị|ỉ|ĩ)/', 'i', $str);
    $str = preg_replace('/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/', 'o', $str);
    $str = preg_replace('/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/', 'u', $str);
    $str = preg_replace('/(ỳ|ý|ỵ|ỷ|ỹ)/', 'y', $str);
    $str = preg_replace('/(đ)/', 'd', $str);
    $str = preg_replace('/[^a-z0-9-\s]/', '', $str);
    $str = preg_replace('/([\s]+)/', '-', $str);
    return $str;
}

?>
