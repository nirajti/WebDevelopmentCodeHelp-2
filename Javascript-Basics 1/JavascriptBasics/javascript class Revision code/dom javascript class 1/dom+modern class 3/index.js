function sendOTP() {
    var uname = document.forms[0]["uname"].value;
    var psw = document.forms[0]["psw"].value;
    if (uname == "" || psw == "") {
      alert("Please fill all fields");
      return;
    }
    // generate random 6-digit OTP
    var otp = Math.floor(100000 + Math.random() * 900000);
    alert("Your OTP is " + otp);
    // set OTP value in the input field
    document.getElementById("otp").value = otp;
  }
  