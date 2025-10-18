<?php
$conn = mysqli_connect("localhost", "root", "", "library");
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$result = mysqli_query($conn, "SELECT * FROM books");
echo "<h2 align='center'>Registered Books</h2>";
echo "<table border='1' align='center' cellpadding='5'>";
echo "<tr><th>Category</th><th>CoverPage</th><th>Name</th><th>Author</th><th>Edition</th><th>Publisher</th><th>Price</th></tr>";

while ($row = mysqli_fetch_assoc($result)) {
  echo "<tr>
          <td>{$row['category']}</td>
          <td>{$row['coverpage']}</td>
          <td>{$row['bookname']}</td>
          <td>{$row['author']}</td>
          <td>{$row['edition']}</td>
          <td>{$row['publisher']}</td>
          <td>{$row['price']}</td>
        </tr>";
}
echo "</table>";
mysqli_close($conn);
?>
