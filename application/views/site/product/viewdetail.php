<div class="row">
    <?php $this->load->view('site/shared/left'); ?>
    <div class="col-md-9 content">
        <div class="box-center">
            <div class="tittle-box-center">
                <h2>Chi tiết sản phẩm</h2>
            </div>
            <div class="box-content-center product">
                <div class="row">
                    <div class="col-md-5">
                        <div class='product_view_img'>
                            <a href="<?php echo product_img_url($product->Image); ?>" class="jqzoom" rel='gal1'  title="triumph" >
                                <img  src="<?php echo product_img_url($product->Image); ?>" alt='Tivi LG 520' style="width:100%; height:100%">
                            </a>

                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class='product_view_content'>
                            <h1 style="color:#BD0103; margin:10px 0"><?php echo $product->ProductName; ?></h1>

                            <p class='option'>
                                Giá: <span class='product_price'><?php echo format_price($product->Price); ?></span> 
                            </p>

                            <p class='option'>
                                Danh mục: 
                                <a href="<?php echo product_link($category->CategoryID, $category->CategoryName) ?>" title="<?php echo $category->CategoryName; ?>">
                                    <b><?php echo $category->CategoryName; ?></b>    
                                </a>
                            </p>

                            <p class='option'>
                                Lượt xem: <b><?php echo $product->TotalView; ?></b> 
                            </p>
                            <p class='option'>
                                Size: <b><?php echo $product->Size; ?></b> 
                            </p>
                            Đánh giá &nbsp;
                            <span class='raty_detailt' style = 'margin:5px' id='9' data-score='4'></span> 
                            | Tổng số: <b  class='rate_count'>1</b>

                            <div class='action'>
                                <a class='button' style='float:left;padding:8px 15px;font-size:16px' href="cart/add/<?php echo $product->ProductID; ?>" title='Mua ngay'>Thêm vào giỏ hàng</a>
                                <div class='clear'></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class='clear' style='height:15px'></div>
                <center>
                    <script type="text/javascript">var switchTo5x = true;</script>
                    <script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
                    <script type="text/javascript">stLight.options({publisher: "19a4ed9e-bb0c-4fd0-8791-eea32fb55964", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>
                    <span class='st_facebook_hcount' displayText='Facebook'></span>
                    <span class='st_fblike_hcount' displayText='Facebook Like'></span>
                    <span class='st_googleplus_hcount' displayText='Google +'></span>
                    <span class='st_twitter_hcount' displayText='Tweet'></span>
                </center>  
                <div class='clear' style='height:10px'></div>
                <table width="100%" cellspacing="0" cellpadding="3" border="0" class="tbsicons">
                    <tbody>
                        <tr>
                            <td width="25%"><img alt="Phục vụ chu đáo" src="public/site/images/icon-services.png"> <div>Phục vụ chu đáo</div></td>
                            <td width="25%"><img alt="Giao hàng đúng hẹn" src="public/site/images/icon-shipping.png"><div>Giao hàng đúng hẹn</div></td>
                            <td width="25%"><img alt="Đổi hàng trong 24h" src="public/site/images/icon-delivery.png"> <div>Đổi hàng trong 24h</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="usual" id="usual1">
            <ul>
                <li><a title="Chi tiết sản phẩm" rel='tab2' href='javascript:void(0)' class="tab selected">Chi tiết sản phẩm</a></li>
                <li><a title="Video" rel='tab3' href='javascript:void(0)' class="tab">Video</a></li> 
                <li><a title="Hỏi đáp về sản phẩm" rel='tab4' href='javascript:void(0)' class="tab">Hỏi đáp về sản phẩm</a></li>         
            </ul>
        </div><!-- end  <div class="usual" id="usual1">-->

        <div class="usual-content">
            <div id="tab2" style="display: block;"> 
                <p>
                    B&agrave;i viết cho sản phẩm n&agrave;y đang được cập nhật ...</p>
                <!-- comment facebook -->
                <center>
                    <div id="fb-root"></div>
                    <script src="http://connect.facebook.net/en_US/all.js#appId=170796359666689&amp;xfbml=1"></script>
                    <div class="fb-comments" data-href="http://localhost/webphp/index.php/san-pham-Tivi-LG-520/9.html" data-num-posts="5" data-width="550" data-colorscheme="light"></div>
                </center>   
            </div>
            <div id="tab3" style="display: none;"> 
                <!-- the div chay video -->
                <div id='mediaspace' style="margin:5px;"></div>
            </div>

            <div id="tab4" style="display: none;"> 
                <div class='box-show-product'>
                    <!-- hiển thị danh sách comment và form comment -->
                    <div class="comments">
                        <div class="title"><h3>THẢO LUẬN CỦA KHÁCH HÀNG <span class="yellow">(0)</span></h3><h4>Ý kiến khách hàng về Sản phẩm Tivi LG 520</h4></div>
                        <br class="break">
                        <div class="reviews">
                            <div class="content">
                            </div>
                        </div>
                    </div>
                    <div class='clear'></div>	       


                    <style>
                        .error{
                            margin:15px 0px;
                        }
                    </style>
                    <form name='send_comment' id='show_box_comment' class="t-form form_action" method='post' action='http://localhost/webphp/comment/add.html'>
                        <table width="90%" cellspacing="0" cellpadding="0" border="0" style="margin:10px auto">
                            <tbody>
                                <tr>
                                    <td style='width:210px;padding-right:15px;vertical-align:top'>
                                        <input type="text" style="width:200px;" class='input' id="user_name" placeholder="Họ tên" value='' name="user_name">
                                        <div name="user_name_error" class="error"></div>
                                        <input type="text" style="width:200px;" id="user_email" class='input' placeholder="Email" value='' name="user_email">
                                        <div name="user_email_error" class="error"></div>
                                        <img id="imgsecuri"  src="http://localhost/webphp/captcha/three.html" style="margin-bottom: -6px;" _captcha="http://localhost/webphp/captcha/three.html" class="imgrefresh" >

                                        <input type="text"  class='input'   style="width:80px;" id="security_code" placeholder="Mã xác nhận" name="security_code">
                                        <div name="security_code_error" class="error"></div>
                                    </td>
                                    <td>
                                        <textarea id="content_comment" cols="50" rows="3" style='width:320px' class='input' placeholder='Nội dung phản hồi' name="content">
                                        </textarea>
                                        <div name="content_error" class="error"></div>
                                        <input type="hidden" name='product_id' value='9'>
                                        <input type="hidden" name='parent_id' id='comment_parent_id' value=''>
                                        <input type="submit" class="button button-border medium blue f" id=""   value="Gửi" name="_submit">
                                        <input type="reset" class="button button-border medium red f"  value='Nhập lại'>
                                        <div class='clear'></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>	       </div>
            </div>

        </div>


        <div class="box-center"><!-- The box-center product-->
            <div class="tittle-box-center">
                <h2>Sản phẩm cùng danh mục</h2>
                <div class="owl-navigation">
                    <div class="customNavigation">
                        <a class="owl-btn prev"><i class="fa fa-angle-left"></i></a>
                        <a class="owl-btn next"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div><!--/navigation-->
            </div>
            <div class="box-content-center product owl-carousel">
                <?php
                foreach ($products as $row):
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
                            <a class='button' href="cart/add/<?php echo $row->ProductID; ?>" title='Mua ngay'>Mua ngay</a>
                            <div class='clear'></div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <div class='clear'></div>
            </div>
        </div>	<!-- End box-center product-->	   
    </div>
</div>
    