/* dreams.js — searchable dream dictionary, config via window.L10N.dr + window.DREAMS_LOC */
(function () {
  "use strict";
  var EN = { searchPh: "Search a dream keyword", none: "No matching dreams found.",
    cats: { animals: "Animals", people: "People", nature: "Nature", places: "Places", actions: "Actions", objects: "Objects" } };
  var T = (window.L10N && window.L10N.dr) || EN;
  var pageEn = (document.documentElement.lang || "en").indexOf("en") === 0;
  var applyStatic = pageEn || !!(window.L10N && window.L10N.dr);
  for (var k in EN) if (T[k] === undefined) T[k] = EN[k];

  var box = document.getElementById("dream-box");
  if (!box) return;
  var q = document.getElementById("dream-q");
  if (applyStatic) q.placeholder = T.searchPh;
  var list = document.getElementById("dream-list");
  var DATA = window.DREAMS_LOC || [];
  var s2t = window.s2tConv || function (x) { return x; };  /* zh-tw pages: match traditional input against simplified data */

  function render() {
    var kw = (q.value || "").trim().toLowerCase();
    var html = "";
    Object.keys(T.cats).forEach(function (cat) {
      var items = DATA.filter(function (d) {
        return d.c === cat && (!kw || s2t(d.t).toLowerCase().indexOf(s2t(kw)) >= 0);
      });
      if (!items.length) return;
      html += "<h3>" + T.cats[cat] + "</h3>" + items.map(function (d) {
        return '<div class="card" style="margin-bottom:10px"><h3>' + d.t + "</h3><p>" + d.m + "</p></div>";
      }).join("");
    });
    list.innerHTML = html || "<p>" + T.none + "</p>";
  }

  if (DATA.length) { q.addEventListener("input", render); render(); }
})();
