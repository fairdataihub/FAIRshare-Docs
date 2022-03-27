---
sidebar_position: 7
pagination_prev: null
pagination_next: null
---

# Changelog

All notable changes to FAIRshare are documented here.

:::info
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).
:::

## Version 1.2.0

### Feature additions

- You will now be warned when you select a GitHub repo that doesn't have the appropriate permissions. This should prevent you from accidentally uploading to a repo that you don't have permission to.
- Added a button to let you view the repo if you decide to not publish with FAIRshare.
- Added support for reading pre-existing `codemeta` files directly from your GitHub repository.

### Bug fixes

- Fixed an issue where app log files were not being created in the correct location.

## Version 1.1.0

### Feature additions

- Added indicators to show when FAIRshare is updating to a new version.

### Bug fixes

- On Linux the backend server was not being bundled correctly. This has been fixed to start on app launch.
- Fixed an issue where the splash screen on macOS was rendering a shadow.

## Version 1.0.0

### Feature additions

- First stable release of FAIRshare.
- Added the ability to upload your dataset to Zenodo with the appropriate metadta.
- Added support for curating GitHub repositories to Zenodo.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
