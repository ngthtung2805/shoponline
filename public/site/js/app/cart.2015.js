// JavaScript Document

function pnotifyInfo(title,content){

	PNotify.prototype.options.styling = "jqueryui";
	new PNotify({
		title:title,
		text: content,
		type: "info",
		delay:1000
	});
	
}

$(document).ready(function(e) {
    	 var htmlMessageCart = '<div class="modal fade" id="systemNotifyCart" tabindex="-1" role="dialog" aria-labelledby="systemNotifyModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title"><i class="fa fa-info"></i> <span class="systemNotifyCartCaption">4MEN thông báo</span></h4></div><div class="modal-body"><div class="modal-order"><p id="systemNotifyCartContent"></p></div></div><div class="modal-footer"><a class="btn-check-out btn btn-danger btn-buynow btn-continue-buy hidden-xs" data-dismiss="modal" style="float:left;"><span>Tiếp tục mua hàng</span></a><a class="btn-check-out btn btn-danger btn-buynow btn-buynow" href="'+base_url+'thanh-toan/step-1.html"><i class="fa fa-shopping-cart"></i> <span>Gửi thông tin đơn hàng</span></a></div></div></div></div>';
	
		$("body").append(htmlMessageCart);
});

function showMessageCartNotify(contentHtml){
	$('#systemNotifyCartContent').html(contentHtml);
	$('#systemNotifyCart').modal();
}


function rawCart_bak(){
	$.ajax({
		  type: 'POST',
		  url:base_url+"client/get_cart_quantity",
		  data:'',
		  success: function(data){
			  if (parseInt(data,10)>0)
			  {
				  if (typeof hideCartLeft === 'undefined' || hideCartLeft!=true)
				  {
					  $("#cart-quantity-left").html(data);
					  $("#cart-left").fadeIn(300);
				  }
			  }
			  else
			  {
				 
				  $("#cart-left").hide();
			  }
		},
		error:function (xhr, ajaxOptions, thrownError){
			//$("#waiting_box").fadeOut(100);
			//alert(xhr.responseText);
		}    
	});	
}


function rawCart(showMessageCart){
	$.ajax({
		  type: 'POST',
		  url:base_url+"client/get_all_cart",
		  data:'',
		  success: function(data){
		    $(".cartTopRightQuantity").html(0);
			$(".cartTopRightButtons").hide();
			$(".cartTopRightTotal").hide();
			$(".cartTopRightContent").html('');	
			$(".cart_block_no_products").show();
			 var cartArray=jQuery.parseJSON(data);
			 var quantity=0;
			 if (cartArray.length>0)
			{
				 $(".cartTopRightQuantity").html('0');
				 $(".cartTopRightContent").html('');
				 
				
				 var html="";
				 var sumMoney=0;
				for (var i=0;  i<cartArray.length; i++)
				{
					quantity+=parseInt( cartArray[i]["quantity"],10);
					sumMoney+=parseInt( cartArray[i]["total_price"],10);
					
					var classDt="";
					if (i==0){
						classDt='first_item';
					}
					if (i==cartArray.length-1) 
					{
						classDt+=' last_item';	
					}
					html+=' <dt class="'+classDt+'">';
					html+='		<a href="'+cartArray[i]["link"]+'" class="cart-images"><img widht="70" height="70" src="'+cartArray[i]["thumb_url"]+'"/></a>';
					
					html+='		<div class="cart-info">';
					html+='			<div class="product-name">';
					html+='				<span class="quantity-formated">';
					html+='					<span class="quantity">'+cartArray[i]["quantity"]+'</span>&nbsp;x&nbsp;';
					html+='				</span>';
					html+='				<a class="cart_block_product_name" title="'+cartArray[i]["name"]+'" href="'+cartArray[i]["link"]+'">'+cartArray[i]["name"]+'</a>';
					html+='			</div>';
					html+='			<span class="price">'+cartArray[i]["price_format"]+'</span>';
					html+='		</div>';
					html+='		<span class="remove_link"><a href="javascript:void()" cart="'+cartArray[i]["car_id"]+'" onclick="javascript:removeItemCart(this)"></a></span>';
					html+='</dt>';
				}
				$(".cartTopRightContent").html(html);
				$(".cartTopRightTotal").html('<div class="cart-prices-line last-line"><span class="price cart_block_total ajax_block_cart_total">'+addCommas(sumMoney)+'</span><span class="pr">Tổng cộng</span></div>');
				$(".cartTopRightTotal").show();
				$(".cartTopRightQuantity").html(addCommas(quantity));
				$(".cartTopRightButtons").show();
				$(".cart_block_no_products").hide();
				if (showMessageCart==true){
					showMessageCartNotify("Giỏ hàng của bạn hiện có: <strong>"+addCommas(quantity)+ "</strong> sản phẩm. </br>Tổng giá trị giỏ hàng là: <strong>"+addCommas(sumMoney)+" VND</strong></br>Bạn có muốn tiến hành gửi đơn hàng hay không?</br><em>Tại bước tiến hành gửi đơn hàng bạn có thể chỉnh sửa hoặc xem giỏ hàng của mình hiện có.</em>");
					
				}
			}
			
		},
		error:function (xhr, ajaxOptions, thrownError){
			//$("#waiting_box").fadeOut(100);
			//alert(xhr.responseText);
		}    
	});	
}


