<!--=== Login ===-->
<div class="log-reg-v3" style="margin-top: 50px">
    <div class="container">
        <div class="row">
            <div class="col-md-7 md-margin-bottom-50">
                <h2 class="welcome-title">Chào mừng đến với <strong> 4MENSHOP </strong> </h2>
                <div id="cmsinfo_block">
                    <div class="content shipping margin-bottom-20">
                        <p>
                            <strong>Miến phí vận chuyển cho đơn hàng trên 1.000.000 VNĐ</strong>
                        </p>
                        <ul>
                            <li class="icon_check">Giao hàng và thu tiền tận nơi</li>
                            <li class="icon_check">Chuyển khoản và giao hàng</li>
                            <li class="icon_check">Mua hàng tại shop</li>
                        </ul>
                    </div>

                    <div class="content support">
                        <p><strong>Gọi ngay cho chúng tôi khi bạn có thắc mắc</strong>
                        </p>
                        <ul>
                            <li class="icon_check"><strong class="big npl">0868.044.644 </strong>
                            </li>
                            <li class="icon_check"><strong class="big npl">0868.444.644 </strong>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

            <div class="col-md-5">
                <?php $call = $this->uri->segment(3);?>
                <form id="sky-form1" class="log-reg-block sky-form" style="" action="customer/login/<?php echo $call; ?>" method="post">
                    <h2>Đăng nhập</h2>

                    <div class="row">
                        <label class="col-lg-4" for="param_username">Tên đăng nhập</label>
                        <div class="input login-input col-lg-6">
                            <input id ="param_username" type="text" name="username" class="form-control" value="<?php echo set_value('username') ?>">
                            <div class="clear error" name="username_error"><?php echo form_error('username') ?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_password">Mật khẩu</label>
                        <div class="input login-input col-lg-8">
                            <input id="param_password" type="password"  name="password" class="form-control" value="<?php echo set_value('password') ?>">
                            <div class="clear error" name="password_error"><?php echo form_error('password') ?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4"></label>
                        <div class="col-lg-8">
                            <a href=""> Quên mật khẩu </a>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4"></label>
                        <div class="col-lg-8">
                            <div style="color:red"><?php echo form_error('login') ?></div>
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-lg-4"></label>
                        <div class="col-lg-6">
                            <button class="btn-u btn-u-sea-shop margin-bottom-20" type="submit">Đăng nhập</button>
                        </div>
                    </div>

                </form>

                <div class="margin-bottom-20"></div>
                <p class="text-center">Không có tài khoản? Hãy <a href=""><strong>Đăng kí</strong></a> ngay</p>
            </div>
        </div><!--/end row-->
    </div><!--/end container-->
</div>
<!--=== End Login ===-->