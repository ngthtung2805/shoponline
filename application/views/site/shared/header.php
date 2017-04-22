<?php $user = $this->session->userdata('user_login'); ?>
<header id="header">
    <div class="header-top clearfix">
        <div class="container">
            <div class="row">
                <div id="header_logo" class="col-sm-2">
                    <a class="logo" href="" title="thoi trang nam"> 
                        <img src="public/site/img/logo.png" alt="4men" width="180" />
                    </a>
                </div>
                <div id="block_top_menu" class="sf-contener col-sm-10 clearfix ">
                    <div class="cat-title"><i class="fa fa-bars"></i> Menu </div>
                    <ul class="sf-menu clearfix menu-content">
                        <li>
                            <a href="" title="Trang chủ">Trang chủ</a>
                        </li>
                        <li>
                            <a href="product" title="Sản phẩm">Thời trang nam</a>
                        </li>
                        <li>
                            <a href="<?php echo promotion_link(); ?>" title="Giam gia">Khuyến mãi</a>
                        </li>
                        <li>
                            <a href="<?php echo featured_link();?>" title="Tin tuc thoi trang">Nổi bật</a>
                        </li>

                        <li> <a href="#" title="4men">Về 4MEN</a>
                            <ul>

                                <li> <a href="#" title="4men chinh sach">Chính sách</a>
                                    <ul>
                                        <li><a href="#" title="Chinh sach giao hang">Chính sách giao hàng</a>
                                        </li>
                                        <li><a href="#" title="Chinh sach doi hang">Chính sách đổi hàng</a>
                                        </li>
                                        <li><a href="#" title="Chinh sach khach vip">Chính sách khách vip</a>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bottom clearfix">
        <div class="container">
            <div id="search_block_top" class="clearfix">
                <form id="searchbox"  method="post">
                    <input class="search_query form-control" type="text" id="search_query_top" name="text" placeholder="Tìm kiếm" value="" />
                    <button type="button"  onclick="search()" name="submit" class="button-search"> <i class="fa fa-search"></i> </button>
                </form>
                <script type="text/javascript">
                    function search() {
                        var s = document.getElementById("search_query_top").value;
                        window.location = "index.php?c=product&a=searchproduct&search=" + s;

                    }
                </script>
            </div>

            <div class="shopping_cart clearfix">
                <a href="gio-hang.html" title="Giỏ hàng của bạn" rel="nofollow">
                    <b>Giỏ hàng</b> 

                    <span class="cartTopRightQuantity" style="font-weight: bold;">
                        (<?php echo empty($this->cart->contents()) ? 0 : $this->cart->total_items(); ?>)
                    </span>


                    <span class="ajax_cart_product_txt"> sản phẩm</span>
                </a><div class="cart_block block exclusive" style="display:none;"> 
                    <div class="block_content"> 
                        <div class="cart_block_list"> 
                            <?php if (empty($this->cart->contents())): ?>
                                <p class="cart_block_no_products">Bạn chưa chọn sản phẩm nào</p>
                            <?php endif; ?>
                            <dl class="products cartTopRightContent"> 
                                <?php foreach ($this->cart->contents() as $item): ?>
                                    <dt>

                                        <a href="<?php echo product_detail_link($item['id'], $item['name']) ?>" class="cart-images">
                                            <img widht="70" src="<?php echo product_img_url($item['option']['image']); ?>" height="70">
                                        </a>		
                                        <div class="cart-info">	
                                            <div class="product-name">	
                                                <span class="quantity-formated">	
                                                    <span class="quantity"><?php echo $item['qty']; ?></span>&nbsp;x&nbsp;	
                                                </span>			
                                                <a class="cart_block_product_name" title="<?php echo $item['name']; ?>" 
                                                   href="<?php echo product_link($item['id'], $item['option']['image']); ?>"><?php echo $item['name'] ?></a>	
                                            </div>			
                                            <span class="price"><?php echo format_price($item['price'] * $item['qty']); ?></span>		
                                        </div>		
                                        <span class="remove_link">
                                            <a href="cart/delete/<?php echo $item['id']; ?>" cart="132966" onclick="javascript:removeItemCart(this)"></a>
                                        </span>
                                    </dt> 
                                <?php endforeach; ?>
                            </dl> 
                            <div class="cart-prices cartTopRightTotal" style="display: block;">
                                <div class="cart-prices-line last-line">
                                    <span class="price cart_block_total ajax_block_cart_total">
                                        <?php echo format_price($this->cart->total()); ?>
                                    </span>
                                    <span class="pr">Tổng cộng</span>
                                </div>
                            </div>
                            <p class="cart-buttons cartTopRightButtons" style=""> 
                                <a id="button_order_cart" class="btn btn-default button button-small" href="" title="Gửi đơn hàng" rel="nofollow"> 
                                    <span> Gửi đơn hàng<i class="fa fa-chevron-right right"></i> 
                                    </span> 
                                </a> 
                            </p> 
                        </div> 
                    </div> 
                </div>
            </div>
            <div class="clearfix">
                <?php if (!isset($user)): ?>
                    <a href="customer/login">Đăng nhập</a> /
                    <a href="customer/register">Đăng kí</a>
                <?php else: ?>
                    Xin chào <strong> <?php echo $user->CustomerName; ?></strong> ! |
                    <a href="">Tài khoản</a> |
                    <a href="customer/logout">Đăng xuất</a>
                <?php endif; ?>
            </div>

        </div>
    </div>
</header>