---
sidebar_position: 3
title: Connect to GitHub
---

## Overview

FAIRshare can be used to make your research software on GitHub FAIR. This is a great way to share your research with the world and to make it available to the public so we have made it easy to integrate FAIRshare with GitHub.

## How to

To connect FAIRshare with GitHub you can either provide a [personal access token](#connect-with-token) with the appropriate scopes or you can allow [FAIRshare to connect with GitHub](#connect-with-username) and create a token for you.

:::info
We recommend using the [Connect with username](#connect-with-username) option since this will make sure that you have the correct scopes needed to make your repositories FAIR.
:::

### Connect with username

1. Click on the `Connect to GitHub` at the bottom right position of the card.
   ![](./images/github-step1.png)
2. Click on the `Connect with username` button in the popup.
   ![](./images/github-step2.png)

   This will create a new window where you can login to GitHub. You will be asked to provide your GitHub username and password to allow FAIRshare to connect to GitHub.
   ![](./images/github-step3.png)

   :::info
   FAIRshare cannot see or read the username or password you enter in this login window. If your login is successful FAIRshare only stores an authentication token that allows the application to connect to GitHub and read and write to your repositories.
   :::

3. If your login is successful FAIRshare will show you a successfully connected notification.

### Connect with token

You can also provide a personal access token that has the correct scopes to let FAIRshare read and write to your repositories.

The token can be generated using the following link: https://github.com/settings/tokens/new

:::note
You will need the following scopes on your personal access token: `admin:org_hook`, `admin:repo_hook`, `repo`, `user`
:::

1. Click on the `Connect to GitHub` at the bottom right position of the card.
   ![](./images/github-step1.png)
2. Click on the `Connect with username` button in the popup.
   ![](./images/github-token-step2.png)
3. In the following prompt enter your GitHub personal access token.
   ![](./images/github-token-step3.png)
   - Click on the `OK` button to continue. If your token is valid FAIRshare will show you a successfully connected notification.

import PageFeedback from '@site/src/components/PageFeedback';

<PageFeedback />
