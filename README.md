# @ownername/module-name

## Fix it

In [package.json](./package.json) and [README.md](./README.md), replace `ownername` and `module-name` with your own. \
Based on this repository, `ownername` is `catsmiaow` and `module-name` is `node-github-packages` \
Do not delete `@`

## Publish

```sh
npm run release
```

See [np](https://github.com/sindresorhus/np#usage)

### Publish Check

<https://github.com/ownername/module-name/packages>

## Install

```sh
npm login --registry=https://npm.pkg.github.com --scope=@ownername
npm install @ownername/module-name
```

### Local Testing

```sh
# From the path where you checkouted the package
npm link
# In the project path to import the package
npm link @ownername/module-name
```

### Link

- [Configuring npm for use with GitHub Package](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
- [Publishing Node.js packages](https://help.github.com/en/actions/language-and-framework-guides/publishing-nodejs-packages)
- [Semantic Versioning](https://semver.org)
- [npm-link](https://docs.npmjs.com/cli/link.html)
