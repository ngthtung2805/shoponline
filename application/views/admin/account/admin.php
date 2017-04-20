<!-- Main content -->
<!-- Common view -->
<!--Load head-->
<?php $this->load->view('admin/account/head'); ?>
<br>
<!-- Message -->
<!-- Main content wrapper -->
<div class="wrapper">
    <div class="widget">
        <?php $this->load->view('admin/message', $this->data) ?>
        <div class="title">
            <span class="titleIcon">
                <input type="checkbox" id="titleCheck" name="titleCheck" /></span>
            <h6>Danh sách tài khoản</h6>
            <div class="num f12">Tổng số: <b><?php echo $total; ?></b></div>
        </div>
        <table cellpadding="0" cellspacing="0" width="100%" class="sTable mTable myTable withCheck" id="checkAll">
            <thead>
                <tr>
                    <td style="width:10px;"><img src="public/admin/images/icons/tableArrows.png" /></td>
                    <td style="width:50px;">Mã số</td>
                    <td>Hình</td>
                    <td>Tên đăng nhập</td>
                    <td>Họ và tên</td>
                    <td>Email</td>
                    <td>Điện thoại</td>
                    <td>Địa chỉ</td>
                    <td style="width:100px;">Hành động</td>
                </tr>
            </thead>

            <tfoot>
                <tr>
                    <td colspan="7">
                        <div class="list_action itemActions">
                            <a href="#submit" id="submit" class="button blueB" url="user/del_all.html">
                                <span style='color:white;'>Xóa hết</span>
                            </a>
                        </div>

                        <div class='pagination'>
                        </div>
                    </td>
                </tr>
            </tfoot>

            <tbody>
                <?php foreach ($list as $row): ?>
                    <tr>
                        <td><input type="checkbox" name="id[]" value="<?php echo $row->AccountID ?>" /></td>
                        <td class="textC"><?php echo $row->AccountID; ?></td>
                        <td>
                            <div class="image_thumb">
                                <img src="<?php echo account_img_url($row->Image) ?>" height="50">
                                <div class="clear"></div>
                            </div>  
                        </td>
                        <td>

                            <span title="<?php echo $row->Username ?>" class="tipS">
                                <?php echo $row->Username ?>					
                            </span>
                        </td>
                        <td>
                            <span title="<?php echo $row->Name ?>" class="tipS">
                                <?php echo $row->Name ?>					
                            </span>
                        </td>


                        <td><span title="<?php echo $row->Email ?>" class="tipS">
                                <?php echo $row->Email ?>					
                            </span>
                        </td>

                        <td>
                            <?php echo $row->Phone ?>						
                        </td>

                        <td>
                            <?php echo $row->Address ?>						
                        </td>


                        <td class="option">
                            <a href="<?php echo admin_url('account/edit/' . $row->AccountID) ?>" title="Chỉnh sửa" class="tipS ">
                                <img src="public/admin/images/icons/color/edit.png" />
                            </a>

                            <a id="delete" href="<?php echo admin_url('account/delete/' . $row->AccountID) ?>" title="Xóa" class="tipS verify_action" >
                                <img src="public/admin/images/icons/color/delete.png" />
                            </a>

                        </td>
                    </tr>
                <?php endforeach; ?>
            <script>
                $('#delete').click(function () {
                    if (!confirm("Bạn có chắc chắn muốn xóa tài khoản này không?")) {
                        return false;
                    } else {
                        window.location = $('#delete').attr('href');
                        return true;
                    }
                });
            </script>
            </tbody>
        </table>

    </div>
</div>
<div class="clear mt30"></div>