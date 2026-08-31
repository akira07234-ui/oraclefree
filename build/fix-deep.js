/* one-off: balance braces in deep.js */
var fs = require("fs");
var file = "build/lang/deep.js";
var s = fs.readFileSync(file, "utf8");
var depth = 0, inStr = null, esc = false;
for (var i = 0; i < s.length; i++) {
  var c = s[i];
  if (esc) { esc = false; continue; }
  if (c === "\\") { esc = true; continue; }
  if (inStr) { if (c === inStr) inStr = null; continue; }
  if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
  if (c === "{" || c === "[") depth++;
  if (c === "}" || c === "]") depth--;
}
s = s.trimEnd().replace(/[}\];\s]*$/, "");
for (var k = 0; k < depth; k++) s += "}";
fs.writeFileSync(file, s + "\n");
console.log("depth was", depth, "- closed");
