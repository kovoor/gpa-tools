module.exports = {
  // REQUIRED: add your own domain name here (e.g. gpa-tools.vercel.app),
  siteUrl: process.env.SITE_URL || "https://gpa-tools.vercel.app/",
  generateRobotsTxt: true,
  // use this to exclude routes from the sitemap (i.e. a user dashboard)
  // exclude: ["/app/*"],
}
