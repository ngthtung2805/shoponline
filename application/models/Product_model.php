<?php
class Product_model extends MY_Model{
    var $table='product';
    var $key ='ProductID';
    function get_featured_products(){
        $option = array(
            'limit'=> array(10,0)
        );
        return $this->get_all($option);
    }
    function  get_lastest_products(){
        $option = array(
            'limit'=>array(10,0),
            'order'=>array('CreateDate','DESC')
        );
        return $this->get_all($option);
    }
    function get_hottest_products($limit = 10){
        $option = array(
            'limit'=>array($limit,0),
            'order'=>array('TotalView','DESC')
        );
        return $this->get_all($option);
    }
    function get_promotion_products(){
        $option = array(
            'where'=>'Discount > 0'
        );
        return $this->get_all($option);
    }
    function get_product_by_category($id, $limit, $offset=0){
        $option =array(
            'where'=>'CategoryID='.$id,
            'limit'=>array($limit, $offset)
        );
        return $this->get_all($option);
    }
}
?>
