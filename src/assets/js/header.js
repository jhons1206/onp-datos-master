var indicator = "0%";

function headerSelected1() {
  $(".onp-indicator").css({
    left: "0%",
  });
  indicator = "0%";
}

function headerSelected2() {
  $(".onp-indicator").css({
    left: "25%",
  });
  indicator = "25%";
}

function headerSelected3() {
  $(".onp-indicator").css({
    left: "50%",
  });
  indicator = "50%";
}

function headerSelected4() {
  $(".onp-indicator").css({
    left: "75%",
  });
  indicator = "75%";
}

function headerSelected5() {
  $(".onp-indicator").css({
    left: "80%",
  });
  indicator = "80%";
}

function headerPreSelect1() {
  let item1 = document.getElementById("item1");
  $(".onp-indicator").css({
    left: "0%",
  });
  // $('.active').css({
  //     "font-weight": "normal",
  //     "color": "rgb(111, 155, 154)"
  // });
  item1.style.fontWeight = "bold";
}

function headerPreSelect2() {
  let item2 = document.getElementById("item2");
  $(".onp-indicator").css({
    left: "25%",
  });
  // $('.active').css({
  //     "font-weight": "normal",
  //     "color": "rgb(111, 155, 154)"
  // });
  item2.style.fontWeight = "bold";
}

function headerPreSelect3() {
  let item3 = document.getElementById("item3");
  $(".onp-indicator").css({
    left: "50%",
  });
  // $('.active').css({
  //     "font-weight": "normal",
  //     "color": "rgb(111, 155, 154)"
  // });
  item3.style.fontWeight = "bold";
}

function headerPreSelect4() {
  let item4 = document.getElementById("item4");
  $(".onp-indicator").css({
    left: "75%",
  });
  // $('.active').css({
  //     "font-weight": "normal",
  //     "color": "rgb(111, 155, 154)"
  // });
  item4.style.fontWeight = "bold";
}

function headerPreSelect5() {
  let item5 = document.getElementById("item5");
  $(".onp-indicator").css({
    left: "100%",
  });
  // $('.active').css({
  //     "font-weight": "normal",
  //     "color": "rgb(111, 155, 154)"
  // });
  item5.style.fontWeight = "bold";
}

function headerOut1() {
  let item1 = document.getElementById("item1");
  $(".onp-indicator").css({
    left: indicator,
  });
  // $('.active').css({
  //     "font-weight": "bold"
  // });
  item1.style.fontWeight = "normal";
}

function headerOut2() {
  let item2 = document.getElementById("item2");
  $(".onp-indicator").css({
    left: indicator,
  });
  // $('.active').css({
  //     "font-weight": "bold"
  // });
  item2.style.fontWeight = "normal";
}

function headerOut3() {
  let item3 = document.getElementById("item3");
  $(".onp-indicator").css({
    left: indicator,
  });
  // $('.active').css({
  //     "font-weight": "bold"
  // });
  item3.style.fontWeight = "normal";
}

function headerOut4() {
  let item4 = document.getElementById("item4");
  $(".onp-indicator").css({
    left: indicator,
  });
  // $('.active').css({
  //     "font-weight": "bold"
  // });
  item4.style.fontWeight = "normal";
}

function headerOut5() {
  $(".onp-indicator").css({
    left: indicator,
  });
  // $('.active').css({
  //     "font-weight": "bold"
  // });
  item4.style.fontWeight = "normal";
}

// on scroll,
$(window).on("scroll", function () {
  //alert("scroll");
  let scroll = $(window).scrollTop();
  let nav = document.getElementById("onp-header");
  if (scroll > 60) {
    nav.style.boxShadow = "0px 1px 10px #888888 !important";
    nav.style.position = "fixed";
  } else {
    nav.style.boxShadow = "";
  }
});

/* Movil functions */
var open = false;

function toggleMenu() {
  if (open) {
    open = false;
    $(".m-menu").css({
      top: "-1015%",
    });
    $(".onp-navbar").css({
      "background-color": "#fff",
      "box-shadow": "",
    });
    $(".onp-brand").css({
      display: "block",
    });
    $(".m-menuicon").css({
      display: "block",
    });
    $(".onp-brand-logo-m").css({
      display: "none",
    });
  } else {
    open = true;
    $(".m-menu").css({
      top: "0%",
    });
    $(".onp-navbar").css({
      "background-color": "rgb(20, 27, 77)",
      "box-shadow": "0px 1px 10px #010101",
    });
    $(".onp-brand-logo-m").css({
      display: "block",
    });
    $(".onp-brand").css({
      display: "none",
    });
    $(".m-menuicon").css({
      display: "none",
    });
  }
}
