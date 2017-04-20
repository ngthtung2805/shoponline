<?php $this->load->view('admin/account/head'); ?>
<div class="wrapper">
    <div class="widget">
        <div class="title">
            <img src="public/admin/images/icons/dark/add.png" class="titleIcon" />
            <h6>Thêm mới tài khoản</h6>
        </div>
        <form class="form" id="form" action="admin/account/add" method="post" enctype="multipart/form-data">
            <fieldset>
                <div class="formRow">
                    <label class="formLeft" for="param_name">Tên đăng nhập (*)</label>
                    <div class="formRight">
                        <div class="oneTwo">
                            <input type="text"  id="param_name" name="username" value="<?php echo set_value('username');?>">
                        </div>
                        <div name="username_error" class="clear error"><?php echo form_error('username')?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft">Mật khẩu (*)</label>
                    <div class="formRight">
                        <div class="oneTwo">
                            <input type="password"  id="" name="password" value="<?php echo set_value('password');?>">
                        </div>
                        <div name="password_error" class="clear error"><?php echo form_error('password')?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft">Nhập lại mật khẩu (*)</label>
                    <div class="formRight">
                        <div class="oneTwo">
                            <input type="password"  id="" name="repassword" value="<?php echo set_value('repassword');?>">
                        </div>
                        <div name="repassword_error" class="clear error"><?php echo form_error('repassword')?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft">Họ và tên (*)</label>
                    <div class="formRight">
                        <div class="oneTwo">
                            <input type="text"  id="" name="fullname"  value="<?php echo set_value('fullname');?>">
                        </div>
                        <div name="fullname_error" class="clear error"><?php echo form_error('fullname')?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft">Email (*)</label>
                    <div class="formRight">
                        <div class="oneTwo">
                            <input type="text"  id="" name="email" value="<?php echo set_value('email');?>">
                        </div>
                        <div name="email_error" class="clear error"><?php echo form_error('email')?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label>Ngày sinh:</label>
                    <div class="formRight">
                        <div class="oneFour">
                            <input  name="birthday" class="maskDate datepicker"  value="" type="text" style="width:250px">
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label>Giới tính:</label>
                    <div class="formRight">
                        <input type="radio"   checked="true" name="gender" id="male" value="male" />
                        <label for="male">Nam</label>
                        <input type="radio" name="gender" id="female"  value="female"/>
                        <label for="female">Nữ</label>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft">Địa chỉ</label>
                    <div class="formRight">
                        <div class="oneTwo">
                            <input type="text"  id="" name="address" >
                        </div>
                        <div name="image_list_error" class="clear error"></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft">Số điện thoại</label>
                    <div class="formRight">
                        <div class="oneFour">
                            <input type="text"  id="" name="phone"  value="<?php echo set_value('phone');?>">
                        </div>
                        <div name="phone_error" class="clear error"><?php echo form_error('phone'); ?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <!-- warranty -->

                <div class="formRow">
                    <label class="formLeft">Ảnh đại diện</label>
                    <div class="formRight">
                        <div class="left"><input type="file"  id="image_list" name="image" multiple></div>
                        <div name="image_list_error" class="clear error"></div>
                    </div>
                    <div class="clear"></div>
                </div>

                <div class="formRow">
                    <label>Quyền</label>
                    <div class="formRight">
                        <input type="radio"   checked="true" name="role" id="admin" value="admin" />
                        <label for="admin">Quản lý</label>
                        <input type="radio" name="role" id="user" value="user" />
                        <label for="user">Nhân viên</label>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formSubmit">
                    <input value="Thêm mới" class="redB" type="submit">
                    <input value="Hủy bỏ"  class="basic" type="reset">
                </div>
              
            </fieldset>
        </form>
    </div>
</div>
