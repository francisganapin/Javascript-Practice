<label for="myCheck">Checkbox</label>

<input type="checkbox" id="myCheck" onclick="changesFunction()">

<p id="text" style="color:blanchedalmond">Check is Checked</p>

<script>
    function changesFunction(){
    var checkbox = document.getElementById('myCheck');
    var text = document.getElementById('text');

    if(checkbox.checked==true){
      text.style.display = 'block';
    }else{
        text.style.display = 'none';   
    }
        }
</script>