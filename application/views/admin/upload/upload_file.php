<br><br>
<h1>Upload file</h1>
<form method="post" action="admin/upload/upload_file" enctype="multipart/form-data">
    <label>Ảnh minh họa:</label>
    <input type="file"  id="image" name="image">
    <br />
    <label>Ảnh kèm theo:</label>
    <input type="file"  id="image_list" name="image_list[]" multiple>
    <br />
    <input type="submit" class="button" value="Upload" name='submit' />
</form>