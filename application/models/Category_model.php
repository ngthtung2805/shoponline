<?php

class Category_model extends MY_Model {

    var $table = 'category';
    var $key = 'CategoryID';

    function get_categories() {

        $cateOption = array(
            'where' => array('ParentID' => NULL)
        );

        $categories = $this->get_all($cateOption);
        foreach ($categories as $row) {
            $cateOption['where'] = array('ParentID' => $row->CategoryID);
            $subs = $this->get_all($cateOption);
            $row->subs = $subs;
        }
        return $categories;
    }

    function get_parent_category($id) {
      
        $category = $this->single($id );
        $category->Parent = $this->single($category->ParentID);
        return $category;
    }

}

?>