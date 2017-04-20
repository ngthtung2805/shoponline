<div class="wrapper">
    <?php $this->load->view('admin/product/head') ?>
    <!-- Form -->
    <form class="form" id="form" action="admin/product/add" method="post" enctype="multipart/form-data">
        <fieldset>
            <div class="widget">
                <div class="title">
                    <img src="public/admin/images/icons/dark/add.png" class="titleIcon" />
                    <h6>Thêm mới Sản phẩm</h6>
                </div>

                <ul class="tabs">
                    <li><a href="#tab1">Thông tin chung</a></li>
                    <li><a href="#tab2">SEO Onpage</a></li>
                    <li><a href="#tab3">Bài viết</a></li>

                </ul>

                <div class="tab_container">
                    <div id='tab1' class="tab_content pd0">
                        <div class="formRow">
                            <label class="formLeft" for="param_name">Tên:<span class="req">*</span></label>
                            <div class="formRight">
                                <span class="oneTwo">
                                    <input name="name" id="param_name" _autocheck="true" type="text" value="<?php echo set_value('productname'); ?>"/>
                                </span>
                                <span name="name_autocheck" class="autocheck"></span>
                                <div name="name_error" class="clear error"><?php echo form_error('productname') ?></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="formRow">
                            <label>Chọn danh mục :</label>
                            <div class="formRight">
                                <select name="category" >

                                    <?php
                                    foreach ($categories as $row):
                                        if (count($row->subs) > 1):
                                            ?>
                                            <optgroup label="<?php echo $row->CategoryName ?>">
                                                <?php foreach ($row->subs as $sub): ?>
                                                    <option value="<?php echo $sub->CategoryID ?>" <?php echo ($this->input->get('category') == $sub->CategoryID) ? 'selected' : '' ?>>
                                                        <?php echo $sub->CategoryName ?>
                                                    </option>											            </option>
                                                <?php endforeach; ?>						          
                                            </optgroup>
                                        <?php else: ?>
                                            <option value="<?php echo $row->CategoryID ?>" <?php echo ($this->input->get('category') == $row->CategoryID) ? 'selected' : '' ?>><?php echo $row->CategoryName ?></option>
                                        <?php
                                        endif;
                                    endforeach;
                                    ?>
                                </select>           
                            </div>             
                            <div class="clear"></div>
                        </div>
                        <div class="formRow">
                            <label class="formLeft">Hình ảnh:</label>
                            <div class="formRight">
                                <div class="left"><input type="file"  id="image" name="image"></div>
                                <div name="image_error" class="clear error"></div>
                            </div>
                            <div class="clear"></div>
                        </div>

                        <!-- Price -->
                        <div class="formRow">
                            <label class="formLeft" for="param_price">
                                Giá :
                                <span class="req">*</span>
                            </label>
                            <div class="formRight">
                                <span class="oneTwo">
                                    <input name="price"  style='width:100px' id="param_price" class="format_number" _autocheck="true" type="text" value="<?php echo set_value('price') ?>" />

                                </span>
                                <span name="price_autocheck" class="autocheck"></span>
                                <div name="price_error" class="clear error"><?php echo form_error('price'); ?></div>
                            </div>
                            <div class="clear"></div>
                        </div>

                        <div class="formRow">
                            <label class="formLeft" for="param_discount">
                                Giảm giá (%)
                            </label>
                            <div class="formRight">
                                <span class="oneFour">
                                    <input style="width:100px" class="maskPct" value="" type="text" name="discount"> %   
                                </span>

                                <div name="discount_error" class="clear error"><?php echo form_error('discount'); ?></div>
                            </div>
                            <div class="clear"></div>
                        </div>


                        <div class="formRow">
                            <label class="formLeft" for="param_quantity">
                                Số lượng nhập:
                                <span class="req">*</span>
                            </label>
                            <div class="formRight">
                                <input style="width:100px" type="number" id="" value="0" min="0" name="quantity" />
                                <div name="quantity_error" class="clear error"><?php echo form_error('quantity'); ?></div>
                            </div>

                            <div class="clear"></div>
                        </div>


                        <div class="formRow hide"></div>
                    </div>

                    <div id='tab2' class="tab_content pd0" >

                        <div class="formRow">
                            <label class="formLeft" for="param_site_title">Title:</label>
                            <div class="formRight">
                                <span class="oneTwo"><textarea name="site_title" id="param_site_title" _autocheck="true" rows="4" cols=""></textarea></span>
                                <span name="site_title_autocheck" class="autocheck"></span>
                                <div name="site_title_error" class="clear error"></div>
                            </div>
                            <div class="clear"></div>
                        </div>

                        <div class="formRow">
                            <label class="formLeft" for="param_meta_desc">Meta description:</label>
                            <div class="formRight">
                                <span class="oneTwo"><textarea name="meta_desc" id="param_meta_desc" _autocheck="true" rows="4" cols=""></textarea></span>
                                <span name="meta_desc_autocheck" class="autocheck"></span>
                                <div name="meta_desc_error" class="clear error"></div>
                            </div>
                            <div class="clear"></div>
                        </div>

                        <div class="formRow">
                            <label class="formLeft" for="param_meta_key">Meta keywords:</label>
                            <div class="formRight">
                                <span class="oneTwo"><textarea name="meta_key" id="param_meta_key" _autocheck="true" rows="4" cols=""></textarea></span>
                                <span name="meta_key_autocheck" class="autocheck"></span>
                                <div name="meta_key_error" class="clear error"></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="formRow hide"></div>
                    </div>

                    <div id='tab3' class="tab_content pd0">
                        <div class="formRow">
                            <label class="formLeft">Nội dung:</label>
                            <div class="formRight">
                                <textarea name="content" id="param_content" class="editor"></textarea>
                                <div name="content_error" class="clear error"></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="formRow hide"></div>
                    </div>


                </div><!-- End tab_container-->

                <div class="formSubmit">
                    <input type="submit" value="Thêm mới" class="redB" />
                    <input type="reset" value="Hủy bỏ" class="basic" />
                </div>
                <div class="clear"></div>
            </div>
        </fieldset>
    </form>
</div>
<div class="clear mt30">

</div>