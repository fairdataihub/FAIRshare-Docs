<div align="center">

  <img src="static/img/logo.svg" alt="logo" width="200" height="auto" />
  <h1>FAIRshare Documentation</h1>
  
  <p>
    A comprehensive documentation of the FAIRshare project!
  </p>

<p>
  <a href="https://github.com/fairdataihub/FAIRshare-Docs/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/fairdataihub/FAIRshare-Docs.svg?style=flat-square" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/fairdataihub/FAIRshare-Docs?style=flat-square" alt="last update" />
  </a>
  <a href="https://github.com/fairdataihub/FAIRshare-Docs/stargazers">
    <img src="https://img.shields.io/github/stars/fairdataihub/FAIRshare-Docs.svg?style=flat-square" alt="stars" />
  </a>
  <a href="https://github.com/fairdataihub/FAIRshare-Docs/issues/">
    <img src="https://img.shields.io/github/issues/fairdataihub/FAIRshare-Docs.svg?style=flat-square" alt="open issues" />
  </a>
  <a href="https://github.com/fairdataihub/FAIRshare-Docs/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/fairdataihub/FAIRshare-Docs.svg?style=flat-square" alt="license" />
  </a>
  <a href="https://doi.org/10.5281/zenodo.6407284">
    <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.6407284.svg" alt="doi" />
  </a>
</p>
   
<h4>
    <a href="https://docs.fairshareapp.io/docs/intro">What is FAIRshare?</a>
  <span> · </span>
    <a href="https://docs.fairshareapp.io/">Documentation</a>
  <span> · </span>
    <a href="https://docs.fairshareapp.io/docs/changelog">Changelog</a>
  <span> · </span>
    <a href="https://github.com/fairdataihub/FAIRshare-Docs/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://fairdataihub.org/contact-us">Request Feature</a>
  </h4>
</div>

<br />

# :notebook_with_decorative_cover: Table of Contents

- [About the Documentation](#star2-about-the-documentation)
  - [Tech Stack](#space_invader-tech-stack)
  - [Color Reference](#art-color-reference)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
  - [Versioning](#stopwatch-versioning)
  - [Build locally](#building_construction-build-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contributing](#wave-contributing)
  - [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

## :star2: About the Documentation

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://docusaurus.io/">Docusaurus</a></li>
  </ul>
</details>

### :art: Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Primary Color   | ![#1E40AF](https://via.placeholder.com/10/1E40AF?text=+) #1E40AF |
| Secondary Color | ![#F97316](https://via.placeholder.com/10/F97316?text=+) #F97316 |
| Accent Color    | ![#6B7280](https://via.placeholder.com/10/6B7280?text=+) #6B7280 |
| Text Color      | ![#1C1E21](https://via.placeholder.com/10/1C1E21?text=+) #1C1E21 |

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file

- None at the moment

## :toolbox: Getting Started

### :bangbang: Prerequisites

This project uses Yarn as package manager

```bash
npm install --global yarn
```

### :running: Run Locally

Clone the project

```bash
git clone https://github.com/fairdataihub/FAIRshare-Docs.git
```

Go to the project directory

```bash
cd FAIRshare-Docs
```

Install dependencies

```bash
yarn install
```

Start the server

```bash
yarn start
```

### :stopwatch: Versioning

You can use the version script to create a new documentation version based on the latest content in the `docs` directory. That specific set of documentation will then be preserved and accessible even as the documentation in the `docs` directory changes moving forward.

Ideally, you should create a new branch and update the relevant pages. Then send a PR with [@megasanjay](https://github.com/megasanjay) on the review page.

Only do these steps after all changes to the documentation for the specific version have been completed:

1. Update the docs changelog to be on parity with the changelog in [@FAIRshare](https://github.com/fairdataihub/FAIRshare/blob/main/CHANGELOG.md)
2. Make sure the current docs version (the `docs` directory) is ready to be frozen.
3. Update the `version` key in package.json for this repository.

```bash
yarn run docusaurus docs:version 5.3.0
```

This will freeze the current version of the documentation. The files under the current `docs` directory will be considered to be `Upcoming 🚧` version.

### :building_construction: Build locally

Use this step to build a local production version of the site. Use `serve` to preview the local build.

```bash
yarn build
yarn serve
```

### :triangular_flag_on_post: Deployment

You will not need to do anything to the hosted site. Continuous Delivery has been setup with Vercel. All you need to do is push your commit and wait for it to deploy.

## :wave: Contributing

<a href="https://github.com/fairdataihub/FAIRshare-Docs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=fairdataihub/FAIRshare-Docs" />
</a>

Contributions are always welcome!

See [`contributing.md`](https://github.com/fairdataihub/FAIRshare-Docs/blob/main/CONTRIBUTING.md) for ways to get started.

### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/fairdataihub/FAIRshare-Docs/blob/master/CODE_OF_CONDUCT.md)

## :grey_question: FAQ

- Can I make changes to previous versions of the documentation?

  - Yes, you can make changes to previous versions of the documentation. You can do this by creating a new branch and adding your changes directly in the `versioned_docs` directory.

## :warning: License

Distributed under the MIT License. See [`LICENSE`](https://github.com/fairdataihub/FAIRshare-Docs/blob/main/LICENSE) for more information.

## :handshake: Contact

Contact us on Twitter: [@fairdataihub](https://twitter.com/fairdataihub)

Send us an E-mail: info@fairdataihub.org

Project Link: [FAIRshare](https://github.com/fairdataihub/FAIRshare)

## :gem: Acknowledgements

A special thank you to Vercel for hosting our application documentation.

<a href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss" target="_blank">
  <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"  width="auto"/>
</a>
