  /* label color */
  .input-field label {
    color: #f44336;
  }
  /* label focus color */
  .input-field input[type=text]:focus + label {
    color: #f44336;
  }
  /* label underline focus color */
  .input-field input[type=text]:focus {
    border-bottom: 1px solid #f44336;
    box-shadow: 0 1px 0 0 #f44336;
  }
  /* icon prefix focus color */
  .input-field .prefix.active {
    color: #f44336;
  }

.display {
    display:none;
}

function hideShow(e) {
  var display = document.getElementById(e).style.display;
    if(display == "none")
      document.getElementById(e).style.display = 'block';
    else
      document.getElementById(e).style.display = 'none';
}