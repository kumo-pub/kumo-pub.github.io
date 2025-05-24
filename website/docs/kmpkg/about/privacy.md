---
title: Telemetry and Privacy
description: kmpkg telemetry and privacy information
date: 01/10/2024
ms.topic: legal
---
# kmpkg Telemetry and Privacy

kmpkg collects telemetry data to understand usage issues, such as failing packages, and to guide tool improvements. The collected data is anonymous.
For more information about how Microsoft protects your privacy, see the [Microsoft Privacy Statement](https://privacy.microsoft.com/en-US/privacystatement#mainenterprisedeveloperproductsmodule).

## Scope

We explicitly ONLY collect information from invocations of the tool itself; we do NOT add any tracking information into the produced libraries. Telemetry is collected when using any of the `kmpkg` commands.

## How to opt out

The kmpkg telemetry feature is enabled by default. In order to opt-out of data collection, you can re-run the bootstrap script with the following flag, for Windows and Linux/OSX, respectively:

```PS> .\bootstrap-kmpkg.bat -disableMetrics```

```~/$ ./bootstrap-kmpkg.sh -disableMetrics```

## Disclosure

kmpkg displays text similar to the following when you build kmpkg. This is how Microsoft notifies you about data collection.

```console
Telemetry
---------
kmpkg collects usage data in order to help us improve your experience.
The data collected by Microsoft is anonymous.
You can opt-out of telemetry by re-running the bootstrap-kmpkg script with -disableMetrics,
passing --disable-metrics to kmpkg on the command line,
or by setting the KMPKG_DISABLE_METRICS environment variable.

Read more about kmpkg telemetry at docs/about/privacy.md
```

## Data Collected

The telemetry feature doesn't collect personal data, such as usernames or email addresses. It doesn't scan your code and doesn't extract project-level data, such as name, repository, or author. The data is sent securely to Microsoft servers and held under restricted access.

Protecting your privacy is important to us. If you suspect the telemetry is collecting sensitive data or the data is being insecurely or inappropriately handled, file an issue in the Microsoft/kmpkg repository or send an email to kmpkg@microsoft.com for investigation.

We collect various telemetry events such as the command line used, the time of invocation, and how long execution took. Some commands also add additional calculated information (such as the full set of libraries to install). We generate a completely random UUID on first use and attach it to each event.

You can see the telemetry events any command by appending `--printmetrics` after the kmpkg command line.

In the source code (included on GitHub at [`microsoft/kmpkg-tool`](https://gitee.com/kumo-pub/kmpkg-tool/)), you can search for calls to the functions `track_property()`, `track_feature()`, `track_metric()`, and `track_buildtime()`
to see every specific data point we collect.

## Avoid inadvertent disclosure information

kmpkg contributors and anyone else running a version of kmpkg that they built themselves should consider the path to their source code. If a crash occurs when using kmpkg, the file path from the build machine is collected as part of the stack trace and isn't hashed.
Because of this, builds of kmpkg shouldn't be located in directories whose path names expose personal or sensitive information.
