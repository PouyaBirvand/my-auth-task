import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'],
  },
};

module.exports = nextConfig;
