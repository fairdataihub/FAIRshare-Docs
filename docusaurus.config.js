// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fair Share",
  tagline:
    "Your one-stop tool for rapidly organizing and sharing COVID-19 research data",
  url: "https://docs.fairshareapp.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "fairdataihub",
  projectName: "fairshare",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          editUrl:
            "https://github.com/fairdataihub/SODA-for-COVID-19-Research/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,

          editUrl:
            "https://github.com/fairdataihub/SODA-for-COVID-19-Research/edit/main/website/blog/",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // gtag: {
        //   trackingID: "Change this",
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Fair Share",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },

          {
            href: "https://github.com/fairdataihub/SODA-for-COVID-19-Research",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Change Log",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Homepage",
                href: "https://fairdataihub.org",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/fairdataihub",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/fairdataihub/SODA-for-COVID-19-Research",
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
        id: "announcement-bar",
        content:
          '⭐️ <strong> If you like Fair Share, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/fairdataihub/SODA-for-COVID-19-Research">Github</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/fairdataihub">Twitter</a>. </strong>',
        backgroundColor: "#ecfdf5",
        textColor: "#0f172a",
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
