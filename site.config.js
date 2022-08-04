module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'Jinaya-Group-41847d3fc5be409f923b6a7c0d7c2298',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jinaya Group',
  domain: 'jinayagroup.com',
  author: 'Jinaya Group',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'Jinaya Group',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'rohan_doshi09',
  github: 'Rohan-Doshi',
  linkedin: 'rohan-doshi-0543b594',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
