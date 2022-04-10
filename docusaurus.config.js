const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FAIRshare',
  tagline: 'Your one-stop tool for making biomedical research data and software FAIR',
  url: 'https://docs.fairshareapp.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'fairdataihub',
  projectName: 'FAIRshare-Docs',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          editUrl: 'https://github.com/fairdataihub/FAIRshare-Docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: `Upcoming 🚧`,
            },
          },
        },
        blog: {
          showReadingTime: true,

          editUrl: 'https://github.com/fairdataihub/FAIRshare-Docs/edit/main/website/blog/',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-N2B19HF19W',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'FAIRshare',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/fairdataihub/FAIRshare',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://fairdataihub.org/contact-us',
            label: 'Contact Us',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Changelog',
                to: '/docs/changelog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Homepage',
                href: 'https://fairdataihub.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/fairdataihub',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fairdataihub/FAIRshare',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fair Data Innovations Hub.`,
      },
      colorMode: {
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'announcement-bar',
        // eslint-disable-next-line max-len
        content: `⭐️ <strong> If you like FAIRshare, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/fairdataihub/FAIRshare">Github</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/fairdataihub">Twitter</a>. </strong>`,
        backgroundColor: '#eff6ff',
        textColor: '#0f172a',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: 'keywords',
          content:
            'SODA for COVID 19 Research, FAIRshare, fair data, fairhub, fairdataihub, software',
        },
        {
          name: 'description',
          // eslint-disable-next-line max-len
          content: `FAIRshare is a cross-platform desktop software that allows researchers to easily organize and share their COVID-19 related genomics, immunology, and other general research data according to applicable FAIR guidelines.`,
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'author',
          content: 'Fair Data Innovations Hub',
        },
      ],
      algolia: {
        appId: 'GD7SXR5V16',
        apiKey: 'a3dc9a3cc59523cd37850a7480ab26b7',
        indexName: 'fairshareapp',
        contextualSearch: true,
      },
    }),
  scripts: [
    {
      src: 'scripts/uploadcare.js',
      defer: true,
    },
  ],
};

module.exports = config;
