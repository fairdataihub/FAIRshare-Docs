---
sidebar_position: 5
pagination_next: null
title: Environment variables
---

Within the developer environment, we use a few environment variable to ensure that any test datasets created aren't going to be made permenant. At the current stage of the application a few data repositories provide a test environment for developers to test on. You will have to use a `.env` file to add these environment variables directly into the application.

```yml title=".env.local"
# Zenodo
VUE_APP_ZENODO_SERVER_URL=https://sandbox.zenodo.org/api/
VUE_APP_ZENODO_URL=https://sandbox.zenodo.org

# GitHub
VUE_APP_GITHUB_SERVER_URL=https://api.github.com

# bio.tools
VUE_APP_BIO_TOOLS_SERVER_URL=https://dev.bio.tools/api
VUE_APP_BIO_TOOLS_URL=https://dev.bio.tools

# Figshare
VUE_APP_FIGSHARE_SERVER_URL=https://api.figsh.com/v2
VUE_APP_FIGSHARE_URL=https://figsh.com

# Access Token encryption key
# You will have to disconnect and reconnect your accounts for this to take effect.
VUE_APP_ENCRYPTION_KEY=XXXXXXX  # You can use any string here.

# GitHub OAuth
# Create an OAuth application on GitHub and add the client ID and secret here.
VUE_APP_GITHUB_OAUTH_CLIENT_ID=XXXXXXX
VUE_APP_GITHUB_OAUTH_CLIENT_SECRET=XXXXXXX
```

:::info
If you need to create your own dev environment, you can provide your own value for the environment variables. None of these will affect the data that you already have and only refers to the login mechanisms.
:::

For developers at Fair Data Innovations Hub, you may use the environment variables provided in this repository: [@fairdataihub/env-files](https://github.com/fairdataihub/env-files/blob/main/FAIRshare)

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
