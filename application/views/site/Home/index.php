<div class="row">
    <?php $this->load->view('site/shared/left'); ?>

    <!-- The content -->
    <div class='col-md-9 content'> 
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="public/site/images/slide-2-trang-chu-slide-2.jpg" alt="Chania" class="img-responsive" style="width:100%;height:230px;">
                </div>

                <div class="item">
                    <img src="public/site/images/slide-3-trang-chu-slide-3.jpg" alt="Chania" class="img-responsive" style="width:100%;height:230px;">
                </div>



            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="clear pb20"></div>  




        <!-- lay san pham moi nhat -->
        <div class="box-center"><!-- The box-center product-->
            <div class="tittle-box-center">
                <h2>Sản phẩm mới</h2>
                <div class="owl-navigation">
                    <div class="customNavigation">
                        <a class="owl-btn prev"><i class="fa fa-angle-left"></i></a>
                        <a class="owl-btn next"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div><!--/navigation-->
            </div>
            <div class="box-content-center product owl-carousel">
                <?php
                foreach ($listLastestProducts as $row):
                    $productLink = product_detail_link($row->ProductID, $row->ProductName);
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
                            <?php echo format_price($row->Price); ?>
                        </p>
                        <center>
                            <div class='raty' style='margin:10px 0px' id='9' data-score='4'></div>
                        </center>
                        <div class='action'>
                            <a class='button' href="cart/add/<?php echo $row->ProductID;?>" title='Mua ngay'>Mua ngay</a>
                            <div class='clear'></div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <div class='clear'></div>
            </div>
        </div>  

        <div class="box-center">
            <div class="tittle-box-center">
                <h2>Sản phẩm giảm giá</h2>
                <div class="owl-navigation">
                    <div class="customNavigation">
                        <a class="owl-btn prev"><i class="fa fa-angle-left"></i></a>
                        <a class="owl-btn next"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div><!--/navigation-->
            </div>
            <div class="box-content-center product owl-carousel"><!-- The box-content-center -->
                <?php
                foreach ($listPromotionProducts as $row):
                    $productLink = product_detail_link($row->ProductID, $row->ProductName);
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
                            <a class='button' href="cart/add/<?php echo $row->ProductID;?>" title='Mua ngay'>Mua ngay</a>
                            <div class='clear'></div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <div class='clear'></div>
            </div><!-- End box-content-center -->
        </div>	<!-- End box-center product-->	   
        <!-- lay san pham xem nhieu -->
        <div class="box-center"><!-- The box-center product-->
            <div class="tittle-box-center">
                <h2>Sản phẩm xem nhiều</h2>
                <div class="owl-navigation">
                    <div class="customNavigation">
                        <a class="owl-btn prev"><i class="fa fa-angle-left"></i></a>
                        <a class="owl-btn next"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div><!--/navigation-->
            </div>
            <div class="box-content-center product owl-carousel"><!-- The box-content-center -->
                <?php
                foreach ($listHottestProducts as $row):
                    $productLink = product_detail_link($row->ProductID, $row->ProductName);
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
                            <a class='button' href="cart/add/<?php echo $row->ProductID;?>" title='Mua ngay'>Mua ngay</a>
                            <div class='clear'></div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <div class='clear'></div>
            </div>
        </div>			
    </div>
   

    <!-- End right -->
    <div class="clear"></div>
</div>