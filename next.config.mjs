/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site for GitHub Pages (no Node server at runtime).
  output: "export",
  // GitHub Pages serves /path/ as /path/index.html; trailing slashes keep
  // relative asset URLs and deep links working without a server.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer is a server feature; disable it for export.
    unoptimized: true,
  },
};

export default nextConfig;
