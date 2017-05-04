<?php $user = $this->session->userdata('login'); ?>
<div id="leftSide" style="padding-top:30px;">
    <!-- Account panel -->
    <div class="sideProfile">
        <a href="admin" title="" class="profileFace">
            <img width="40" src="<?php echo ($user->Image == NULL) ? "public/admin/images/user.png" : account_img_url($user->Image) ?>"/></a>
        <span><strong><?php echo $user->Name ?></strong></span>
        <span><?php
            if ($user->RoleID == 1)
                echo 'Quản lý';
            else
                echo 'Nhân viên'
                ?></span>
        <div class="clear"></div>
    </div>
    <div class="sidebarSep"></div>		    
    <!-- Left navigation -->
    <ul id="menu" class="nav">
        <li class="home">
            <a href="<?php echo admin_url('home'); ?>" class="active" id="current">
                <span>Bảng điều khiển</span>
            </a>
        </li>
        <li class="tran">
            <a href="" class=" exp" >
                <span>Quản lý bán hàng</span>
            </a>
            <ul class="sub">
                <li >
                    <a href="admin/order/index">
                        Quản lý đơn hàng		
                    </a>
                </li>
                <li >
                    <a href="admin/product_order.html">
                        Đơn hàng sản phẩm
                    </a>
                </li>
            </ul>
        </li>
        <li class="product">
            <a href="" class=" exp" >
                <span>Sản phẩm</span>
            </a>

            <ul class="sub">
                <li >
                    <a href="admin/product">
                        Sản phẩm
                    </a>
                </li>
                <li>
                    <a href="<?php echo admin_url('category'); ?>">
                        Danh mục sản phẩm	
                    </a>
                </li>
                <li >
                    <a href="#">
                        Bình luận
                    </a>
                </li>
            </ul>

        </li>
        <?php if ($user->RoleID == 1): ?>
            <li class="account">

                <a href="<?php echo admin_url('account') ?>" class=" exp" >
                    <span>Tài khoản</span>
                </a>

                <ul class="sub">
                    <li >
                        <a href="<?php echo admin_url('account/admin') ?>">
                            Quản trị
                        </a>
                    </li>
                    <li >
                        <a href="<?php echo admin_url('account/user') ?>">
                            Nhân viên
                        </a>
                    </li>
                    <li >
                        <a href="<?php echo admin_url('account/permission') ?>">
                            Quyền	
                        </a>
                    </li>
                </ul>

            </li>
        <?php endif; ?>
        <li class="statistics">
            <a href="<?php echo admin_url('statistics');?>" class=" exp">
                <span>Thống kê</span>
            </a>
             <ul class="sub">
                <li >
                    <a href="admin/statistics">
                       Thống kê doanh thu
                    </a>
                </li>
                <li>
                    <a href="">
                      Thống kê sản phẩm tồn	
                    </a>
                </li>
            </ul>

        </li>
        <li class="support">

            <a href="" class=" exp" >
                <span>Hỗ trợ và liên hệ</span>
            </a>

            <ul class="sub">
                <li >
                    <a href="">
                        Hỗ trợ		
                    </a>
                </li>
                <li >
                    <a href="">
                        Liên hệ		
                    </a>
                </li>
            </ul>

        </li>
     

    </ul>

</div>
<div class="clear"></div>
