const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = {


/*withPWA({
  pwa:{ 
    dest: 'public',
    register: true,
    //runtimeCaching,
    ////buildExcludes: [/middleware-manifest\.json$/],
    //scope: '/',
    //sw: 'service-worker.js',
    skipWaiting: true,
    //disable: process.env.NODE_ENV === 'development',
  },*/
  async headers() {
    return [
      {
        // matching all API routes
        source: "/",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  

  webpack: (config, { isServer }) => {
    maximumFileSizeToCacheInBytes: 5000000
      if (!isServer) {
        config.resolve.fallback.fs = false;
        config.resolve.fallback.net = false;
        
      }
      return config;
    },
    /*async rewrites() {
      return [
        {
          source: '/',
         // destination: 'https://lms.shop-template.de/wp-json/api/v1/token',
          destination: 'https://maps.googleapis.com/(.*)',
        },
      ]
    },*/
   
    /*async rewrites() {
      return [
        {
          source: '/(.*)',
         // destination: 'https://lms.shop-template.de/wp-json/api/v1/token',
          destination: 'https://lms.shop-template.de/data.php',
        },
      ]
    },*/
    

  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  images: {
    loader: "akamai",
    path: "",
  },
};

 //const withBundleAnalyzer = require('@next/bundle-analyzer')({
   //enabled: process.env.ANALYZE === 'true',
 //});

 //module.exports = withBundleAnalyzer({});
