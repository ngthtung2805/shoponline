<!-- Title area -->
<div class="titleArea">
    <div class="wrapper">
        <div class="pageTitle">
            <h5>Bảng điều khiển</h5>
            <span>Trang quản lý hệ thống</span>
        </div>

        <div class="clear"></div>
    </div>
</div>
<div class="statsRow">
    <div class="wrapper">
        <div class="controlB">
            <ul>
                <li><a href="admin/product/add" title=""><img src="public/admin/images/icons/control/32/plus.png" alt=""><span>Thêm sản phẩm</span></a></li>
                <li><a href="admin/category/add" title=""><img src="public/admin/images/icons/control/32/database.png" alt=""><span>Thêm danh mục</span></a></li>
                <li><a href="admin/account/add" title=""><img src="public/admin/images/icons/control/32/hire-me.png" alt=""><span>Thêm nhân viên</span></a></li>
                <li><a href="admin/statistics" title=""><img src="public/admin/images/icons/control/32/statistics.png" alt=""><span>Thống kê/ báo cáo</span></a></li>
                <li><a href="#" title=""><img src="public/admin/images/icons/control/32/comment.png" alt=""><span>Kiểm tra bình luận</span></a></li>
                <li><a href="admin/order" title=""><img src="public/admin/images/icons/control/32/order-149.png" alt=""><span>Kiểm tra đơn hàng</span></a></li>
            </ul>
            <div class="clear"></div>
        </div>
    </div>
</div>
<div class="line"></div>


<!-- Message -->


<!-- Main content wrapper -->
<div class="wrapper">

    <div class="widgets">
        <!-- Stats -->
        <div class="oneTwo">
            <div class="widget">
                <div class="title">
                    <img src="public/admin/images/icons/dark/users.png" class="titleIcon" />
                    <h6>Thống kê dữ liệu</h6>
                </div>

                <table cellpadding="0" cellspacing="0" width="100%" class="sTable myTable">
                    <tbody>
                        <tr>
                            <td>
                                <div class="left">Tổng số đơn hàng <a style="color:blue; font-size: 10px;font-style: italic; margin:0 20px" href="admin/order">Chi tiết</a></div>
                            </td>
                            <td class="textC webStatsLink"> <?php echo $totals['order']; ?></td>
                        </tr>

                        <tr>
                            <td>
                                <div class="left">Tổng số sản phẩm <a style="color:blue; font-size: 10px;font-style: italic; margin:0 20px" href="admin/order">Chi tiết</a></div>
                            </td>
                            <td class="textC webStatsLink"><?php echo $totals['product']; ?></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="left">Tổng số danh mục <a style="color:blue; font-size: 10px;font-style: italic; margin:0 20px" href="admin/order">Chi tiết</a></div>
                            </td>
                            <td class="textC webStatsLink"><?php echo $totals['category']; ?></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="left">Tổng số thành viên <a style="color:blue; font-size: 10px;font-style: italic; margin:0 20px" href="admin/order">Chi tiết</a></div>
                            </td>
                            <td class="textC webStatsLink"><?php echo $totals['customer']; ?></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="left">Tổng số nhân viên <a style="color:blue; font-size: 10px;font-style: italic; margin:0 20px" href="admin/order">Chi tiết</a></div>
                            </td>
                            <td class="textC webStatsLink"><?php echo $totals['employee']; ?></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Amount -->
        <div class="oneTwo">
            <div class="widget">
                <div class="title">
                    <img src="public/admin/images/icons/dark/money.png" class="titleIcon" />
                    <h6>Doanh số</h6>
                </div>

                <table cellpadding="0" cellspacing="0" width="100%" class="sTable myTable">
                    <tbody>

                        <tr>
                            <td class="fontB blue f13">Tổng doanh số</td>
                            <td class="textR webStatsLink red" style="width:120px;"><?php echo format_price($sales['all']); ?></td>
                        </tr>

                        <tr>
                            <td class="fontB blue f13">Doanh số hôm nay</td>
                            <td class="textR webStatsLink red" style="width:120px;"><?php echo format_price($sales['today']); ?></td>
                        </tr>

                        <tr>
                            <td class="fontB blue f13">Doanh số tuần này</td>
                            <td class="textR webStatsLink red" style="width:120px;">
                                <?php echo format_price($sales['week']); ?>
                            </td>
                        </tr>
                        <tr>
                            <td class="fontB blue f13">Doanh số tháng này</td>
                            <td class="textR webStatsLink red" style="width:120px;">
                                <?php echo format_price($sales['month']); ?>
                            </td>
                        </tr>
                        <tr>
                            <td class="fontB blue f13">Doanh số năm nay</td>
                            <td class="textR webStatsLink red" style="width:120px;">
                                <?php echo format_price($sales['year']); ?>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- User -->


        <div class="clear"></div>

    </div>

</div>
<div class="clear mt30"></div>