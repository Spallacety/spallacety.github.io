function hideShow(e) {
   var display = document.getElementById(e).style.display;
        if(display == "none")
            document.getElementById(e).style.display = 'block';
       else
           document.getElementById(e).style.display = 'none';
  }

.display {
    display:none;
}