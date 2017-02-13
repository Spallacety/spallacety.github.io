function hideShow(e) {
   var display = document.getElementById(e).style.display;
        if(display == "none")
            document.getElementById(e).style.display = 'block';
       else
           document.getElementById(e).style.display = 'none';
  }

function show(e){
	document.getElementById(e).style.display = 'block'
}

function hide(e){
	document.getElementById(e).style.display = 'none'
}

.display {
    display:none;
}