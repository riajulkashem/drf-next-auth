/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1:8000',
                port: '',
                pathname: '/media/users/*',
            },
        ],
    },
}

module.exports = nextConfig
