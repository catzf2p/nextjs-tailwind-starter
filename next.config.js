const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/nextjs-tailwind-starter/' : '',
    images: {
        unoptimized: true,
    },
};
