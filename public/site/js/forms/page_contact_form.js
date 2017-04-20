var PageContactForm = function () {

    return {

        //Contact Form
        initPageContactForm: function () {
            // Validation
            $("#myForm").validate({
                // Rules for form validation
                rules:
                        {
                            fullname:
                                    {
                                        required: true
                                    },
                            email:
                                    {
                                        required: true,
                                        email: true
                                    },
                            phone: {
                                required: true,
                                number:true
                            },
                            address: {
                                required: true
                            }
                        },

                // Messages for form validation
                messages:
                        {
                            fullname:
                                    {
                                        required: 'Vui lòng điền họ tên của bạn'
                                    },
                            email:
                                    {
                                        required: 'Vui lòng điền địa chỉ email của bạn',
                                        email: 'Địa chỉ email không hợp lệ'
                                    },
                            phone: {
                                required: 'Vui lòng điền số điện thoại của bạn',
                                number: 'Số điện thoại không hợp lệ'
                            },
                            address: {
                                required: 'Vui lòng điền địa chỉ của bạn'
                            }
                        },
                submitHandler: function (form) {
                    form.submit();
                }

            });
        }

    };

}();