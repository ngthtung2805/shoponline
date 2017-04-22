<?php

class Cart extends MY_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->library('form_validation');
        $this->load->helper('form');
    }

    function index() {
        $this->data = array(
            'temp' => 'site/cart/index',
            'title' => 'Trang giỏ hàng 4MENSHOP Thương hiệu thời trang nam giá rẻ',
            'cart' => $this->cart->contents(),
            'total' => $this->cart->total(),
            'message' => $this->session->flashdata('message')
        );
        $this->load->view('site/shared/layout', $this->data);
    }

    function check_login() {
        $username = $this->input->post('username');
        $password = $this->input->post('password');
        $password = md5($password);
        $this->load->model('customer_model');
        if ($this->customer_model->check_login($username, $password))
            return true;
        $this->form_validation->set_message(__FUNCTION__, 'Tên đăng nhập hoặc mật không chính xác');
        return false;
    }

    function add($id, $qty = 1) {
        if ($qty > 10) {
            $this->session->set_flashdata('message', 'Để mua sỉ hơn 10 sản phẩm vui lòng liên hệ Hotline: 0868.044.644');
            $qty = 10;
        }
        $this->load->model('product_model');

        $product = $this->product_model->single($id);
        $cart = array(
            'id' => $id,
            'qty' => $qty,
            'price' => $product->Price,
            'name' => $product->ProductName,
            'option' => array('image' => $product->Image)
        );
        $this->cart->insert($cart);
        redirect(base_url('gio-hang.html'));
    }

    public function update($id, $qty) {
        $carts = $this->cart->contents();
        foreach ($carts as $key => $value) {
            if ($value['id'] == $id) {
                $data = array(
                    'rowid' => $key,
                    'qty' => $qty
                );
                //cap nhat lai gio hang
                $this->cart->update($data);
                break;
            }
        }
    }

    function update_ajax() {
        $id = $this->input->post('id');
        $qty = $this->input->post('qty');
        $price = $this->input->post('price');
        echo format_price($qty * $price);
        $this->update($id, $qty);
    }

    public function load_cart_total() {
        echo format_price($this->cart->total());
    }

    public function delete($id) {
        $carts = $this->cart->contents();
        foreach ($carts as $key => $value) {
            if ($value['id'] == $id) {
                $data = array(
                    'rowid' => $key,
                    'qty' => 0,
                );
                $this->cart->update($data);
                break;
            }
        }
        redirect(base_url('cart'));
    }

    function send($customerID = '') {
        if ($this->cart->total() == 0) {
            $this->session->set_flashdata('message', 'Vui lòng chọn sản phẩm trước khi đặt hàng');
            redirect(base_url('cart'));
        }

        //Nếu có dữ liệu post lên thì kiểm tra
        if ($this->input->post()) {
            $this->form_validation->set_rules('name', 'Họ và tên', 'required');
            $this->form_validation->set_rules('email', 'Email', 'required|valid_email');
            $this->form_validation->set_rules('phone', 'Số điện thoại', 'required|numeric|max_length[12]|min_length[9]');
            $this->form_validation->set_rules('address', 'Địa chỉ', 'required');
        }
        $kt = FALSE;
        $payment = '';
        $total = $this->cart->total();
        if ($this->form_validation->run()) {
            $kt = TRUE;
            $this->load->model('order_model');
            $this->load->model('orderdetail_model');
            $payment = $this->input->post('payment');
            $order = array(
                'OrderID' => 0,
                'CustomerID' => $customerID,
                'OrderAddress' => $this->input->post('address'),
                'Total' => $this->cart->total(),
                'OrderDate' => gmdate('Y-m-d H:i:s', time() + 7 * 3600),
                'Payment' => $payment
            );

            if ($customerID == '') {
                $order += array(
                    'CustomerName' => $this->input->post('name'),
                    'Email' => $this->input->post('email'),
                    'Phone' => $this->input->post('phone')
                );
            }

            $order_id = $this->order_model->insert($order);

            $cart = $this->cart->contents();
            foreach ($cart as $product) {
                $order_detail = array(
                    'OrderID' => $order_id,
                    'ProductID' => intval($product['id']),
                    'Quantity' => $product['qty'],
                    'Price' => $product['price']
                );
                $this->orderdetail_model->insert($order_detail);
            }
            $this->cart->destroy();
            switch ($payment) {
                case 'cod':
                    header("refresh:5;url=" . base_url());

                    echo '<div style="text-align: center;padding: 20px 10px;">Đặt hàng thành công <br>Cảm ơn bạn đã đặt hàng của shop. Shop sẽ confirm lại với bạn trong thời gian sớm nhất để xác nhận đơn hàng.<br>
                    Trình duyệt sẽ tự động chuyển về trang chủ sau 5s, hoặc bạn có thể click <a href="localhost/shoponline">here</a>.</div>';
                    break;
                case 'nganluong':
                    $url = "https://www.nganluong.vn/button_payment.php?receiver=ngthtung2805@gmail.com&product_name=4MENSHOP - Don hang so {$order_id}&price={$total}&return_url=(URL thanh toán thành công)&comments=";
                    header('refresh:3; url=' . $url);
                    echo '<div style="text-align: center;padding: 20px 10px;">Đặt hàng thành công <br>Cảm ơn bạn đã đặt hàng của shop.<br>
                    Trình duyệt sẽ tự động chuyển sang <strong> Ngân lượng </strong> để tiến hành thanh toán sau 5s, hoặc bạn có thể  <a href="' . $url . '">nhấn vào đây</a>.</div>';
                    break;
            }
        }
        if (!$kt) {
            $this->index();
        }
    }

}
?>

