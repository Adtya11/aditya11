/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lkvjsczrikayaewovbxg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Images/**",
      },
    ],
  },
};

module.exports = nextConfig;
