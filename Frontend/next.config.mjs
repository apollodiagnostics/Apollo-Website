import createNextIntlPlugin from 'next-intl/plugin'
import BundleAnalyzer from '@next/bundle-analyzer'

// ANALYZE=true npm run build - to run the bundle analyzer
// The report will open three new tabs in your browser, which you can inspect. Doing this regularly while you develop and before deploying your site can help you identify large bundles earlier, and architect your application to be more performant.
const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// Internationalization support for Next.js
const withNextIntl = createNextIntlPlugin(
  './src/libs/i18n.ts' // Remove this path if using it src/i18n.ts
)

/** @type {import('next').NextConfig} */
export default withBundleAnalyzer(
  withNextIntl({
    // Other Next.js configuration ...
    productionBrowserSourceMaps: true,
    poweredByHeader: false,
    reactStrictMode: true,
    images: {
      domains: [
        'apollofrontend.botshot.ai',
        'apollostorage.botshot.ai',
        'frontend.apollodiagnostics.in',
        'webstorage.apollodiagnostics.in',
      ],
    },

    // Enable it to run eslint to some particular directories only
    // eslint: {
    //   dirs: ['.'],
    //   dirs: ["pages", "components"],
    //   ignoreDuringBuilds: true,
    // },

    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // typescript: {
    //   ignoreBuildErrors: true,
    // },

    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      // Important: return the modified config
      return config
    },

    // You can add a custom page extension for nextjs; otherwise, nextjs throw an Error:
    // The default export is not a React Component in the page.
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

    // To set the custom HTTP headers easily,
    async headers() {
      return [
        {
          source: '/',
          headers: [
            {
              key: 'x-index',
              value: 'index page',
            },
          ],
        },
      ]
    },

    // Redirect the incoming request to a different path or location
    async redirects() {
      return [
        {
          source: '/old-path-to',
          destination: '/new-path',
          permanent: true,
        },
      ]
    },

    // Rewrite takes the destination URL and writes on the source path
    async rewrites() {
      return [
        {
          source: '/new-rewrite-path',
          destination: '/old-rewrite-path',
        },
      ]
    },
  })
)

// TODO: Sentry - enables automatic reporting of errors and performance data.
