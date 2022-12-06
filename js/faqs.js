function interest(){
    document.querySelector('#emailDiv').style.display="none";
    if (document.getElementById('subscribe').checked==true){
        document.getElementById('emailDiv').style.display = "block";
        
    }else{
        document.querySelector('#emailDiv').style.display="none";
    }
    


}
function myFunction() {
    alert("Thank you for your interest!");
  }