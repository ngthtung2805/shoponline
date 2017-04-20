<?php $this->load->view('admin/order/head') ?>
<div class="wrapper">
    <div class="widget">
        <div class="title">
            <span class="titleIcon"><input type="checkbox" id="titleCheck" name="titleCheck" /></span>
            <h6>Danh sách Giao dịch</h6>
            <div class="num f12">Tổng số: <b><?php echo $total; ?></b></div>
        </div>

        <table cellpadding="0" cellspacing="0" width="100%" class="sTable mTable myTable" id="checkAll">

            <thead class="filter">
                <tr>
                    <td colspan="9">
                        <form class="list_filter form" action="admin/order" method="get">
                            <table cellpadding="0" cellspacing="0" width="100%"><tbody>
                                    <tr>
                                        <td class="label" style="width:60px;"><label for="filter_id">Mã số</label></td>
                                        <td class="item"><input name="id" value="" id="filter_id" type="text" style="width:95px;" /></td>
                                        <td class="label" style="width:60px;"><label for="filter_type">Hình thức</label></td>
                                        <td class="item">
                                            <select name="payment">
                                                <option value=""></option>
                                                <option value='nganluong' >Ngân lượng</option>
                                                <option value='baokim' >Bảo kim</option>
                                                <option value='dathang' >Đặt hàng</option>
                                            </select>
                                        </td>
                                        <td class="label" style="width:60px;"><label for="filter_created">Từ ngày</label></td>
                                        <td class="item"><input name="created" value="" id="filter_created" type="text" class="datepicker" /></td>
                                        <td colspan='2' style='width:60px'>
                                            <input type="submit" class="button blueB" value="Lọc" />
                                            <input type="reset" class="basic" value="Reset" onclick="window.location.href = 'admin/order';">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="label" style="width:60px;"><label for="filter_user">Thành viên</label></td>
                                        <td class="item"><input name="customer" value="" id="filter_user" class="tipS" title="Nhập mã thành viên" type="text" /></td>
                                        <td class="label"><label for="filter_status">Giao dịch</label></td>
                                        <td class="item">
                                            <select name="status">
                                                <option></option>
                                                <option value='0' >Đợi xử lý</option>
                                                <option value='1' >Thành công</option>
                                                <option value='2' >Hủy bỏ</option>
                                            </select>
                                        </td>
                                        <td class="label"><label for="filter_created_to">Đến ngày</label></td>
                                        <td class="item">
                                            <input name="created_to" value="" id="filter_created_to" type="text" class="datepicker" />
                                        </td>
                                        <td class="label"></td>
                                        <td class="item"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </td>
                </tr>
            </thead>
            <thead>
                <tr>
                    <td style="width:10px;"><img src="public/admin/images/icons/tableArrows.png" /></td>
                    <td style="width:60px;">Mã số</td>
                    <td>Thành viên</td>
                    <td style="width:200px;">Số tiền</td>
                    <td style="width:200px">Hình thức</td>
                    <td style="width:100px;">Giao dịch</td>
                    <td style="width:75px;">Ngày tạo</td>
                    <td style="width:55px;">Hành động</td>
                </tr>
            </thead>

            <tfoot class="auto_check_pages">
                <tr>
                    <td colspan="8">
                        <div class="list_action itemActions">
                            <a href="#submit" id="submit" class="button blueB" url="admin/tran/del_all.html">
                                <span style='color:white;'>Xóa hết</span>
                            </a>
                        </div>

                        <div class='pagination'>
                           <?php echo $pagination;?>
                        </div>
                    </td>
                </tr>
            </tfoot>

            <tbody class="list_item">
                <?php foreach ($list as $row): ?>
                    <tr class='row'>
                        <td><input type="checkbox" name="id[]" value="<?php echo $row->OrderID; ?>" /></td>
                        <td class="textC"><?php echo $row->OrderID; ?></td>
                        <td>
                            <?php echo $row->CustomerName; ?>
                        </td>
                        <td class="textR red"><?php echo format_price($row->Total); ?></td>
                        <td>
                            <?php switch ($row->Payment){
                               case 'nganluong':
                                   echo 'Ngân lượng';
                                   break;
                               case 'baokim':
                                   echo 'Bảo kim';
                                   break;
                               case 'cod':
                                   echo 'Thanh toán sau khi nhận hàng';
                                   break;
                                
                            }?>
                        </td>


                        <td class="status textC">
                            <?php if ($row->Status == 0): ?>
                                <span class="pending">
                                    Chờ xử lý
                                </span>
                            <?php else: ?>
                                <span class="completed">
                                    Thành công
                                </span>
                            <?php endif; ?>
                        </td>

                        <td class="textC"><?php echo $row->OrderDate; ?></td>

                        <td class="textC">
                            <a href="admin/order/detail/<?php echo $row->OrderID;?>" class="lightbox">
                                <img src="public/admin/images/icons/color/view.png" />
                            </a>

                            <a href="admin/tran/del/21.html" title="Xóa" class="tipS verify_action" >
                                <img src="public/admin/images/icons/color/delete.png" />
                            </a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>

        </table>
    </div>

</div>
<div class="clear mt30"></div>