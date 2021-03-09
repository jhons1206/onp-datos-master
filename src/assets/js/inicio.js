//const { $ } = require("protractor");

var img_num = 1;

interval();

function showletter1() {
  var sm1 = document.getElementById("somb1");
  var sm2 = document.getElementById("somb2");
  var sm3 = document.getElementById("somb3");
  var sm4 = document.getElementById("somb4");

  var t1 = document.getElementById("title1");
  var t2 = document.getElementById("title2");
  var t3 = document.getElementById("title3");
  var t4 = document.getElementById("title4");

  var parrafo = document.getElementById("subinfo");

  sm1.style.visibility = "hidden";
  sm2.style.visibility = "visible";
  sm3.style.visibility = "visible";
  sm4.style.visibility = "visible";

  t1.style.visibility = "visible";
  t2.style.visibility = "hidden";
  t3.style.visibility = "hidden";
  t4.style.visibility = "hidden";

  parrafo.innerHTML =
    "Conoce las ventajas y beneficios del Sistema Nacional de Pensiones.";
}

function showletter2() {
  var t1 = document.getElementById("title1");
  var t2 = document.getElementById("title2");
  var t3 = document.getElementById("title3");
  var t4 = document.getElementById("title4");

  var sm1 = document.getElementById("somb1");
  var sm2 = document.getElementById("somb2");
  var sm3 = document.getElementById("somb3");
  var sm4 = document.getElementById("somb4");

  var parrafo = document.getElementById("subinfo");

  sm1.style.visibility = "visible";
  sm2.style.visibility = "hidden";
  sm3.style.visibility = "visible";
  sm4.style.visibility = "visible";

  t1.style.visibility = "hidden";
  t2.style.visibility = "visible";
  t3.style.visibility = "hidden";
  t4.style.visibility = "hidden";

  parrafo.innerHTML =
    "Protege tu futuro y el de tus familiares en caso de accidente de trabajo o enfermedad adquirida en tu centro de labores.";
}

function showletter3() {
  var t1 = document.getElementById("title1");
  var t2 = document.getElementById("title2");
  var t3 = document.getElementById("title3");
  var t4 = document.getElementById("title4");

  var sm1 = document.getElementById("somb1");
  var sm2 = document.getElementById("somb2");
  var sm3 = document.getElementById("somb3");
  var sm4 = document.getElementById("somb4");

  var parrafo = document.getElementById("subinfo");

  sm1.style.visibility = "visible";
  sm2.style.visibility = "visible";
  sm3.style.visibility = "hidden";
  sm4.style.visibility = "visible";

  t1.style.visibility = "hidden";
  t2.style.visibility = "hidden";
  t3.style.visibility = "visible";
  t4.style.visibility = "hidden";

  parrafo.innerHTML =
    "Si eres o fuiste trabajadora pesquera o trabajador pesquero, tienes derecho a una pensión que también puede beneficiar a tus familiares.";
}

function showletter4() {
  var t1 = document.getElementById("title1");
  var t2 = document.getElementById("title2");
  var t3 = document.getElementById("title3");
  var t4 = document.getElementById("title4");

  var sm1 = document.getElementById("somb1");
  var sm2 = document.getElementById("somb2");
  var sm3 = document.getElementById("somb3");
  var sm4 = document.getElementById("somb4");

  var parrafo = document.getElementById("subinfo");

  sm1.style.visibility = "visible";
  sm2.style.visibility = "visible";
  sm3.style.visibility = "visible";
  sm4.style.visibility = "hidden";

  t1.style.visibility = "hidden";
  t2.style.visibility = "hidden";
  t3.style.visibility = "hidden";
  t4.style.visibility = "visible";

  parrafo.innerHTML =
    "Garantizamos el pago de pensiones.<br>Por ello, el Estado nos encarga gestionar los pagos y las pensiones de otras instituciones públicas.";
}

function showCard1() {
  var card1 = document.getElementById("enterateCard");
  // var imgcrd1 = document.getElementById("imgcard1");
  var datacrd1 = document.getElementById("datacard1");
  $(".card-trig").hover(function () {
    card1.style.bottom = "0%";
    // imgcrd1.style.opacity = "1";
    datacrd1.style.opacity = "0";
  });
}

