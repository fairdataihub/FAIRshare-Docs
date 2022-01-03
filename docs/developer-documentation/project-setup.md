---
sidebar_position: 1
pagination_prev: null
---

# Project Setup

## Setting up your environment

### Using Anaconda (recommended)

We use Anaconda to keep track of the high level dependencies required to create this application. The environment files required to generate the dev environment have been provided with the repository in the `dev` folder.

:::tip
Download Anaconda here: [Anaconda Individual Edition](https://www.anaconda.com/products/individual)
:::

Each operating system requires its own environment to develop in. To facilitate this task we have provided platform specific environment files. Use the one that is relevant for your system.

```shell title="For Windows"
# create the conda environment from the file
conda env create -f .\dev\win-sodacovid-dev.yml

# activate the anaconda environment
conda activate sodacovid-dev

# install all the project dependencies
yarn install

```

```shell title="For macOS"
# create the conda environment from the file
conda env create -f .\dev\mac-sodacovid-dev.yml

# activate the anaconda environment
conda activate sodacovid-dev

# install all the project dependencies
yarn install

```

```shell title="For Linux"
# create the conda environment from the file
conda env create -f .\dev\linux-sodacovid-dev.yml

# activate the anaconda environment
conda activate sodacovid-dev

# install all the project dependencies
yarn install

```

### Manual installation

#### Using NVM (not recommended)

If you would like to use nvm instead for handling your nodejs versions, this is also possible. However this is not recommended and we would suggest you use the node installation provided to you by [Anaconda](#using-anaconda-recommended).

```shell
# if you don't have nvm installed use the following instruction
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# install nodejs
nvm install 16

```

:::caution
This will also mean that you will need your own local `Python 3.9` installation. All your packages must be installed via the provided `requirements.txt` file
:::

#### Installing python packages with pip (not recommended)

We also provide a standalone `requirements.txt` file for anyone who wants to use the basic python environment using `venv`. For this case, you will have to install the latest version of `nodejs` and `yarn` before you start any development.

```shell
pip install -r .\dev\requirements.txt
yarn install
```

## Installing packages

### Python

For python packages we prefer that you use [conda-forge](https://anaconda.org/conda-forge) if possible. This makes exporting your new environment file much easier. If a package that you require is not available here, you can also use pip to install your package.

```shell
conda install -c conda-forge <package-name>
pip install <package-name>
```

### NodeJS

You can use the vast library provided via [npm](https://www.npmjs.com/) to add any funcionality via JavaScript. In this application we use Vue 3 so please verify that your package is supported by this framework if necessary. Please use Yarn as your package manager.

```shell
yarn add <package-name>
```

## Updating your environment file

If you have added any new packages and want to update the environment file to reflect these changes use the following instruction to save your changes.

```shell
conda env export --no-builds > <platform>-sodacovid-dev.yml
```

## Language and framework versions

The minimum required programming language and compiler versions are provided below. Please be aware that this is subject to change. This application might work for run time environments earlier than the ones specified but this has not been tested at the current moment.

- Python: 3.9
- Nodejs: ^16.13.0
- Yarn: ^1.22

