window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
    document.getElementById("menu-wrapper").style.padding = "40px 0px";
  } else {
     
    document.getElementById("menu-wrapper").style.padding = "20px 0px";
  }
}