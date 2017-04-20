<?php $this->load->view('admin/product/head'); ?>
<div class="wrapper" id="main_product">
    <?php $this->load->view('admin/message'); ?>
    <div class="widget">

        <div class="title">
            <span class="titleIcon">
                <input type="checkbox" id="titleCheck" name="titleCheck" />
            </span>
            <h6>
                Danh sách sản phẩm		
            </h6>
            <div class="num f12">Số lượng: <b><?php echo $total ?></b></div>
        </div>

        <table cellpadding="0" cellspacing="0" width="100%" class="sTable mTable myTable" id="checkAll">
            <thead class="filter"><tr><td colspan="6">
                        <form class="list_filter form" action="<?php echo admin_url('product') ?>" method="get">
                            <table cellpadding="0" cellspacing="0" width="80%"><tbody>

                                    <tr>
                                        <td class="label" style="width:40px;"><label for="filter_id">Mã số</label></td>
                                        <td class="item"><input name="id" value="<?php echo $this->input->get('id'); ?>" id="filter_id" type="text" style="width:55px;" /></td>

                                        <td class="label" style="width:40px;"><label for="filter_id">Tên</label></td>
                                        <td class="item" style="width:155px;" >
                                            <input name="name" value="<?php echo $this->input->get('name') ?>" id="filter_iname" type="text" style="width:155px;" />
                                        </td>

                                        <td class="label" style="width:60px;"><label for="filter_status">Danh mục</label></td>
                                        <td class="">
                                            <select name="category">
                                                <option value=""></option>
                                                <?php
                                                foreach ($categories as $row):
                                                    if (count($row->subs) > 1):
                                                        ?>
                                                        <optgroup label="<?php echo $row->CategoryName ?>">
                                                            <?php foreach ($row->subs as $sub): ?>
                                                                <option value="<?php echo $sub->CategoryID ?>" <?php echo ($this->input->get('category') == $sub->CategoryID) ? 'selected' : '' ?>>
                                                                    <?php echo $sub->CategoryName ?>
                                                                </option>											            </option>
                                                            <?php endforeach; ?>						          
                                                        </optgroup>
                                                    <?php else: ?>
                                                        <option value="<?php echo $row->CategoryID ?>" <?php echo ($this->input->get('category') == $row->CategoryID) ? 'selected' : '' ?>><?php echo $row->CategoryName ?></option>
                                                    <?php
                                                    endif;
                                                endforeach;
                                                ?>
                                            </select>
                                        </td>

                                        <td style='width:150px'>
                                            <input type="submit" class="button blueB" value="Lọc" />
                                            <input type="reset" class="basic" value="Reset" onclick="window.location.href = 'admin/product';">
                                        </td>

                                    </tr>
                                </tbody></table>
                        </form>
                    </td></tr></thead>

            <thead>
                <tr>
                    <td style="width:21px;"><img src="public/admin/images/icons/tableArrows.png" /></td>
                    <td style="width:60px;">Mã số</td>
                    <td>Tên</td>
                    <td>Giá</td>
                    <td style="width:75px;">Ngày tạo</td>
                    <td style="width:120px;">Hành động</td>
                </tr>
            </thead>

            <tfoot class="auto_check_pages">
                <tr>
                    <td colspan="6">
                        <div class="list_action itemActions">
                            <a href="#submit" id="submit" class="button blueB" url="admin/product/del_all.html">
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
                    <tr class='row_9'>
                        <td><input type="checkbox" name="id[]" value="<?php echo $row->ProductID ?>" /></td>
                        <td class="textC"><?php echo $row->ProductID ?></td>

                        <td>
                            <div class="image_thumb">
                                <img src="<?php echo product_img_url($row->Image); ?>" height="50">
                                <div class="clear"></div>
                            </div>
                            <a href="" class="tipS" title="" target="_blank">
                                <b><?php echo $row->ProductName; ?></b>
                            </a>
                            <div class="f11" >
                                Đã bán: 0	
                                | Xem: <?php echo $row->TotalView; ?>
                            </div>

                        </td>

                        <td class="textR">
                            <?php if ($row->Discount > 0): ?>
                                <p style="text-decoration: line-through"><?php echo format_price($row->Price) ?></p>
                                <b style="color: red" ><?php echo format_price($row->Price * (1 - $row->Discount / 100)) ?></b>
                            <?php else: ?>
                                <b style="color: red"><?php echo format_price($row->Price) ?></b>
                            <?php endif; ?>
                        </td>
                        <td class="textC"><?php echo $row->CreateDate;?></td>

                        <td class="option textC">
                            <a  href="product/view/9.html" target='_blank' class='tipS' title="Xem chi tiết sản phẩm">
                                <img src="public/admin/images/icons/color/view.png" />
                            </a>
                            <a href="admin/product/edit/<?php echo $row->ProductID?>" title="Chỉnh sửa" class="tipS">
                                <img src="public/admin/images/icons/color/edit.png" />
                            </a>

                            <a href="admin/product/delete/<?php echo $row->ProductID ?>" title="Xóa" class="tipS verify_action" >
                                <img src="public/admin/images/icons/color/delete.png" />
                            </a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>

        </table>
    </div>

</div>		<div class="clear mt30"></div>