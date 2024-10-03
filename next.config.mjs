/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
    assetPrefix: process.env.URL ? process.env.URL : undefined
};

export default nextConfig;