function sortlist() {
    var x = document.getElementById("sort").value;
    var y = document.getElementById("filter").value;
    if (x == "postrev") {
      document.getElementById("postrev").style.display = "block";
      document.getElementById("post").style.display = "none";
      document.getElementById("pubrev").style.display = "none";
      document.getElementById("pub").style.display = "none";
      if (y == "tag") {
        tags();
      }
    } else if (x == "post") {
      document.getElementById("postrev").style.display = "none";
      document.getElementById("post").style.display = "block";
      document.getElementById("pubrev").style.display = "none";
      document.getElementById("pub").style.display = "none";
      if (y == "tag") {
        tags();
      }
    } else if (x == "pubrev") {
     document.getElementById("postrev").style.display = "none";
     document.getElementById("post").style.display = "none";
     document.getElementById("pubrev").style.display = "block";
     document.getElementById("pub").style.display = "none";
     if (y == "tag") {
      tags();
     }
    } else if (x == "pub") {
     document.getElementById("postrev").style.display = "none";
     document.getElementById("post").style.display = "none";
     document.getElementById("pubrev").style.display = "none";
     document.getElementById("pub").style.display = "block";
     if (y == "tag") {
      tags();
     }
    }
  }


  function vol() {
    var section = document.getElementById("section").innerHTML;
    var y = document.getElementById("vol").value;
    if (section == "volume" || section == "issue"){
      var pathArray = window.location.pathname.split('/');
      var path = "/" + pathArray[1] + "/" + pathArray[2] + "/v";
      if (y !== "none") {
        var page = path + y + "?filter=true";
        window.location.href = page;
      }
    } else if (section == "periodicals") {
      if (y !== "none") { 
        var page = "v" + y + "?filter=true";
        window.location.href = page;
      }
    }
  }

  function iss() {
    var section = document.getElementById("section").innerHTML;
    var y = document.getElementById("iss").value;
    if (section == "issue") {
      var pathArray = window.location.pathname.split('/');
      var path = "/" + pathArray[1] + "/" + pathArray[2] + "/" + pathArray[3] + "/n";
      if (y !== "none") {
        var page = path + y + "?filter=true";
        window.location.href = page;
      } 
    } else if (section == "volume") {
      if (y !== "none") {
      var page = "n" + y + "?filter=true";
      window.location.href = page;
      }
    }
  }

  function periodical() {
    var y = document.getElementById("periodical").value;
    if (y == "all"){
      window.location.href = "/periodicals";
    } else if (y !== "none") {
      var page = "/periodicals/" + y;
      window.location.href = page;
    }
  }

  function genre() {
  }
  function tags() {
    var y = document.getElementById("tags").value;
    var nofilter = document.getElementsByClassName("nofilter");
    var tagfilter = document.getElementsByClassName("tagfilter");
    var filterterm = document.getElementsByClassName("filterterm");
    var filterin = document.getElementsByClassName("filterterm " + CSS.escape(y));
    if (y == "none") {
      for (var i = 0; i < nofilter.length; i++) {
        nofilter[i].style.display="block";
        tagfilter[i].style.display="none";  
      }
    } else {
      for (var i = 0; i < nofilter.length; i++) {
        nofilter[i].style.display="none";
        tagfilter[i].style.display="block";
      }
      for (var i = 0; i < filterterm.length; i++) {
        filterterm[i].style.display="none";
      }
      for (var i = 0; i < filterterm.length; i++) {
        filterin[i].style.display="block";
      }
    }
  }

  function author() {
  }
  function year() {
  }
  function month() {
  }




  function filter() {
    var y = document.getElementById("filter").value;
    if (y == "date") {
      document.getElementById("year").style.display="block";
      document.getElementById("author").style.display="none";
      document.getElementById("genre").style.display="none";
      document.getElementById("tags").style.display="none";
    }
    if (y == "author") {
      document.getElementById("year").style.display="none";
      document.getElementById("author").style.display="block";
      document.getElementById("genre").style.display="none";
      document.getElementById("tags").style.display="none";
    }
    if (y == "genre") {
      document.getElementById("year").style.display="none";
      document.getElementById("author").style.display="none";
      document.getElementById("genre").style.display="block";
      document.getElementById("tags").style.display="none";
    }
    if (y == "tag") {
      document.getElementById("year").style.display="none";
      document.getElementById("author").style.display="none";
      document.getElementById("genre").style.display="none";
      document.getElementById("tags").style.display="block";
    }
  }

  function sectionfilters() {
    var section = document.getElementById("section").innerHTML;
    if (section == "periodicals" || section == "volume" || section == "issue") {
      document.getElementById("vol").style.display = "block";
      document.getElementById("pertype").style.display = "block";
    }
    if (section == "volume" || section == "issue") {
      document.getElementById("iss").style.display = "block";
    }
    if (section == "ephemera") {
      document.getElementById("periodical").style.display = "block";
    }
    var url = window.location.href;
    var urlsplit = url.split("?");
    var query = urlsplit[1];
    if (query == "filter=true") {
      document.getElementById("button02").setAttribute("aria-expanded", true);
      document.getElementById("js-expandable-02").hidden = false;
    }

  }