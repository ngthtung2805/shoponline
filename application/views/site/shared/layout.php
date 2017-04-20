<!DOCTYPE html>
<html>
    <head>
        <?php $this->load->view('site/shared/head'); ?>
    </head>
    <body id="index" class="index hide-left-column">
        <div class="page">
            <div class="header-container">
                <?php $this->load->view('site/shared/header'); ?>
            </div>
            <div class="columns-container" style="margin-top:10px;">
                <?php $this->load->view($temp); ?>
            </div>
            <div class="footer-container">
                <?php $this->load->view('site/shared/footer'); ?>
            </div>
        </div>

        <!--Script-->
        <?php $this->load->view('site/shared/script') ?>
        <!--End script-->
    </body>

</html>
