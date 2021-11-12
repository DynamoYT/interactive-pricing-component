const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  ssetPrefix: isProd ? '/interactive-pricing-component/' : ''
}
