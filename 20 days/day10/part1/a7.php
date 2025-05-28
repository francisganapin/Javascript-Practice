<?php
$names = ["Anna", "Bob", "Christopher"];
$short_names = array_filter($names, fn($name) => strlen($name) <= 4);
print_r($short_names);
?>
