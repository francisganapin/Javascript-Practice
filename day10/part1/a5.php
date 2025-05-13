<?php

$users = [
        ['name' => 'Alice','age' => 25],
        ['name' => 'Bob','age' => 30]
];

echo count($users);

foreach ($users as $user){
    echo $user['name'] . '  ';
}

?>