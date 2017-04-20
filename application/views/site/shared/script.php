<!-- JS Global Compulsory -->
<script src="public/site/plugins/jquery/jquery.min.js"></script>
<script src="public/site/plugins/jquery/jquery-migrate.min.js"></script>
<script src="public/site/plugins/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
<script src="public/site/plugins/back-to-top.js"></script>
<script src="public/site/plugins/smoothScroll.js"></script>
<script src="public/site/plugins/jquery.parallax.js"></script>
<script src="public/site/plugins/owl-carousel/owl-carousel/owl.carousel.js"></script>
<script src="public/site/js/plugins/stepWizard.js"></script>
<script src="public/site/plugins/metismenu/metisMenu.min.js" type="text/javascript"></script>
<!-- JS Page Level -->
<script src="public/site/js/shop.app.js"></script>
<script src="public/site/js/plugins/owl-carousel.js"></script>
<script src="public/site/js/plugins/jquery.maskedinput.min.js" type="text/javascript"></script>
<script type="text/javascript" src="public/site/js/app/js.js"></script>
<script>
    jQuery(document).ready(function () {
        App.init();
        OwlCarousel.initOwlCarousel();
        $("#menu").metisMenu();
        $(".add-to-cart").click(function () {
            $("#dialog").dialog();
        });
        $("#datepicker").datepicker({
            dateFormat: "dd/mm/yy"
        });

    }
    );
    var FancyboxI18nClose = 'Close';
    var FancyboxI18nNext = 'Next';
    var FancyboxI18nPrev = 'Previous';
    var contentOnly = false;
</script>