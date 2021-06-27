
function search() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByTagName('h2');
    
  for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].parentElement.style.display="none";
    }
    else {
      x[i].parentElement.style.display="block";                 
    }
  }
}

function liked(){
  document.getElementById('heart').style.color = "red";
}
