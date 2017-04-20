<!--Hotest Product-->
<div class="container">
    <div class="heading heading-v1">
        <h2>Thời trang nam hot nhất</h2>
    </div>

    <!--=== Illustration v2 ===-->
    <div class="illustration-v2" style="margin-bottom: 60px">
        <div class="customNavigation margin-bottom-25">
            <a class="owl-btn prev rounded-x"><i class="fa fa-angle-left"></i></a>
            <a class="owl-btn next rounded-x"><i class="fa fa-angle-right"></i></a>
        </div>

        <ul class="list-inline owl-slider">
            <?php foreach ($listHottestProducts as $product):
                 $productLink = product_detail_link($product->ProductID, $product->ProductName);?>
            <li class="item">
                <div class="product-img">
                    <a href="<?php echo $productLink?>"><img style="width:265px; height: 345px" class="full-width img-responsive" src="<?php echo product_img_url($product->Image);?>" alt=""></a>
                    <a class="product-review" href="<?php echo $productLink?>">Xem chi tiết</a>
                    <a class="add-to-cart" href="<?php echo "cart/add/$product->ProductID"?>"><i class="fa fa-shopping-cart"></i>Thêm vào giỏ hàng</a>
                </div>
                <div class="product-description product-description-brd">
                    <div class="overflow-h margin-bottom-5">
                      
                            <h4 class="product-title"><a href="<?php echo $productLink?>"><?php echo $product->ProductName;?></a></h4>

                     
                        <div class="product-price">
                            <span class="title-price"><?php echo format_price($product->Price);?></span>
                        </div>
                    </div>
                
                </div>
            </li>
            <?php endforeach;?>
        </ul>
    </div>
    <!--=== End Illustration v2 ===-->
</div>
<!--End hostest product-->