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

                    <div class="content support margin-bottom-20">
                        <p><strong>Gọi ngay cho chúng tôi khi bạn có thắc mắc</strong>
                        </p>
                        <ul>
                            <li class="icon_check"><strong class="big npl">0868.044.644 </strong>
                            </li>
                            <li class="icon_check"><strong class="big npl">0868.444.644 </strong>
                            </li>
                        </ul>
                    </div>

                    <div class="content card margin-bottom-20">
                        <p><strong class="bold">Chế độ ưu đãi thành viên VIP:</strong>
                        </p>
                        <ul>
                            <li class="icon_check">5% cho thành viên Bạc</li>
                            <li class="icon_check">10% cho thành viên Vàng</li>
                            <li class="icon_check">15% cho thành viên Kim cương</li>
                        </ul>
                    </div>
          

                </div>
            </div>

            <div class="col-md-5">
                <form id="sky-form1" class="log-reg-block sky-form" action="customer/register" method="post">
                    <h2>Tạo tài khoản mới</h2>

                    <div class="row">
                        <label class="col-lg-4" for="param_name">Họ và tên</label>
                        <div class="input login-input col-lg-8">
                            <input id="param_name" type="text" name="name" class="form-control" value="<?php echo set_value('name')?>">
                         <div class="clear error" name="name_error"><?php echo form_error('name')?></div>
                        </div>
                       
                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_username">Tên đăng nhập</label>
                        <div class="input login-input col-lg-6">
                            <input id="param_username" type="text"  name="username" class="form-control" value="<?php echo set_value('username')?>">
                            <div class="clear error" name="username_error"><?php echo form_error('username')?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_password">Mật khẩu</label>
                        <div class="input login-input col-lg-8">
                            <input id ="param_password" type="password"  name="password" class="form-control" value="<?php echo set_value('password')?>">
                            <div class="clear error" name="password_error"><?php echo form_error('password')?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_repassword">Nhập lại mật khẩu</label>
                        <div class="input login-input col-lg-8">
                            <input id ="param_repassword" type="password"  name="repassword" class="form-control" value="<?php echo set_value('repassword')?>">
                            <div class="clear error" name="repassword_error"><?php echo form_error('repassword')?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_email">Email</label>
                        <div class="input login-input col-lg-8">
                            <input id ="param_email" type="email"  name="email" class="form-control" value="<?php echo set_value('email')?>">
                            <div class="clear error" name="email_error"><?php echo form_error('email')?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_birthday">Ngày sinh</label>
                        <div class="input login-input col-lg-8">
                           <input id ="param_birthday" type="text" id="datepicker"  name="birthday" class="form-control" value="<?php echo set_value('birthday')?>">
                           <div class="clear error" name="birthday_error"><?php echo form_error('birthday')?></div>
                        </div>

                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_gender">Giới tính</label>
                        <div class=" col-lg-8">
                            <div class="radio">
                                <label><input type="radio" name="gender" checked="true">Nam</label>
                            </div>
                            <div class="radio">
                                <label><input type="radio" name="gender">Nữ</label>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_address">Địa chỉ</label>
                        <div class="input login-input col-lg-8">
                            <textarea  id ="param_address" name="address" class="form-control" cols="5" value="<?php echo set_value('address')?>"></textarea>
                            <div class="clear error" name="address_error"><?php echo form_error('address')?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4" for="param_phone">Số điện thoại</label>
                        <div class="input login-input col-lg-8">
                             <input id ="param_phone" type="text"  name="phone" class="form-control" value="<?php echo set_value('phone')?>">
                             <div class="clear error" name="phone_error"><?php echo form_error('phone')?></div>
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4"></label>
                        <div class="col-lg-8">
                            * Tôi đã đọc và <strong>đổng ý</strong> với <a href="">chính sách</a> của 4MENSHOP.
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <label class="col-lg-4"></label>
                        <div class="col-lg-6">
                            <button class="btn-u btn-u-sea-shop margin-bottom-20" type="submit">Đăng kí</button>
                        </div>
                    </div>

                </form>

                <div class="margin-bottom-20"></div>
                <p class="text-center">Bạn đã có tài khoản? Hãy <a href="customer/login"><strong>Đăng nhập</strong></a> ngay</p>
            </div>
        </div><!--/end row-->
    </div><!--/end container-->
</div>
<!--=== End Login ===-->