<?php $user = $this->session->userdata('user_login'); ?>
<div class="col-sm-6 col-md-6">
    <div class="detail_ct">
        <legend>Thông tin liên hệ</legend>
        <div class="form-group">
            <label class="col-lg-4 control-label">Họ và tên *</label>
            <div class="col-lg-8">
                <input type="text" name="name" id="fullname" class="form-control input-sm field" style="width:300px;" value="<?php echo $user->CustomerName; ?>"> </div>
        </div>
        <div class="form-group">
            <label class="col-lg-4 control-label">Email *</label>
            <div class="col-lg-8">
                <input type="text" placeholder="" class="form-control input-sm field" name="email" id="email" style="width:300px;" value="<?php echo $user->Email; ?>"> </div>
        </div>
        <div class="form-group">
            <label class="col-lg-4 control-label">Số điện thoại *</label>
            <div class="col-lg-8">
                <input type="text" class="form-control input-sm field" id="phone" name="phone" style="width:300px;" value="<?php echo $user->Phone; ?>"> </div>
        </div>
        <div class="form-group">
            <label class="col-lg-4 control-label">Địa chỉ *</label>
            <div class="col-lg-8">
                <input type="text" class="form-control input-sm field" name="address" id="address" style="width:300px;" value="<?php echo $user->Address; ?>"> </div>
        </div>
        <div class="form-group">
            <label class="col-lg-4 control-label">Phương thức thanh toán</label>
            <div class="col-lg-8">
                <div class="radio">
                    <label><input type="radio" name="payment" checked="checked" value="cod">Thanh toán sau khi nhận hàng</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="payment" value="nganluong">Thanh toán qua Ngân lượng</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="payment" value="baokim">Thanh toán qua Bảo kim</label>
                </div>

            </div>
        </div>
        <div class="form-group">
            <label class="col-lg-4 control-label">Ghi chú</label>
            <div class="col-lg-8">
                <textarea class="form-control input-sm field" name="note" rows="3" style="height:100px;width:300px"></textarea>
            </div>
        </div>


    </div>
</div>