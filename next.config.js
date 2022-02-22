/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    API_URL: 'http://support.bpmexpert.ir/',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/',
  },
});

module.exports = nextConfig;
