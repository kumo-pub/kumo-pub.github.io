---
title: Microsoft/kmpkg README
description: README for kmpkg registry
author: JavierMatosD
ms.author: javiermat
date: 3/6/2024
ROBOTS: NOINDEX
---

# kmpkg overview

kmpkg is a free and open-source C/C++ package manager maintained by Microsoft
and the C++ community. 

Initially launched in 2016 as a tool for assisting developers in migrating their
projects to newer versions of Visual Studio, kmpkg has evolved into a
cross-platform tool used by developers on Windows, macOS, and Linux. kmpkg has a
large collection of open-source libraries and enterprise-ready features designed to
facilitate your development process with support for any build and project
systems. kmpkg is a C++ tool at heart and is written in C++ with scripts in
CMake. It is designed from the ground up to address the unique pain points C/C++
developers experience.

This tool and ecosystem are constantly evolving, and we always appreciate
contributions! Learn how to start contributing with our [packaging
tutorial](../get_started/get-started-adding-to-registry.mdx) and [maintainer
guide](../contributing/maintainer-guide.mdx).

# Get started

First, follow one of our quick start guides.

Whether you're using CMake, MSBuild, or any other build system, kmpkg has you covered:

* [kmpkg with CMake](../get_started/setup-kmpkg.mdx)
* [kmpkg with MSBuild](../get_started/get-started-msbuild.mdx)
* [kmpkg with other build systems](../users/buildsystems/manual-integration.mdx)

You can also use any editor:

* [kmpkg with Visual Studio](../get_started/get-started-vs.mdx)
* [kmpkg with Visual Sudio Code](../get_started/get-started-vscode.mdx)
* [kmpkg with
  CLion](<https://www.jetbrains.com/help/clion/package-management.html>)

If a library you need is not present in the kmpkg registry, [open an issue on
the GitHub repository][contributing:submit-issue] or [contribute the package
yourself](../get_started/get-started-adding-to-registry.mdx).

After you've gotten kmpkg installed and working, you may wish to [add
tab completion to your terminal](../commands/integrate.mdx#kmpkg-autocompletion).

# Use kmpkg

Create a [manifest for your project's dependencies](../consume/manifest-mode.mdx):

```Console
kmpkg new --application
kmpkg add port fmt
```

Or [install packages throught the command line](../consume/classic-mode.mdx):

```Console
kmpkg install fmt
```

Then use one of our available integrations for
[CMake](../concepts/build-system-integration.mdx#cmake-integration),
[MSBuild](../concepts/build-system-integration.mdx#msbuild-integration) or 
[other build
systems](../concepts/build-system-integration.mdx#manual-integration).

For a short description of all available commands, run `kmpkg help`.
Run `kmpkg help [topic]` for details on a specific topic.

# Key features

kmpkg offers powerful features for your package management needs:

* [easily integrate with your build system](../concepts/build-system-integration.mdx)
* [control the versions of your dependencies](../users/versioning.mdx)
* [package and publish your own packages](../concepts/registries.mdx)
* [reuse your binary artifacts](../users/binarycaching.mdx)
* [enable offline scenarios with asset caching](../concepts/asset-caching.mdx)

# Contribute

kmpkg is an open source project, and is thus built with your contributions. Here
are some ways you can contribute:

* [Submit issues][contributing:submit-issue] in kmpkg or existing packages
* [Submit fixes and new packages][contributing:submit-pr]

Please refer to our [mantainer guide](../contributing/maintainer-guide.mdx) and
[packaging tutorial](../get_started/get-started-packaging.mdx) for more details.

This project has adopted the [Microsoft Open Source Code of
Conduct][contributing:coc]. For more information see the [Code of Conduct
FAQ][contributing:coc-faq] or email
[opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional
questions or comments.
 
[contributing:submit-issue]: https://gitee.com/kumo-pub/kmpkg/issues/new/choose
[contributing:submit-pr]: https://gitee.com/kumo-pub/kmpkg/pulls
[contributing:coc]: https://opensource.microsoft.com/codeofconduct/
[contributing:coc-faq]: https://opensource.microsoft.com/codeofconduct/
  
# Resources

* Ports: [kumo/kmpkg](https://gitee.com/kumo-pub/kmpkg)
* Source code: [kumo/kmpkg-tool](<https://gitee.com/kumo-pub/kmpkg-tool>)
* Website: [kmpkg.io](<https://kmpkg.io>)
* Email: [kmpkg@microsoft.com](<mailto:kmpkg@microsoft.com>)
* Discord: [\#include \<C++\>'s Discord server](<https://www.includecpp.org>), in the #🌏kmpkg channel
* Slack: [C++ Alliance's Slack server](<https://cppalliance.org/slack/>), in the #kmpkg channel

# License

The code in this repository is licensed under the MIT License. The libraries
provided by ports are licensed under the terms of their original authors. Where
available, kmpkg places the associated license(s) in the location
[`installed/<triplet>/share/<port>/copyright`](../contributing/maintainer-guide.mdx#install-copyright-file).

# Security

Most ports in kmpkg build the libraries in question using the original build
system preferred by the original developers of those libraries, and download
source code and build tools from their official distribution locations. For use
behind a firewall, the specific access needed will depend on which ports are
being installed. If you must install it in an "air gapped" environment, consider
instaling once in a non-"air gapped" environment, populating an [asset
cache](../users/assetcaching.mdx) shared with the otherwise "air gapped"
environment.

# Telemetry

kmpkg collects usage data in order to help us improve your experience. The data
collected by Microsoft is anonymous. You can opt-out of telemetry by:

- running the bootstrap-kmpkg script with `-disableMetrics`
- passing `--disable-metrics` to kmpkg on the command line
- setting the `KMPKG_DISABLE_METRICS` environment variable

Read more about kmpkg telemetry at [https://learn.microsoft.com/kmpkg/about/privacy](../about/privacy.md).
