<!-- End wraper -->
<script src="public/site/plugins/jquery/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="../js/jquery/jquery-ui.min.js"></script>

<script src="public/site/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="public/site/js/script.js"></script>
<script src="public/site/plugins/owl-carousel/owl.carousel.min.js" type="text/javascript"></script>
<!-- raty -->
<script type="text/javascript" src="public/site/raty/jquery.raty.min.js"></script>
<script src="public/site/plugins/metisMenu/metisMenu.min.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        $.fn.raty.defaults.path = 'public/site/raty/img';
        $('.raty').raty({
            score: function () {
                return $(this).attr('data-score');
            },
            readOnly: true
        });
        $('.raty > img').css('display', 'inline');
    });
</script>

<!--End raty -->

<!-- End Javascript -->
<script type="text/javascript">
    $(document).ready(function () {
        var owl = $('.owl-carousel');

        owl.owlCarousel({
            items: 5,
            margin: 10

        });
        // Go to the next item
        $('.next').click(function () {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.prev').click(function () {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        })
        $("#category_menu").metisMenu();
        $('#back_to_top').click(function () {
            $('html, body').animate({scrollTop: 0}, "slow");
        });
        // go top
        $(window).scroll(function () {
            if ($(window).scrollTop() != 0) {
                $('#back_to_top').fadeIn();
            } else {
                $('#back_to_top').fadeOut();
            }
        });

    });
</script>