function hideCard1() {
  // var imgcrd1 = document.getElementById("imgcard1");
  var datacrd1 = document.getElementById("datacard1");
  $(".card-trig").hover(function () {
    $(".card-content-select").css({
      bottom: "-110%",
    });
    // imgcrd1.style.opacity = "0";
    datacrd1.style.opacity = "0";
  });
}

function showCard2() {
  var card1 = document.getElementById("enterateCard2");
  // var imgcrd2 = document.getElementById("imgcard2");
  var datacrd2 = document.getElementById("datacard2");
  $(".card-trig").hover(function () {
    card1.style.bottom = "0%";
    // imgcrd2.style.opacity = "1";
    datacrd2.style.opacity = "0";
  });
}

function hideCard2() {
  // var imgcrd2 = document.getElementById("imgcard2");
  var datacrd2 = document.getElementById("datacard2");
  $(".card-trig").hover(function () {
    $(".card-content-select").css({
      bottom: "-110%",
    });
    // imgcrd2.style.opacity = "0";
    datacrd2.style.opacity = "0";
  });
}

function showCard3() {
  //var imgcrd3 = document.getElementById("imgcard3");
  var datacrd3 = document.getElementById("datacard3");
  var card1 = document.getElementById("enterateCard3");
  $(".card-trig").hover(function () {
    card1.style.bottom = "0%";
    //imgcrd3.style.opacity = "1";
    datacrd3.style.opacity = "0";
  });
}

function hideCard3() {
  //var imgcrd3 = document.getElementById("imgcard3");
  var datacrd3 = document.getElementById("datacard3");
  $(".card-trig").hover(function () {
    $(".card-content-select").css({
      bottom: "-110%",
    });
    //imgcrd3.style.opacity = "0";
    datacrd3.style.opacity = "0";
  });
} 
function showImage1() {
  img_num = 1;

  var text1 = document.getElementById("text-b-uno");
  var text2 = document.getElementById("text-b-dos");

  if (text1 != null || text2 != null) {
    text1.innerHTML = "Cómo funciona el Sistema";
    text2.innerHTML = "Nacional de Pensiones.";
  }
  // $(".text-m-dos").css({
  //   display: "none",
  // });
  // $(".text-m-uno").css({
  //   display: "flex",
  // });
  $(".onp-banner1").css({
    opacity: "1",
  });
  $(".control2").css({
    background: "#FFFFFF",
    color: "#ffffff",
  });
  $(".control1").css({
    background: "rgb(255, 184, 28)",
    color: "rgb(255, 184, 28)",
  });
}

function showImage2() {
  img_num = 2;
  var text1 = document.getElementById("text-b-uno");
  var text2 = document.getElementById("text-b-dos");

  if (text1 != null || text2 != null) {
    text1.innerHTML = "Conoce cómo administramos tu futuro.";
    text2.innerHTML = "";
  }

  // $(".text-m-uno").css({
  //   display: "none",
  // });
  // $(".text-m-dos").css({
  //   display: "flex",
  // });
  $(".onp-banner1").css({
    opacity: "0",
  });
  $(".control1").css({
    background: "#FFFFFF",
    color: "#ffffff",
  });
  $(".control2").css({
    background: "rgb(255, 184, 28)",
    color: "rgb(255, 184, 28)",
  });
}

// function switchImg() {
//   if (img_num === 1) {
//     showImage2();
//   } else {
//     showImage1();
//   }
// }

function interval() {
  //inter = setInterval(switchImg, 5000);
}

// Menu toogle subpages
function toogleMenuTop() {
  $(".top-menu").slideToggle();  
}

function toogleMenu2() {
  $(".top-menu2").slideToggle();  
}

// Show / Hide Carrusel
function showCarrusel1() {
  $('#carrusel-afiliados').show();
  $("#carrusel-pensionistas").hide();
  $('.title-afiliado').show();
  $('.title-pensionista').hide();
}

function showCarrusel2() {
  $("#carrusel-pensionistas .slick-next").click();
  $('#carrusel-afiliados').hide();
  $("#carrusel-pensionistas").show();
  $('.title-afiliado').hide();
  $('.title-pensionista').show();
}

function mostrar(elemento,elemostrar) {
  this.elemento = elemento;
  $(`.${this.elemento}`).show();
  $("span."+elemostrar).hide();
}

function cerrar(elemento,elemostrar) {
  this.elemento = elemento;
  $(`.${this.elemento}`).hide();
  $("span."+elemostrar).show();
}