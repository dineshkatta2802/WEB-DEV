<html>
<head>
<title>Book Enrollment</title>
</head>
<body>
<a href="display_books.php">Display Users</a>
<div style="margin-left:200px; border:2px dashed red; width:700px; float:left;">
<form method="post" action="store_book.php">
<table align="center" width="60%" border="0" cellspacing="3" cellpadding="5">
<th align="center" colspan="2">Enroll Books</th>

<tr>
  <td align="center">Category</td>
  <td align="center"><input type="text" name="category" size="30"><span style="color:red">*</span></td>
</tr>

<tr>
  <td align="center">CoverPage</td>
  <td align="center"><input type="text" name="coverpage" size="30"><span style="color:red">*</span></td>
</tr>

<tr>
  <td align="center">Name of the Book</td>
  <td align="center"><input type="text" name="bookname" size="30"><span style="color:red">*</span></td>
</tr>

<tr>
  <td align="center">Author</td>
  <td align="center"><input type="text" name="author" size="30"><span style="color:red">*</span></td>
</tr>

<tr>
  <td align="center">Edition</td>
  <td align="center"><input type="text" name="edition" size="30"><span style="color:red">*</span></td>
</tr>

<tr>
  <td align="center">Publisher</td>
  <td align="center"><input type="text" name="publisher" size="30"><span style="color:red">*</span></td>
</tr>

<tr>
  <td align="center">Price</td>
  <td align="center"><input type="text" name="price" size="30"><span style="color:red">*</span></td>
</tr>

<tr>
  <td align="center" colspan="2">
    <input type="submit" value="SUBMIT">
  </td>
</tr>
</table>
</form>
</div>
</body>
</html>
