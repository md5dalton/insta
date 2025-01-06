/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3001",
                pathname: "/api/**",
            },
            {
                protocol: "http",
                hostname: "192.168.1.100",
                port: "3001",
                pathname: "/api/**",
            }
        ],
    }
}

export default nextConfig;