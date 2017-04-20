<?php $this->load->view('admin/category/head') ?>

<div class="wrapper">
    <?php $this->load->view('admin/message', $this->data) ?>
    <!-- Static table -->
    <div class="widget" id="main_content">

        <div class="title">
            <span class="titleIcon"><input id="titleCheck" name="titleCheck" type="checkbox"></span>
            <h6>Danh sách Danh mục</h6>
            <div class="num f12">Tổng số: <b><?php echo $total ?></b></div>
        </div>

        <table class="sTable mTable myTable taskWidget" id="checkAll" width="100%" cellspacing="0" cellpadding="0">
            <thead>
                <tr>
                    <td style="width:21px;"><img src="public/admin/images/icons/tableArrows.png"></td>
                    <td style="width:80px">Mã số</td>
                    <td style="width:250px">Tên danh mục</td>
                    <td style="width:200px">Danh mục cha</td>
                    <td>Mô tả</td>
                    <td style="width:150px;">Hành động</td>
                </tr>
            </thead>

            <tfoot class="auto_check_pages">
                <tr>
                    <td colspan="6">
                        <div class="list_action itemActions">
                            <a href="#submit" id="submit" class="button blueB" url="admin/cat/del_all.html">
                                <span style="color:white;">Xóa hết</span>
                            </a>
                        </div>

                        <div class="pagination">
                            &nbsp;<strong>1</strong>&nbsp;<a href="admin/cat/index/10">2</a>&nbsp;<a href="admin/cat/index/10">Trang kế tiếp</a>&nbsp;			            </div>
                    </td>
                </tr>
            </tfoot>

            <tbody>
                <?php foreach ($list as $row): ?>
                    <tr class="row_18">
                        <td>
                            <input name="id[]" value="<?php echo $row->CategoryID ?>" type="checkbox">
                        </td>
                        <td><?php echo $row->CategoryID ?></td> 
                        <td style="text-align: left"><?php echo $row->CategoryName ?></td>  
                        <td style="text-align: left"><?php echo $row->ParentName ?></td>  
                        <td style="text-align: left"><?php echo $row->Description; ?></td>  
                        <td class="option">
                            <a href="<?php echo admin_url('category/edit/' . $row->CategoryID) ?>" title="Chỉnh sửa" class="tipS ">
                                <img src="public/admin/images/icons/color/edit.png">
                            </a>

                            <a href="<?php echo admin_url('category/delete/' . $row->CategoryID) ?>" title="Xóa"  class="tipS verify_action basic">
                                <img src="public/admin/images/icons/color/delete.png">
                            </a>
                        </td>

                    </tr>
                <?php endforeach; ?>



            </tbody>
        </table>
    </div>
</div>