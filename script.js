document.addEventListener("DOMContentLoaded", function () {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(event, tabname) {
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
      tabcontents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener("click", function (event) {
      var tabname = this.getAttribute("data-tab");
      opentab(event, tabname);
    });
  }
});

function toggleMenu() {
  // target an element in a web page and will use that element
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // target the const menu
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
