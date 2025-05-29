<?php
    $fruits = ['Banana','Orange','Apple','Mango'];

    unset($fruits[2]);

    $fruits = array_values($fruits);

    echo implode(',', $fruits);

    ?>