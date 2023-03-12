/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/codingame",
        destination:
          "https://www.codingame.com/profile/e13d12cde70d6157fa6b0ed02bf9f0036640925",
        permanent: false,
        basePath: false,
      },
      {
        source: "/freecodecamp",
        destination: "https://www.freecodecamp.org/ndevfr",
        permanent: false,
        basePath: false,
      },
    ];
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };

    return config;
  },
};

module.exports = nextConfig;
