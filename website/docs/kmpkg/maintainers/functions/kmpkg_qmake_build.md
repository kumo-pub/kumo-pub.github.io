---
title: kmpkg_qmake_build
description: Use kmpkg_qmake_build to build a QMake project.
date: 01/10/2024
---

# kmpkg_qmake_build

_Added in `kmpkg-qmake` version `2022-11-16`_.

Build a qmake-based project, previously configured using [kmpkg_qmake_configure](kmpkg_qmake_configure.mdx).

```cmake
kmpkg_qmake_build(
    [SKIP_MAKEFILES]
    [BUILD_LOGNAME arg1]
    [TARGETS arg1 [arg2 ...]]
    [RELEASE_TARGETS arg1 [arg2 ...]]
    [DEBUG_TARGETS arg1 [arg2 ...]]
)
```

To use this function, you must depend on the helper port `kmpkg-qmake`:

```json
"dependencies": [
  {
    "name": "kmpkg-qmake",
    "host": true
  }
]
```

### SKIP_MAKEFILES

Skip Makefile fixup to redirect _installed_ references to _packages_.

### BUILD_LOGNAME

Configuration independent prefix for the build log files.

Defaults to `build`.

### <a name="targets">TARGETS, RELEASE\_TARGETS, DEBUG\_TARGETS</a>
Targets to build for a certain configuration.

## 示例

[Search microsoft/kmpkg for Examples](https://gitee.com/kumo-pub/kmpkg/search?q=kmpkg_cmake_build+path%3A%2Fports)

## Source

[ports/kmpkg-qmake/kmpkg\_qmake\_build.cmake](https://gitee.com/kumo-pub/kmpkg/blob/master/ports/kmpkg-qmake/kmpkg_qmake_build.cmake)