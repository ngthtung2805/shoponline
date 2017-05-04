$(function() {
	var cmt_like = $('.cmt-like-toggle');
	jQuery('.cmt-like-toggle').live('click',function()
	{
		var comment_id = jQuery(this).attr('id');
		jQuery(this).nstUI(
		{
			method:	"loadAjax",
			loadAjax:{
				url: site_url+'comment/comment_like/'+comment_id,
				field: {load: '', show: ''},
				event_complete: function(data)
				{
					if(data.complete != undefined)
  					{
						var count_like = jQuery('.cmt-like-number-'+comment_id).text();
						count_like = parseInt(count_like) + 1;
						jQuery('.cmt-like-number-'+comment_id).html(count_like);
  					}
					else
					{
						if(data.msg != undefined)
							{
							   alert(data.msg);
							   return;
							}
					}
					
				}
			},
		   
		});
	});
	
	jQuery('.show_comment_form').live('click',function()
	{
        var comment_id = jQuery(this).attr('id');
        jQuery('#comment_parent_id').val(comment_id);
	});
	
	
});
