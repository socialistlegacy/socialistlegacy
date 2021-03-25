function sortlist() {
    var x = document.getElementById("sort").value;        
    if (x == "postrev") {
      document.getElementById("postrev").style.display = "block";
      document.getElementById("post").style.display = "none";
      document.getElementById("pubrev").style.display = "none";
      document.getElementById("pub").style.display = "none";
    } else if (x == "post") {
      document.getElementById("postrev").style.display = "none";
      document.getElementById("post").style.display = "block";
      document.getElementById("pubrev").style.display = "none";
      document.getElementById("pub").style.display = "none";
    } else if (x == "pubrev") {
     document.getElementById("postrev").style.display = "none";
     document.getElementById("post").style.display = "none";
     document.getElementById("pubrev").style.display = "block";
     document.getElementById("pub").style.display = "none";
    } else if (x == "pub") {
     document.getElementById("postrev").style.display = "none";
     document.getElementById("post").style.display = "none";
     document.getElementById("pubrev").style.display = "none";
     document.getElementById("pub").style.display = "block";
    }
  }

  function pervol() {
    var y = document.getElementById("vol").value;
    if (y !== "none") { 
    var page = "v" + y;
    window.location.href = page;
    }
  }

  function volvol() {
    var pathArray = window.location.pathname.split('/');
    var path = "/" + pathArray[1] + "/" + pathArray[2] + "/v";
    var y = document.getElementById("vol").value;
    var page = path + y;
    window.location.href = page;
  }

  function voliss() {
    var y = document.getElementById("iss").value;
    if (y !== "none") {
    var page = "n" + y;
    window.location.href = page;
    }
  }

  function ississ() {
    var pathArray = window.location.pathname.split('/');
    var path = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/n";
    var y = document.getElementById("iss").value;
    var page = path + y;
    window.location.href = page;
  }