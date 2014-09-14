<?php
$q=$_GET["q"];

require_once 'db.php';
$db = new db();
$con = $db->getConnection();

$sql="SELECT  CampusCard_ID, Rating, Comments FROM `review_master` where item_cafe = '".$q."'";

$result = mysql_query($sql);

echo "<table border='1'>
<tr>
<th>Campus Card ID</th>
<th>Rating</th>
<th>Comments</th>
</tr>";

while($row = mysql_fetch_array($result))
  {
  echo "<tr>";
  echo "<td>" . $row['CampusCard_ID'] . "</td>";
  echo "<td>" . $row['Rating'] . "</td>";
  echo "<td>" . $row['Comments'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysql_close($con);
?>
