---
title: GitHub integration
description: Information on the available kmpkg integration points with GitHub
author: michaelbprice
ms.author: miprice
date: 10/23/2023
ms.topic: concept-article
---

# GitHub integration points

## <a name="caching"></a> Caching kmpkg-built binaries for your GitHub Actions workflows

kmpkg's binary caching feature reduces the amount of time it takes to build projects that use GitHub Actions for continuous integration. There are two binary cache providers that are available to GitHub repositories, the GitHub Actions cache provider and the GitHub Packages NuGet cache provider. For more information on these GitHub features, see [GitHub Actions cache](https://docs.github.com/actions/using-workflows/caching-dependencies-to-speed-up-workflows) and [GitHub Packages](https://docs.github.com/packages/learn-github-packages/introduction-to-github-packages). For more information on kmpkg binary caching, see our [binary caching feature documentation](./users/binarycaching.mdx).

### <a name="caching-actions"></a> The GitHub Actions cache provider

:::warning
本节介绍 kmpkg 的实验性功能，该功能可能随时更改或删除。
:::

The GitHub Actions cache is intended to store a repository's intermediate build files that don't change often between jobs or workflow runs. For GitHub users, the GitHub Actions cache is a natural fit for kmpkg's binary caching, and it is easier to configure than kmpkg's GitHub Package binary caching integration. GitHub provides a few different tools to manage your Actions caches, which include REST APIs and an extension to the `gh` command line tool, so that you can optimize caches for your workflow. kmpkg's integration with GitHub Actions cache is through the `x-gha` binary source provider.

### <a name="caching-nuget"></a> The GitHub Packages NuGet cache provider

GitHub Packages make it possible for a repository to publish binary artifacts for public or private use. Beyond hosting storage for published packages, GitHub Packages supports a variety of package management tools by acting as a package registry. kmpkg can use the NuGet registry interface to GitHub Packages as a cache for kmpkg binary artifacts, by using the `nuget` binary source provider. This integration with GitHub Packages is not as straightforward as the GitHub Actions cache integration and management of the cached binaries is more difficult, making the GitHub Actions cache a better option for most users.

## <a name="dependency-graph"></a> The GitHub dependency graph

:::warning
本节介绍 kmpkg 的实验性功能，该功能可能随时更改或删除。
:::

> [!TIP]
> We are actively developing this feature and would like to hear your feedback. Let us know if you have any thoughts about the current functionality or any desired functionality by emailing [kmpkg@microsoft.com](mailto:kmpkg@microsoft.com) or by filing an issue in [kmpkg](https://gitee.com/kumo-pub/kmpkg/issues). If you have feedback on any of the GitHub features that this enables, let us know that too and we'll make sure it gets to the right folks at GitHub.

### About the GitHub dependency graph

The GitHub dependency graph stores the set of dependencies for a repository. Beyond being able to visualize a repository's dependencies, GitHub builds several useful features on top of this data, including dependency review and Dependabot alerts. Learn more at GitHub's documentation on [securing your supply chain](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

### kmpkg integration with the GitHub dependency graph

kmpkg has experimental support for populating the GitHub dependency graph from within a GitHub Actions workflow. To enable this feature, make the following changes in your workflow file:

* Set the `KMPKG_FEATURE_FLAGS` environment variable to include the value `dependencygraph`.
* Set the `GITHUB_TOKEN` environment variable to the value `${{ secrets.GITHUB_TOKEN }}`.
* Give GitHub Actions write access to the contents of your repository by including the following permissions block. This is required to write the dependency graph metadata to your repository. This __will not__ add any commits to your repository or make any other modification to the contents of your repository.

```yaml
permissions:
  contents: write
```

You must enable the GitHub dependency graph in your repository's settings (enabled by default on public repositories). For private repositories, follow the GitHub documentation to [enable the dependency graph](https://docs.github.com/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph#enabling-and-disabling-the-dependency-graph-for-a-private-repository) in order to satisfy this requirement.

### Known limitations

* The version of kmpkg bundled with GitHub Actions runners may not be up to date. Use the most recent version of kmpkg to get access to this feature and receive the latest bug fixes.
* Features that depend on the dependency graph, such as Dependabot alerts and Dependabot pull requests, are not yet available. Please let us know if you are interested in those features!

### Example GitHub Actions workflow

> [!NOTE]
> This example assumes that there is a valid `kmpkg.json` manifest that lists
> some dependent ports. For more information on manifests, see our
> [documentation on manifest mode](concepts/manifest-mode.mdx).

```yaml
name: Populate dependencies

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: write

env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  KMPKG_FEATURE_FLAGS: dependencygraph

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4
      with:
        submodules: 'recursive'

    # This will execute a dry-run, meaning that libraries will not be built and
    # installed, but they will still be reported to the GitHub dependency graph.
    # This step assumes `kmpkg` has been bootstrapped (run `./kmpkg/bootstrap-kmpkg`)
    - name: Run kmpkg
      run: ${{ github.workspace }}/kmpkg/kmpkg install --dry-run

```
