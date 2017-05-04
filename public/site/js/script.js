
/**
* main function validate form login
*/
function validate_form_login()
{
	var form_login = document.forms['login'];
	var email = form_login['email'].value;
	var email_space = email.indexOf(' ');//lay vị trí đầu tiên của khoang trang
	var email_a     = email.indexOf('@');//lay vị trí đầu tiên của @
	var email_dot   = email.lastIndexOf('.');//lay vị trí cuối cùng của dấu '.'
	
	var password = form_login['password'].value;
	var error       = 0;
	
	//validate email
	if(email == '')
	{
		show_msg('login_email_error', 'Bạn cần nhập địa chỉ email');
		error += 1;
	}
	else if(email_space > 0 || email_a < 1 || email_dot < email_a+2 || email_dot+3 > email.length)
	{
		show_msg('login_email_error', 'Email không hợp lệ');
		error += 1;
	}
	else
	{
		show_msg('login_email_error', '');
	}
	
	//validate password
	if(password == '')
	{
		show_msg('login_password_error', 'Bạn cần nhập mật khẩu');
		error += 1;
	}
	else
	{
		show_msg('login_password_error', '');
	}
	
	if(error > 0)
	{
		return false;
	}
}


/**
* main function validate form register
*/
function validate_form_register()
{
	var email       = document.getElementById('email').value;
	var email_space = email.indexOf(' ');//lay vị trí đầu tiên của khoang trang
	var email_a     = email.indexOf('@');//lay vị trí đầu tiên của @
	var email_dot   = email.lastIndexOf('.');//lay vị trí cuối cùng của dấu '.'
	
	var name        = document.getElementById('name').value;
	var phone       = document.getElementById('phone').value;
	var password    = document.getElementById('password').value;
	var re_password = document.getElementById('re_password').value;
	var address     = document.getElementById('address').value;
	var error       = 0;

	//validate email
	if(email == '')
	{
		show_msg('email_error', 'Bạn cần nhập địa chỉ email');
		error += 1;
	}
	else if(email_space > 0 || email_a < 1 || email_dot < email_a+2 || email_dot+3 > email.length)
	{
		show_msg('email_error', 'Email không hợp lệ');
		error += 1;
	}
	else
	{
		show_msg('email_error', '');
	}
	
	//validate name
	if(name == '')
	{
		show_msg('name_error', 'Bạn cần nhập họ và tên');
		error += 1;
	}
	else
	{
		show_msg('name_error', '');
	}
	
	//validate password
	if(password == '')
	{
		show_msg('password_error', 'Bạn cần nhập mật khẩu');
		error += 1;
	}
	else
	{
		show_msg('password_error', '');
	}
	
	//validate re_password
	if(re_password == '')
	{
		show_msg('re_password_error', 'Bạn cần nhập lại mật khẩu');
		error += 1;
	}
	else if(password != re_password)
	{
		show_msg('re_password_error', 'Nhập lại mật khẩu không chính xác');
		error += 1;
	}
	else
	{
		show_msg('re_password_error', '');
	}
	
	//validate phone
	if(phone == '')
	{
		show_msg('phone_error', 'Bạn cần nhập số điện thoại');
		error += 1;
	}
	else if(password != re_password)
	{
		show_msg('re_password_error', 'Số điện thoại không hợp lệ');
		error += 1;
	}
	else
	{
		show_msg('phone_error', '');
	}
	
	//validate address
	if(address == '')
	{
		show_msg('address_error', 'Bạn cần nhập địa chỉ');
		error += 1;
	}
	else
	{
		show_msg('address_error', '');
	}

	if(error > 0)
	{
		return false;
	}
}

/**
*  function show error
*/
function show_msg(id, msg)
{
	document.getElementById(id).innerHTML  = msg;
}
/**
*  function show loadding
*/


