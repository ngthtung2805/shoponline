<!-- The left -->
<div class='col-md-3 left'>
    <div class="box-left">
        <div class="title tittle-box-left">
            <h2> Danh mục sản phẩm </h2>
        </div>
        <div class="content-box"><!-- The content-box -->
            <ul id="category_menu" class="metismenu catalog-main" style="display:block;">
                <?php foreach ($categories as $row): ?>
                    <li>
                        <a href="<?php echo product_link($row->CategoryID, $row->CategoryName); ?>" aria-expanded="false">
                            <?php echo $row->CategoryName; ?>
                            <span class="fa plus-minus"></span>
                        </a>
                        <!-- lay danh sach danh muc con -->
                        <?php if (count($row->subs) > 1): ?>
                            <ul class="catalog-sub"> 
                                <?php foreach ($row->subs as $sub): ?>
                                    <li>
                                        <a href="<?php echo product_link($sub->CategoryID, $sub->CategoryName); ?>" title=""> 
                                            <?php echo $sub->CategoryName; ?>
                                        </a>
                                    </li>		

                                <?php endforeach; ?>

                            </ul>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>	    </div><!-- End content-box -->
    </div>
    <!-- The Support -->
    <div class="box-left">
        <div class="title tittle-box-right">
            <h2> Hỗ trợ trực tuyến </h2>
        </div>
        <div class="content-box">
            <div class='support'>

                <p>
                    <img style="margin-bottom:-3px" src="public/site/images/phone.png"> 01665761394 </p>

                <p>
                    <a rel="nofollow" href="mailto:ngthtung2805@gmail.com">
                        <img style="margin-bottom:-3px" src="public/site/images/email.png"> Email: ngthtung2805@gmail.com
                        </p>
                        <p>
                            <a rel="nofollow" href="skype:thanhtungctk38">
                                <img style="margin-bottom:-3px" src="public/site/images/skype.png"> Skype: thanhtungctk38			</a>
                        </p>	
            </div>			        </div>
    </div>
    <!-- End Support -->

    <!-- The news -->
    <div class="box-left">
        <div class="title tittle-box-right">
            <h2> Bài viết mới </h2>
        </div>
        <div class="content-box">
            <ul class='news'>
                <li>
                    <a href="news/view/4.html" title="Mỹ tăng cường không kích Iraq">
                        <img src="public/site/images/li.png">
                        Mỹ tăng cường không kích Iraq	                        </a>
                </li>
                <li>
                    <a href="news/view/3.html" title="Hà Nội: CSGT tìm người thân giúp cháu bé 8 tuổi đi lạc">
                        <img src="public/site/images/li.png">
                        Hà Nội: CSGT tìm người thân giúp cháu bé 8 tuổi đi lạc	                        </a>
                </li>
                <li>
                    <a href="news/view/2.html" title="Arsenal đồng ý bán Vermaelen cho Barcelona">
                        <img src="public/site/images/li.png">
                        Arsenal đồng ý bán Vermaelen cho Barcelona	                        </a>
                </li>
                <li>
                    <a href="news/view/1.html" title="Nhà lầu siêu xe hàng mã ế sưng, đồ chơi biển đảo hút khách">
                        <img src="public/site/images/li.png">
                        Nhà lầu siêu xe hàng mã ế sưng, đồ chơi biển đảo hút khách	                        </a>
                </li>
            </ul>
        </div>
    </div>		<!-- End news -->

    <!-- The Ads -->
    <div class="box-left">
        <div class="title tittle-box-right">
            <h2> Quảng cáo </h2>
        </div>
        <div class="content-box">
            <a href="">
                <img  src="public/site/images/ads.png" >
            </a>
            <hr>
            <a href="http://cntt.dlu.edu.vn" target="_blank">
                <img  src="public/site/images/itdlu-ads.png">
            </a>
               <hr>
             <a href="http://dammio.com" target="_blank">
                <img  src="public/site/images/dammio-ads.png">
            </a>
        </div>
    </div>
    <!-- End Ads -->

    <!-- The Fanpage -->
    <div class="box-left">
        <div class="title tittle-box-right">
            <h2> Fanpage </h2>
        </div>
        <div class="content-box">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdammiodotcom%2F&tabs=timeline&width=260&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=452453958426171" width="260" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
        </div>
    </div>
    <!-- End Fanpage -->

    <!-- The Fanpage -->
    <div class="box-left">
        <div class="title tittle-box-right">
            <h2> Thống kê truy cập </h2>
        </div>
        <div class="content-box">
            <center>
                <!-- Histats.com  START  (standard)-->
                <script type="text/javascript">document.write(unescape("%3Cscript src=%27http://s10.histats.com/js15.js%27 type=%27text/javascript%27%3E%3C/script%3E"));</script>
                <a href="http://www.histats.com" target="_blank" title="hit counter" ><script  type="text/javascript" >
                    try {
                        Histats.start(1, 2138481, 4, 401, 118, 80, "00011111");
                        Histats.track_hits();
                    } catch (err) {
                    }
                    ;
                    </script></a>
                <noscript><a href="http://www.histats.com" target="_blank"><img  src="http://sstatic1.histats.com/0.gif?2138481&101" alt="hit counter" border="0"></a></noscript>
                <!-- Histats.com  END  -->
            </center>                
        </div>
    </div>
    <!-- End Fanpage -->
</div>
<!-- End left -->