function registerFunction(){
    var registerContainer = document.getElementById("registerFieldContainer");
    var loginContainer = document.getElementById("loginFieldContainer");

    if(registerContainer.style.display === "none")
    {
        registerContainer.style.display = "block";
        loginContainer.style.display = "none";
    }
    else{
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    }

};
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}