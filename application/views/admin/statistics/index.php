<?php $this->load->view('admin/statistics/head') ?>
<div class="wrapper">
    <br>
    <form class="list_filter form" action="admin/statistics" method="get">
        <table class="sTable mTable myTable">
            <tbody>
                <tr>
                    <?php
                    $filter_type = $this->input->get('filter_type');
                    $statistics = $this->input->get('statistics');
                    $from = $this->input->get('from');
                    $to = $this->input->get('to');
                    ?>
                    <td style="width:10px"><input type="radio" value="type" name="statistics" <?php echo ($statistics == 'type')?'checked':'';?>></td>
                    <td class="item">
                        <select name="filter_type">
                            <option value='today' <?php echo ($filter_type == 'today') ? 'selected' : ''; ?>selected="">Hôm nay</option>
                            <option value='yesterday' <?php echo ($filter_type == 'yesterday') ? 'selected' : ''; ?>>Hôm qua</option>
                            <option value='thisweek' <?php echo ($filter_type == 'thisweek') ? 'selected' : ''; ?>>Tuần này</option>
                            <option value='lastweek' <?php echo ($filter_type == 'lastweek') ? 'selected' : ''; ?>>Tuần trước</option>
                            <option value='thismonth' <?php echo ($filter_type == 'thismonth') ? 'selected' : ''; ?>>Tháng này</option>
                            <option value='lastmonth' <?php echo ($filter_type == 'lastmonth') ? 'selected' : ''; ?> >Tháng trước</option>
                            <option value='thisyear' <?php echo ($filter_type == 'thisyear') ? 'selected' : ''; ?> >Năm nay</option>
                            <option value='lastyear' <?php echo ($filter_type == 'lastyear') ? 'selected' : ''; ?> >Năm trước</option>
                        </select>
                    </td>
                    <td style="width:10px"><input type="radio" value="period" name="statistics" <?php echo ($statistics == 'period')?'checked':'';?>></td>
                    <td class="label" style="width:60px;"><label for="filter_created">Từ ngày</label></td>
                    <td class="item"><input name="from" value="<?php echo $from;?>" id="filter_created" type="text" class="datepicker" /></td>
                    <td class="label" style="width:60px;"><label for="filter_created_to">Đến ngày</label></td>
                    <td class="item">
                        <input name="to" value="<?php echo $to;?>" id="filter_created_to" type="text" class="datepicker" />
                    </td>
                    <td colspan='2' style='width:60px'>
                        <input type="submit" class="button blueB" value="Xem báo cáo" />
                    </td>
                </tr>

            </tbody>
        </table>
    </form>

    <div class="widget">

        <div class="title">

            <h6>Danh sách Giao dịch</h6>
            <div class="num f12">Tổng số: <b><?php //echo $total;                           ?></b></div>
        </div>
        <?php if (count($list) > 5): ?>
            <div class="scroll" style="height:300px">
            <?php endif; ?>
            <table cellpadding="0" cellspacing="0" width="100%" class="sTable mTable myTable" id="checkAll">
                <thead>
                    <tr>
                        <td style="width:60px;">Mã số</td>
                        <td>Thành viên</td>
                        <td style="width:200px;">Số tiền</td>
                        <td style="width:200px">Hình thức</td>
                        <td style="width:75px;">Ngày tạo</td>
                        <td style="width:55px;">Hành động</td>
                    </tr>
                </thead>

                <tbody class="list_item">
                    <?php foreach ($list as $row): ?>
                        <tr class='row'>
                            <td class="textC"><?php echo $row->OrderID; ?></td>
                            <td>
                                <?php echo $row->CustomerName; ?>
                            </td>
                            <td class="textR red"><?php echo format_price($row->Total); ?></td>
                            <td>
                                <?php
                                switch ($row->Payment) {
                                    case 'nganluong':
                                        echo 'Ngân lượng';
                                        break;
                                    case 'baokim':
                                        echo 'Bảo kim';
                                        break;
                                    case 'cod':
                                        echo 'Thanh toán sau khi nhận hàng';
                                        break;
                                }
                                ?>
                            </td>
                            <td class="textC"><?php echo $row->OrderDate; ?></td>
                            <td class="textC">
                                <a href="admin/order/detail/<?php echo $row->OrderID; ?>" class="lightbox">
                                    <img src="public/admin/images/icons/color/view.png" />
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>

            </table>
            <?php if (count($list) > 5): ?>
            </div>
        <?php endif; ?>

    </div>
    <div class="textR webStatsLink" style="margin:20px 0">Tổng doanh thu: <strong><?php echo format_price($totalSales); ?></strong></div> 
</div>
<div class="clear mt30"></div>