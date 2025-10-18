<?php
if (
  empty($_POST['category']) || empty($_POST['coverpage']) ||
  empty($_POST['bookname']) || empty($_POST['author']) ||
  empty($_POST['edition']) || empty($_POST['publisher']) ||
  empty($_POST['price'])
) {
  echo "<html><body>";
  echo "<h3 align='center' style='color:red'>All fields are required!</h3>";
  echo "<button onclick='history.back()'>Go Back</button>";
  echo "</body></html>";
  exit;
}

$category = $_POST['category'];
$cover = $_POST['coverpage'];
$bookname = $_POST['bookname'];
$author = $_POST['author'];
$edition = $_POST['edition'];
$publisher = $_POST['publisher'];
$price = $_POST['price'];

$conn = mysqli_connect("localhost", "root", "", "library");
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO books VALUES ('$category', '$cover', '$bookname', '$author', '$edition', '$publisher', '$price')";

if (mysqli_query($conn, $sql)) {
  echo "<html><body>";
  echo "<h3 align='center' style='color:green'>Book Enrolled Successfully!</h3>";
  echo "<a href='book_enroll.php'>Enroll Another Book</a>";
  echo "</body></html>";
} else {
  echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
