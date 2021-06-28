
// main
function search(event) {
  let searchstring = document.getElementById('searchbar').value;
  searchstring = searchstring.toLowerCase();
  let searchvalue = document.getElementsByTagName('h2');

  document.getElementById('titlebox').style.display = 'none';
  for (i = 0; i < searchvalue.length; i++) { 
    if (!searchvalue[i].innerHTML.toLowerCase().includes(searchstring)) {
      searchvalue[i].parentElement.style.display = "none";
    }
    else {
      document.getElementById('searchresultpadd').style.padding = '20px';
      searchvalue[i].parentElement.style.display = "block"; 
      document.getElementById('home').style.display = 'block';
    }
  }  
  if(searchstring != searchvalue){
    document.getElementById('searchresultpadd').style.padding = '0px';
    document.getElementById('home').style.display = 'block';
    searchvalue[i].parentElement.style.display = "block";
    if(searchstring == ''){
      document.getElementById('titlebox').style.display = 'block';
    }
  }
}

// style
function liked(){
  document.getElementById('heart').style.color = "red";
}

function shared(){
  document.getElementById('share').style.color = "rgb(0, 255, 115)";
}
