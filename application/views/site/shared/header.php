<?php $user = $this->session->userdata('user_login'); ?>
<!--

<link type="text/css" href="../js/jquery/autocomplete/css/smoothness/jquery-ui-1.8.16.custom.css" rel="stylesheet" />	
<script type="text/javascript" src="../js/jquery/autocomplete/jquery-ui-1.8.16.custom.min.js"></script>

<script type="text/javascript">
    $(function () {
        $("#text-search").autocomplete({
            source: "product/search_ac.html",
        });
    });
</script>-->
<div class='top'><!-- The top -->
    <div id="logo"><!-- the logo -->
        <a  href="" title="Học lập trình website với PHP và MYSQL">
            <img src="public/site/images/logo.png"  alt="Học lập trình website với PHP và MYSQL"/>
        </a>
    </div><!-- End logo -->

    <!--  load gio hàng -->
    <div id="cart_expand" class="cart"> 
        <a href="cart" class="cart_link">
            <b> Giỏ hàng</b> 
            (<span id="in_cart" style="font-weight: bold;">
                <?php echo empty($this->cart->contents()) ? 0 : $this->cart->total_items(); ?>
            </span>) sản phẩm
        </a> 

    </div>       
    <div id="search"><!-- the search -->
        <form method="get" action="product/search">
            <input type="text" id="text-search" name="key-search" value="" placeholder="Tìm kiếm sản phẩm..." class="ui-autocomplete-input" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true">
            <input type="submit" id="but" value="Tìm kiếm">
        </form>
    </div><!-- End search -->


    <div class='clear'></div><!-- clear float --> 
</div><!-- End top -->			   <!-- End box-header  -->

<!-- The box-header-->
<div id="menu"><!-- the menu -->
    <ul class="menu_top">
        <li><a href="">Trang chủ </a></li>
        <li><a href="product">Sản phẩm</a></li>
        <li><a href="<?php echo promotion_link();?>">Khuyến mãi</a></li>
        <li><a href="<?php echo featured_link();?>">Nổi bật</a></li>
        <li><a href="lien-he.html">Liên hệ</a></li>
        <div style="float:right">
            <?php if (isset($user)): ?>

                <li>Xin chào  <a href="dang-ky.html"> <?php echo $user->CustomerName; ?></a></li>
                <li><a href="customer/logout">Đăng xuất</a></li>

            <?php else: ?>
                <li><a href="customer/login">Đăng nhập</a></li>
                <li><a href="customer/register">Đăng ký</a></li>
            <?php endif; ?>
        </div>
    </ul>
    <div class="clear"></div>
</div><!-- End menu -->			   <!-- End box-header  -->
