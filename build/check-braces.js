var fs = require("fs");
var s = fs.readFileSync("build/lang/readings.js", "utf8");
var depth = 0, line = 1, inStr = null, esc = false;
var lastTop = "start";
for (var i = 0; i < s.length; i++) {
  var c = s[i];
  if (c === "\n") {
    var tr = "";
    // peek next line's trimmed start for context
    line++;
    continue;
  }
  if (esc) { esc = false; continue; }
  if (c === "\\") { esc = true; continue; }
  if (inStr) { if (c === inStr) inStr = null; continue; }
  if (c === '"' || c === "'" || c === "`") { inStr = c; continue; }
  if (c === "{") { depth++; }
  if (c === "}") {
    depth--;
    if (depth === 1) lastTop = "closed-section @" + line;
    if (depth === 0) lastTop = "closed-exports @" + line;
    if (depth < 0) { console.log("NEGATIVE at line", line); process.exit(0); }
  }
}
console.log("final depth:", depth, "| lastTop:", lastTop);
