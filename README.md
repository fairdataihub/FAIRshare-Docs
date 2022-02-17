# FAIRshare Documentation

All documentation for the FAIRshare application will be hosted in this repository. Versioning has been setup for previously released versions of the application.

### Project setup

Make sure to install the dependencies for this project using [yarn](https://yarnpkg.com/)

```bash
yarn install
```

### Compiles and hot-reloads for development

Start the development server on http://localhost:3000. This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```bash
yarn start
```

### Compiles and minifies for production

Use this step to build a local production version of the site. Use `serve` to preview the local build.

```bash
yarn build
yarn serve
```

### Versioning

You can use the version script to create a new documentation version based on the latest content in the `docs` directory. That specific set of documentation will then be preserved and accessible even as the documentation in the `docs` directory changes moving forward.

1. First, make sure the current docs version (the `docs` directory) is ready to be frozen.
2. Enter the current version number.
3. Update the `version` key in package.json for this repository.

```bash
yarn run docusaurus docs:version 5.3.0
```

This will freeze the current version of the documentation. The files under the current `docs` directory will be considered to be `Upcoming 🚧` version.

### Addition Information

We recommend to look at the [documentation](https://docusaurus.io/docs).

Note: You will not need to do anything to the hosted site. Continuous Delivery has been setup with Vercel. All you need to do is push your commit and wait for it to deploy.

A special thank you to Vercel for hosting this website.

<a href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss" target="_blank">
  <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"  width="auto"/>
</a>

