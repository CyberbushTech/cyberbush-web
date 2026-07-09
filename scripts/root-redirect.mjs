// Post-build step: the static export has no page at "/" (all routes live under
// /en and /ru). Emit a root index.html that redirects to the right locale.
// Runs after `next build` (see package.json "build").
import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = "out";
if (!existsSync(outDir)) {
  console.warn(`[root-redirect] "${outDir}" not found, skipping`);
  process.exit(0);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="0; url=/en/" />
    <link rel="canonical" href="/en/" />
    <title>Cyberbush</title>
    <script>
      (function () {
        var lang = (navigator.language || "en").toLowerCase();
        var target = lang.indexOf("ru") === 0 ? "/ru/" : "/en/";
        window.location.replace(target);
      })();
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="/en/">cyberbush.info</a>…</p>
  </body>
</html>
`;

writeFileSync(join(outDir, "index.html"), html);
console.log("[root-redirect] wrote out/index.html");
