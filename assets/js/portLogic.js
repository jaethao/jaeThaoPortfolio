$(document).ready(function(){

// message on landing page
  function message() {
    var greeting;
    var today = new Date().getHours();
      if (today < 12) {
        greeting = "Good Morning!";
      } else if (today >= 12 && today<= 17) {
        greeting = "Good Afternoon!";
      } else {
        greeting = "Good Evening!";
    };

    document.getElementById("helloMessage").innerHTML = greeting;
};

message();


});
