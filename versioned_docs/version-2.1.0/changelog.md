---
sidebar_position: 7
pagination_prev: null
pagination_next: null
title: Changelog
image: https://og.fairdataihub.org/api/ogimage?app=fairshare&title=Changelog&description=All%20notable%20changes%20to%20FAIRshare
---

All notable changes to FAIRshare are documented here.

:::info
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).
:::

## Version 2.1.0

### Feature additions

- Added new workflows for both NCBI GEO and Immport. These repositories are not enabled for users but will be in the future.
- Added support for better user validation on Figshare.

### Bug fixes

- The bio.tools register button is now only shown if the data type is an allowed application.
- The text in the `Review standards` section has been revised to better reflect the purpose of the project.
- Electron has been updated to v25.

## Version 2.0.0

### Feature additions

- The GitHub release workflow has been extensively reworked to not use webhooks from the repository. You can now control what you post to your data repository with this new workflow. You are also able to add additional files directly from your system or a GitHub release to your final deposition.
- A new authentication system has been developed for FAIRshare. At the moment, the GitHub login flow is the only supported authentication method. This will be expanded in the future to support other accounts such as Zenodo and Figshare.
- When you reorder items in draggable lists(such as `authors` and `keywords`), a new animation is now shown to signify the change and to make it easier to see where you are moving the item.
- Added an option for the user to login to Figshare from directly within their workflow.
- Added a dataset preview option for the figshare workflow.

### Bug fixes

- Removed a button that was accidentally added to the `GitHub` publish page.
- Fixed an issue where the `Contributors` section was not collapsed when a new Zenodo dataset was loaded.
- Replaces the server presence check function timing from exponential backoff to a fixed interval. Now the front end portion of FAIRshare will check at startup every second for 30 seconds to see if the server is up. If the server is not up after 30 seconds, the front end will display an error message.
- Reverted Headless UI to v1.6 for the message box transitions to work properly.
- Fixed an issue where the correct upload type was not being assigned for the Zenodo workflow.
- Fix code smells reported by SonarCloud.

## Version 1.4.0

### Feature additions

- You can now submit your datasets to Figshare using FAIRshare. This is currently only enabled for local and new datasets. Support for GitHub repos and for publishing new versions of datasets to Figshare is coming soon.
- Added support for the ability to select `Upload type` for Zenodo.
- Storybook integration has been added for components used within FAIRshare. View the [library](https://www.chromatic.com/library?appId=628e928cd2515a004ad2f0b7) and the [storybook](https://628e928cd2515a004ad2f0b7-jmdpzjjikc.chromatic.com/).

### Bug fixes

- FAIRshare will now focus on the currently open app instance if a user opens multiple instances of FAIRshare. This should prevent issues that can arise from the server side.
- The `Curated with FAIRshare` badge has a new url that we can support better.
- Updated Zenodo metadata text to better fit the context of the form.

## Version 1.3.1

### Bug fixes

- Fixed an issue where the `codemeta.json` file had an incorrect key for the first release date.

## Version 1.3.0

### Feature additions

- Add support for a user to submit their own unique identifier in the `codemeta` for a dataset.
- Switch the server check full screen loading spinner to a card style notification for better usability.
- Added a way to notify the user if something went wrong with the update process for the backend.
- You can now register your software application on [bio.tools](https://bio.tools) directly using FAIRshare. This is a great way to have your application in a public registry.
- FAIRshare now has badges! Wohoo! When you finish submitting your data you will be prompted with a badge that you can add to your GitHub repository.

### Bug fixes

- Fixed an issue where a tool to show the size of the screen was being displayed on the app if the backend server didn't load fast enough.
- Fixed an issue where buttons provided by Element Plus were being overwritten by Tailwind's css reset.
- Fixed an issue where a comment added by FAIRshare to the `CITATION.cff` file was not being shown in the UI.
- Fixed some bugs where the wrong keyword was being displayed when previewing metadata files.
- Updated some analytics events to better understand who is using our software for future grant applications.

## Version 1.2.0

### Feature additions

- You will now be warned when you select a GitHub repo that doesn't have the appropriate permissions. This should prevent you from accidentally uploading to a repo that you don't have permission to.
- Added a button to let you view the repo if you decide to not publish with FAIRshare.
- Added support for reading pre-existing `codemeta` files directly from your GitHub repository.

### Bug fixes

- Fixed an issue where app log files were not being created in the correct location.
- Fixed an issue where incorrect file keys were being read from the `codemeta.json` file.
- Fixed some issues where certain GitHub repositories were not returning a license correctly. This was causing FAIRshare to assume an invalid license existed on the repository.
- Fixed an issue where an publishing a new version of a Zenodo deposition where no orcids for authors were provided could cause the app to freeze.

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
