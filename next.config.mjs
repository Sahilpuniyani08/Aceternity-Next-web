/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['images.unsplash.com']
    },
    output: {
        // Specify the directory for the static export
        // This could be any directory you prefer, such as 'out'
        // The default is 'out', you can change it if needed
        dir: 'out'
    }
};

export default nextConfig;
