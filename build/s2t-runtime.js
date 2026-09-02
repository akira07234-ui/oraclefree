/* s2t.js — runtime Simplified→Traditional conversion for /zh-tw/ pages.
   Static HTML is converted at build time (opencc, phrase-level). This file
   catches text rendered client-side after load: lunar-library output (宜/忌,
   吉神, festivals), fetched JSON (guanyin.json), and injected L10N strings.
   Char-level map is generated at build time from the same opencc dict.
   Data lookup keys stay Simplified on purpose (client JS matches lib/JSON
   output); only DISPLAYED text is converted. */
(function () {
  "use strict";
  if ((document.documentElement.lang || "").toLowerCase() !== "zh-tw") return;
  var MAP = /*__MAP__*/;
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, TEMPLATE: 1 };
  var ATTRS = ["placeholder", "title", "aria-label", "alt"];

  function conv(s) {
    var out = "", i, c, m;
    for (i = 0; i < s.length; i++) { c = s.charAt(i); m = MAP[c]; out += (m || c); }
    return out;
  }
  window.s2tConv = conv;

  function convAttr(node, name) {
    var v = node.getAttribute(name);
    if (v) { var n = conv(v); if (n !== v) node.setAttribute(name, n); }
  }

  function walk(node) {
    if (node.nodeType === 3) {
      if (node.data.length) { var v = conv(node.data); if (v !== node.data) node.data = v; }
      return;
    }
    if (node.nodeType !== 1) return;
    var tag = node.tagName;
    if (SKIP[tag] || node.isContentEditable) return;
    for (var i = 0; i < ATTRS.length; i++) convAttr(node, ATTRS[i]);
    if (tag === "INPUT") return;   /* textarea/template above; option text is display text and converts */
    var kids = node.childNodes;
    for (var j = 0; j < kids.length; j++) walk(kids[j]);
  }

  function start() {
    walk(document.body);
    var obs = new MutationObserver(function (records) {
      obs.disconnect();
      try {
        for (var i = 0; i < records.length; i++) {
          var r = records[i];
          if (r.type === "characterData") walk(r.target);
          else if (r.type === "attributes") convAttr(r.target, r.attributeName);
          else for (var j = 0; j < r.addedNodes.length; j++) walk(r.addedNodes[j]);
        }
      } finally { obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS }); }
    });
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
