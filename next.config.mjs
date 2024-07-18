/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    env: {
        PASSWORD_PROTECT: process.env.ENVIRONMENT === 'staging',
    },
};

export default nextConfig;

