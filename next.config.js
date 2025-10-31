/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // 1) Raiz do site -> /home (SEM domínio no source)
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },

      // 2) www -> sem www (redirecionamento entre domínios)
      //    Se preferir o contrário, troque os domínios abaixo.
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.dgt.energy',
          },
        ],
        destination: 'https://dgt.energy/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;