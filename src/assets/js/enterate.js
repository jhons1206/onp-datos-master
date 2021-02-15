interval();

function openTabs(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tab-pane");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  //document.getElementById(cityName).className = " tab-pane";
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

function interval() {
  //setInterval(document.getElementById("defaultOpen").click(), 5000);
} 
function setPosition(item) { 
  var position = document.getElementById(item).offsetTop; 
  console.log(document.getElementById(item));
  console.log(position);
  var poss = $("#"+item).position();
  console.log(poss.left);
  console.log(poss.top); 
  var off = 100;
  if (item == "cifras") {
    off = 590;
  } 
  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: parseInt(position) - off,
      },
      1500
    );
}

/*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
$(document).ready(function () {
  // on scroll,
  $(window).on("scroll", function () {
    // let scroll = $(window).scrollTop();
    // let nav = document.getElementById("onp-submenu");
    // if (scroll > 60) {
    //   nav.style.boxShadow = "0px 1px 10px #888888 !important";
    //   nav.style.position = "fixed";
    // } else {
    //   nav.style.boxShadow = "";
    // }
  });
  // $(".owl-carousel").owlCarousel({
  //   stagePadding: 50,
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 5,
  //     },
  //   },
  // });
});
