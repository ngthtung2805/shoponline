<?php $this->load->view('admin/order/head') ?>
<div class="wrapper">
    <div class="details">
        <form class="form" id="form" action="admin/account/add" method="post" enctype="multipart/form-data">
            <fieldset>
                <div class="formRow">
                    <label style="width:120px">Mã đơn hàng</label>
                    <input style="width:200px" type="text" disabled="disabled"  name="orderid" value="<?php echo $order->OrderID; ?>">
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label style="width:120px;">Tên khách hàng</label>
                    <input style="width:200px;" type="text" name="orderid" value="<?php echo $order->CustomerName; ?>">
                    <label style="width:120px;">Số điện thoại</label>
                    <input style="width:150px;" type="text" name="orderid" value="<?php echo $order->Phone; ?>">
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label style="width:120px;">Tổng tiền</label>
                    <input style="width:200px;" type="text" name="orderid" value="<?php echo $order->Total; ?>">
                    <label style="width:120px;">Ngày đặt hàng</label>
                    <input style="width:150px;" type="text" disabled="disabled" name="orderid" value="<?php echo $order->OrderDate; ?>">
                </div>
                <div class="formRow">
                    <label style="width:120px;">Địa chỉ giao hàng</label>
                    <textarea style="width:505px;" name="orderid" ><?php echo $order->OrderAddress; ?></textarea>

                    <div class="clear"></div>
                </div>

                <div class="formRow">
                    <label style="width:120px;">

                    </label>
                    <input value="Cập nhật" class="redB" type="submit">
                    <input value="Hủy bỏ"  class="basic" type="reset">
                </div>

            </fieldset>
        </form>
    </div>
    <div class="widget">
        <div class="title">
            <span class="titleIcon"><input type="checkbox" id="titleCheck" name="titleCheck" /></span>
            <h6>Chi tiết đơn hàng</h6>
            <div class="num f12">Tổng số: <b><?php //echo $total;                  ?></b></div>
        </div>

        <table cellpadding="0" cellspacing="0" width="100%" class="sTable mTable myTable" id="checkAll">
            <thead>
                <tr>
                    <td style="width:10px;"><img src="public/admin/images/icons/tableArrows.png" /></td>
                    <td style="width:60px;">Mã SP</td>
                    <td>Tên sản phẩm</td>
                    <td style="width:60px;">Số lượng</td>
                    <td style="width:200px">Đơn giá</td>
                    <td style="width:200px;">Thành tiền</td>
                    <td style="width:200px;">Ghi chú</td>
                </tr>
            </thead>

            <tbody class="list_item">
                <?php foreach ($order->Details as $row): ?>
                    <tr class='row'>
                        <td><input type="checkbox" name="id[]" value="<?php echo $row->OrderID; ?>" /></td>
                        <td class="textC"><?php echo $row->ProductID; ?></td>
                        <td>
                            <?php echo $row->ProductName; ?>
                        </td>
                        <td class="form"><input style="width:30px" id="" value="<?php echo $row->Quantity;?>" min="0" name="quantity" type="number"></td>
                        <td>
                            <?php echo format_price($row->Price); ?> 
                        </td>


                        <td><?php echo format_price($row->Quantity * $row->Price); ?></td>
                        <td></td>

                    </tr>
                <?php endforeach; ?>
            </tbody>

        </table>
    </div>

</div>
<div class="clear mt30"></div>