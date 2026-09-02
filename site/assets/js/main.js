/* main.js — nav + global config */
window.SITE_CONFIG = window.SITE_CONFIG || { adsenseClient: "", siteUrl: "https://www.example.com" };
(function () {
  var t = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav.main-nav");
  if (t && nav) t.addEventListener("click", function () { nav.classList.toggle("open"); });
  if (!window.SITE_CONFIG.adsenseClient) document.body.classList.add("ads-off");
  var y = document.getElementById("foot-year");
  if (y) y.textContent = new Date().getFullYear();

  /* scroll reveal — CSS is gated on .fx, so content stays visible without JS/IO */
  if (!("IntersectionObserver" in window)) return;
  var targets = [].slice.call(document.querySelectorAll(
    ".hero .kicker,.hero h1,.hero .sub,.sec-head,.card,.tool-card,.zo-tile,.wx-rule,blockquote.classic,details.faq,.hy-cat,.note"
  ));
  if (!targets.length) return;
  document.documentElement.classList.add("fx");
  targets.forEach(function (el) { el.classList.add("rv"); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  targets.forEach(function (el) { io.observe(el); });
})();
