<p>
    <?php
        $fruits = ['Banana','Orange','Apple','Mango'];
        echo "Before pop: " . implode(', ', $fruits);

        ?>

</p>


<p>
    <?php
        array_pop($fruits);
        echo "After pop: " . implode(', ', $fruits);
        ?>

</p>