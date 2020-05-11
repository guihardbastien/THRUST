# Frontend-starter-kit 

## Description

This project is a frontend boilerplate for projects in Vue.js, SCSS and Typescript.

## Step by step procedure

1. Clone the git repository
2. Remove the .git directory
3. Open package.json and change the name of the project, the version number and the license if needed
4. Remove the LICENSE file if needed
5. Change the README.md file
6. Start coding: main files in src, test files in tests.

## Get started

### Remove the git directory

```bash
rm -rf .git
```

### Open the package.json

```json
{
    "name": "superpitch-frontend-starter-kit",
    "version": "1.0.0",
    "description": "",
    "keywords": [],
    "author": "Superpitch",
    "license": "MIT",
    "main": "dist/main.js",
    "types": "dist/types/index.d.ts"
}
```

- Change the `name` field to the name of Gitlab repository including the group name for scoped packages.
- Change the `version` field to whatever you want, keeping the Semantic Versioning (see [SemVer](https://semver.org/) if you are not well versed in Semantic Versioning).
- Change the `description` field to whatever you want.
- Change the `keywords` array to whatever you want.
- Change the `license` field to a valid license type or keep MIT.
- Save your changes

### Remove the LICENSE file

If you have changed the LICENSE, you need to update this file with the correct LICENSE matching the `package.json`.

A template of a README is available from this repository: `README.template.md`.

### Change the README.md file

Obviously, you don't want to keep this file like this, you want to add the README of your own project.

### Start coding

Every source file should be in `src` directory and every test file in `tests/unit` directory. See `Detailed commands` section for more information of the commands in the `package.json`.

### A word on scoped packages

All Frontend Apps lie in the group `frontend-apps` in our Gitlab, therefore all libraries depending on this category are scoped using `frontend-apps`.

For instance, the repository for the starter kit is called `frontend-apps/frontend-starter-kit` so the package name should be `frontend-apps/frontend-starter-kit`.


### Detailed commands

#### start
Building using Rollup configuration and run-time development

```npm run serve```

#### build
Build command

```npm run build```

#### lint
Checking code according to ESlint configuration

```npm run lint```

#### test
Running tests

```npm run test:unit```


## Overview

* `/src`: Repository including all frontend assets (Vue.js)
* `/dist`: Built app (from Vue-cli))

In `src` you can find:
* ``/components`` : repository for all Vue components
* ``/assets`` : repository for styles, images, fonts etc. 

## Features

* Vue.js
* Vue-router
* Typescript
* SCSS
* ESlint (AirBnB configuration)

## A word on using a custom NPM registry

We are using a custom NPM registry for everything related to Node.js located [here](https://npm.superpitch.fr). You need to pull out the packages in package.json using the following command:

```bash
npm install --registry https://npm.superpitch.fr
```

If you're not registered into the registry, you need to use `adduser` BEFORE using `install`:

```bash
npm adduser --registry https://npm.superpitch.fr
npm install --registry https://npm.superpitch.fr
```

To log into the registry, you need to use your Gitlab account with a Personal Access Token:

- Go [here](https://gitlab.superpitch.fr/profile/personal_access_tokens)
- Give a name to your Personal Access Token
- Check the following scopes:
  * api
  * read_user
- Then create your access token
- Keep it in a safe place, since Gitlab will display it only once

So your credentials will be: 
- Your Gitlab login (or email address)
- Your Personal Access Token

You can browse the registry using the URL with a fairly recent browser.


