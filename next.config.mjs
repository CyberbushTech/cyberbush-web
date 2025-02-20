/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [];
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
    domains: [
      {
        domain: "cyberbush.tech",
        defaultLocale: "en",
        locales: ["en"],
      },
      // {
      //   domain: "cyberbush.ru",
      //   defaultLocale: "ru",
      //   locales: ["ru"],
      // },
      {
        domain: "localhost",
        defaultLocale: "ru",
        locales: ["ru"],
      },
    ],
  },
};

export default nextConfig;
