<div class="row">
    <?php $this->load->view('site/shared/left'); ?>
    <!-- The content -->
    <div class='col-md-9 content'> 
        <div class="clear pb20"></div>  

        <div class="clear pb20"></div>  
        <br>
        <div class="box-center"><!-- The box-center product-->
            <div class="tittle-box-center">
                <h2><?php echo $title; ?>&nbsp;&nbsp;</h2>
                <span class="badge"> <?php echo $totalRows; ?></span>
                <?php $id = $this->uri->segment(2); ?>
                <form class="form-inline" style="float:right" action="product" method="get">
                    <div class="form-group">
                        <label for="sel1">Sắp xếp</label>

                        <select class="form-control input-sm" id="order" name="order" style="height:26px" onchange="OrderProduct('<?php echo isset($id) ? $id : '' ?>')">
                            <option value="price-desc">Giá giảm dần </option>
                            <option value="price-asc">Giá tăng dần</option>
                            <option value="most-view">Xem nhiều nhất</option>
                        </select>
                        <script>
                            function OrderProduct(id) {
                                var val = document.getElementById("order").value;
                                if (id != '') {
                                    window.location = 'danhmuc/' + id + '?order=' + val;
                                } else {
                                    window.location = 'danhmuc?order=' + val;
                            }
                            }
                        </script>
                    </div>
                </form>
            </div>

            <div class="box-content-center product">
                <?php
                $i = 0;
                if (count($listProducts) == 0) {
                    echo "<h2 style='padding-left:20px'>Không có sản phẩm nào</h2>";
                } else {
                    foreach ($listProducts as $row):
                        $productLink = product_detail_link($row->ProductID, $row->ProductName);
                        if ($i % 5 == 0) {
                            echo '<div class="row">';
                        }
                        ?>
                        <div class='product_item item'>
                            <div class='product_img'>
                                <a  href="<?php echo $productLink; ?>">
                                    <img src="<?php echo product_img_url($row->Image); ?>" alt='<?php echo $row->ProductName; ?>'/>
                                </a>
                            </div>
                            <h3>
                                <a  href="<?php echo $productLink; ?>">
                                    <?php echo $row->ProductName; ?>                
                                </a>
                            </h3>
                            <p class='price'>
                                <?php if ($row->Discount > 0): ?>

                                    <?php echo format_price($row->Price * (1 - $row->Discount / 100)); ?>
                                    <span class="price_old"><?php echo format_price($row->Price); ?></span>

                                    <?php
                                else:
                                    echo format_price($row->Price);
                                endif;
                                ?>
                            </p>
                            <center>
                                <div class='raty' style='margin:10px 0px' id='9' data-score='4'></div>
                            </center>
                            <div class='action'>
                                <a class='button' href="cart/add/<?php echo $row->ProductID; ?>" title='Mua ngay'>Mua ngay</a>
                                <div class='clear'></div>
                            </div>
                        </div>
                        <?php
                        $i++;
                        if ($i % 5 == 0) {
                            echo '</div>';
                        }
                    endforeach;
                }
                ?>

                <div class='clear'></div>
                <div class="pagination">
                    <?php echo $pagination ?>
                </div>
            </div>
        </div>  

    </div>
    <!-- End content -->


    <!-- End right -->
    <div class="clear"></div>
</div>