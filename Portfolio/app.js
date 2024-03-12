// Selecting all the require elements

// Nav items
const clickableItem = document.querySelectorAll(".clickable");
const subMenuHtml = document.querySelector("#sub-menu-html");
const subMenuSubs = document.querySelector("#sub-menu-subjects");

// Info items
const infoItems = document.querySelectorAll(".logo-title");
const infoWritingItems = document.querySelectorAll(".info-writing");

// Making sub-menu come out after clciking the nav item

clickableItem.forEach(function (item) {
  item.addEventListener("click", toggleMenu);
});

function toggleMenu(e) {
  e.target.classList.contains("sub")
    ? subMenuSubs.classList.toggle("show-item")
    : null;

  e.target.classList.contains("html")
    ? subMenuHtml.classList.toggle("show-item")
    : null;
}

// Making info come out after clicking the info items
infoItems.forEach(function (item) {
  item.addEventListener("click", showInfo);
}, true);

function showInfo(e) {
  const curEle = e.target;
  const nextEle = curEle.nextElementSibling;
  nextEle.classList.toggle("show-info-writing");
}
