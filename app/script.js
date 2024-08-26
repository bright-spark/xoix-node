"use strict";

// Embedder
const embedURL = "https://embed.redbuilder.dev/?embed=";
const embedParm = "?embed";

const body = document.body;
const bgColorsBody = ["[hex:butcolor1]", "[hex:butcolor2]", "[hex:butcolor3]", "[hex:butcolor4]", "[hex:butcolor5]"];
const contentUrls = [
    //1
    "https://redbuilder.dev",

    //2
    "https://www.canva.com/design/DAF2E2zqxEw/view",

    //3
    "https://www.canva.com/design/DAF2_pyrqh0/watch",

    //4
    "https://yt.xxlxx.co/play/0",

    //5
    "https://theradio.fm/pages/dash.html"
  ];

  const menu = body.querySelector(".menu");
  const menuItems = menu.querySelectorAll(".menu__item");
  const menuBorder = menu.querySelector(".menu__border");
  const menuContentIframe = document.getElementById("view");
  let activeItem = menu.querySelector(".active");

  function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) {
  menuContentIframe.src = contentUrls[index] + embedParm;
  window.history.pushState({}, '', window.location.pathname);
  return;
  }

  if (activeItem) {
  activeItem.classList.remove("active");
  }

  item.classList.add("active");
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
  menuContentIframe.src = contentUrls[index] + embedParm;
  window.history.pushState({}, '', window.location.pathname);
  }

  function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
  Math.floor(
  offsetActiveItem.left -
  menu.offsetLeft -
  (menuBorder.offsetWidth - offsetActiveItem.width) / 2
  ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  }

  offsetMenuBorder(activeItem, menuBorder);

  menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
  });

  window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
  });