function removeItemCart(me){
	var id=$(me).attr("cart");
	$.ajax({ type: 'POST', 
		url: base_url+"client/cart_remove_item",
		data: "id="+id, 
		success: function (data){ 
			rawCart();
		}, 
		error:function (xhr, ajaxOptions, thrownError){ 
			//alert("Lỗi hệ thống.");
		}
	});
}


function pushItemToCart(id,quantity,colors,sizes,buynow,showNotify){
	
	$.ajax({ type: 'POST', 
		url: base_url+"client/cart_plus",
		data: "id="+id+"&quantity="+quantity+"&colors="+colors+"&sizes="+sizes, 
		success: function (data){ 
		//	alert(data);
			if (showNotify==true)
			{
				pnotifyInfo("Thông tin","Chúc mừng bạn sản phẩm đã được thêm vào giỏ hàng");
			}
			if (buynow==true)
			{
				window.location=base_url+"thanh-toan/step-1.html";	
			}
			else
			rawCart(true);

		}, 
		error:function (xhr, ajaxOptions, thrownError){ 
			//alert("Lỗi hệ thống.");
		}
	});
}


$(document).ready(function(e) {
    
	$("#addToCart").click(function(){
		var productId=$(this).attr('rel');
		var quantity=$("#quantityBuy").val();
		var check=true;
		var hasShowError=false;
		var color="";
		var size="";
		if ($("#sizeSelect option").length>0 )
		{
			
			if ($("#sizeChoice").val()=="")
			{
				check=false;
				alert("Bạn phải chọn size để mua");	
				hasShowError=true;
			}
			else
				size=$("#sizeChoice").val()
		}
		if ($(".colorSelect").length>0 && hasShowError==false)
		{
			if ($("#colorChoice").val()=="")
			{
				check=false;
				alert("Bạn phải chọn màu để mua");	
			}
			else
				color=$("#colorChoice").val()
		}	
		
		if (check==true)
		{
			
			pushItemToCart(productId,quantity,color,size,false,true);
		}
		
		
		return false;
	});
	
	$("#buyNow").click(function(){
		var productId=$(this).attr('rel');
		var quantity=$("#quantityBuy").val();
		var check=true;
		var hasShowError=false;
		var color="";
		var size="";
		if ($("#sizeSelect option").length>0 )
		{
			
			if ($("#sizeChoice").val()=="")
			{
				check=false;
				alert("Bạn phải chọn size để mua");	
				hasShowError=true;
			}
			else
				size=$("#sizeChoice").val()
		}
		if ($(".colorSelect").length>0 && hasShowError==false)
		{
			if ($("#colorChoice").val()=="")
			{
				check=false;
				alert("Bạn phải chọn màu để mua");	
			}
			else
				color=$("#colorChoice").val()
		}	
		
		if (check==true)
		{
			pushItemToCart(productId,quantity,color,size,true,false);
		}
	});
	
	$("#buyNowBottom").click(function(){
		var productId=$(this).attr('rel');
		var quantity=1;
		if ($(this).attr("have-size")=="1")
			var size=$("#sizeSelectBottom").val();
		else
			var size="";
		pushItemToCart(productId,quantity,"",size,true,false);
	});
	
	$("#buyNowRight").click(function(){
		var productId=$(this).attr('rel');
		var quantity=$("#quantityBuyRight").val();
		if ($(this).attr("have-size")=="1")
			var size=$("#sizeSelectRight").val();
		else
			var size="";
		pushItemToCart(productId,quantity,"",size,true,false);
	});
	$("#buyNowModal").click(function(){
		var productId=$(this).attr('rel');
		var quantity=$("#quantityBuyModal").val();
		if ($(this).attr("have-size")=="1")
			var size=$("#sizeSelectModal").val();
		else
			var size="";
		pushItemToCart(productId,quantity,"",size,true,false);
	});
	
	
});



