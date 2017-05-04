<!DOCTYPE html>
<html>
    <head>
        <?php $this->load->view('site/shared/head'); ?>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <?php $this->load->view('site/shared/header'); ?>
            </div>
            <div id="container" style="margin-top:20px;">
                <?php $this->load->view($temp); ?>
            </div>
            <center>
                <img src="public/site/images/bank.png"> 
            </center>
            <div class="footer">
                <?php $this->load->view('site/shared/footer'); ?>
            </div>
        </div>

        <!--Script-->
        <?php $this->load->view('site/shared/script') ?>
        <!--End script-->
    </body>

</html>
