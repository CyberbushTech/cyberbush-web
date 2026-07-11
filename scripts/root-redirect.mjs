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

// Branded, self-contained 404 (GitHub Pages serves /404.html for unknown paths).
const notFound = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Page not found — Cyberbush</title>
    <style>
      html, body { margin: 0; height: 100%; }
      body {
        background: #1c2023; color: #eaeaea;
        font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        text-align: center; padding: 1.5rem;
      }
      img { width: 160px; max-width: 60vw; margin-bottom: 2rem; }
      h1 { font-size: clamp(3rem, 12vw, 6rem); margin: 0; color: #b60404; letter-spacing: 0.05em; }
      p { font-size: 1.1rem; color: #aebecb; margin: 0.6rem 0 2rem; }
      a { display: inline-block; color: #fff; text-decoration: none;
          border: 1px solid #fff; border-radius: 0.3rem; padding: 0.6rem 1.4rem; transition: 0.15s; }
      a:hover { background: #b60404; border-color: #b60404; }
    </style>
  </head>
  <body>
    <img src="/images/logo.svg" alt="Cyberbush" />
    <h1>404</h1>
    <p>The page you are looking for could not be found.</p>
    <a href="/en/">Back to Cyberbush</a>
  </body>
</html>
`;
writeFileSync(join(outDir, "404.html"), notFound);
console.log("[root-redirect] wrote out/404.html");