$(document).ready(function(e) {
    rawCart();
});



function show_product_session(){
	if ($("#product_session_content").length<=0) return false;
	if (current_script=="product_detail" && product_id>0)
	{
		var post_var="current_id="+product_id;	
	}
	else
	{
		var post_var="";
	}
	$.ajax({
		  type: 'POST',
		  url:base_url+"client/product_session",
		  data:post_var,
		  success: function(data){
			var products=jQuery.parseJSON(data);
			var html="";
			for (var i=0;  i<products.length; i++)
			{
				var price=parseInt( products[i]["price"],10);
				var price_format= products[i]["price_format"];
				var price_show_format=products[i]["price_show_format"];
				var price_saleoff=parseInt( products[i]["price_saleoff"],10);
				var price_saleoff_format=products[i]["price_saleoff_format"];
				var url=products[i]["url"];
				var image=products[i]["image"];
				var name=products[i]["name"];
				
					html+='<li class="clearfix">';
                    html+='		<a class="products-block-image" href="'+url+'" title="'+name+'">';
                    html+='			<img class="replace-2x img-responsive" src="'+image+'" alt="'+name+'" width="60" />';
					html+='		</a>';
					html+='		<div class="product-content">';
                    html+=' 		<h5>';
					html+='				<a class="product-name" href="'+url+'" title="'+name+'">';
					html+='					'+name;
					html+='				</a>';
					html+='			</h5>';
					html+='			<div class="price-box">';
					if (price_saleoff>0)
					{
						html+='			<span class="price special-price">'+price_saleoff_format+' </span>';
						html+='			<span class="old-price">'+price_format+'</span>';
					}
					else
					{
                        html+='			<span class="price special-price">'+price_format+'</span>';
                                                                   
					}
					html+='				</div>';
					html+='		</div>';
                   html+=' </li>';
			}
			if (html.length>0)
			{
				$("#btn_product_session_header").show();
				$("#product_session_content").html(html);
				$("#block_product_session").show();
				sticky();
			}
			else
			{
				$("#block_product_session").remove();
			}
		},
		error:function (xhr, ajaxOptions, thrownError){
			//$("#waiting_box").fadeOut(100);
			//alert(xhr.responseText);
		}    
	});	
}
$(document).ready(function(e) {
	if (current_script!="product_detail")
	{
		setTimeout(show_product_session,5000);
/*		show_product_session();  */
	}
	else
	{
		$("#btn_product_session_header").show();	
	}
});
