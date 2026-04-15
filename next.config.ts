import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent-mad1-1.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // ── Security headers ───────────────────────────────────────────────────────
  // Applied to every route. Adjust the CSP `script-src` if third-party scripts
  // (analytics, chat widgets, etc.) are added in the future.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Disallow embedding in iframes (clickjacking protection)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Limit referrer information sent to third parties
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Lock down unused browser features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          // Content Security Policy
          // next/font self-hosts fonts → no external font source needed.
          // 'unsafe-inline' is required by Next.js (inline styles / React hydration).
          // 'unsafe-eval' is required by Next.js in development; removed for production
          // builds automatically via Next's own CSP handling.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next.js inlines small scripts; nonce-based CSP is the ideal
              // long-term solution but requires middleware — 'unsafe-inline' is
              // the pragmatic starting point for this stack.
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              // next/font self-hosts fonts from /_next/static — no external needed
              "font-src 'self'",
              // Images: self + data URIs + configured remote patterns
              "img-src 'self' data: https://placehold.co https://images.unsplash.com https://picsum.photos https://scontent-mad1-1.cdninstagram.com",
              // API calls only to own origin
              "connect-src 'self'",
              // Block all framing
              "frame-src 'none'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
