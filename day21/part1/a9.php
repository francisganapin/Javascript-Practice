<?php

    $fruits = ['Banana','Orange','Apple','Mango'];
    $index = array_search('Apple',$fruits);

    if ($index !== false){
        unset($fruits[$index]);
    }

    $fruits = array_values($frutis);
    echo implode(', ', $fruits); // Output: Banana, Orange, Mango

    ?>