/* main.js — nav + global config */
window.SITE_CONFIG = window.SITE_CONFIG || { adsenseClient: "", siteUrl: "https://www.example.com" };
(function () {
  var t = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main-nav");
  if (t && nav) t.addEventListener("click", function () { nav.classList.toggle("open"); });
  if (!window.SITE_CONFIG.adsenseClient) document.body.classList.add("ads-off");
  var y = document.getElementById("foot-year");
  if (y) y.textContent = new Date().getFullYear();
})();
