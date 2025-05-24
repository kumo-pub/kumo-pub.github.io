---
date: 11/30/2022
---
# 内部函数： z_kmpkg_setup_pkgconfig_path

:::warning
这是用于在内部实现 kmpkg 的内部帮助程序函数。 行为和参数将发生颠覆性变化，恕不另行通知。 请勿使用此函数。
:::

将环境设置为使用 `pkgconfig`。

## 使用情况

```cmake
z_kmpkg_setup_pkgconfig_path(BASE_DIRS <base-dirs>)
```

## 参数

### BASE_DIRS

要使用的基础目录列表。

通常为 `${CURRENT_INSTALLED_DIR}` 或 `${CURRENT_INSTALLED_DIR}/debug`，但不能同时使用两者。
## 说明

获取 `PKG_CONFIG` 并将其设置为有效的 `pkg-config` 程序。

对于 `BASE_DIRS` 的每个条目，以未指定的顺序将 `<entry>/lib` 和 `<entry>/share` 添加到 `PKG_CONFIG_PATH` 前面。

另请参阅 [`z_kmpkg_restore_pkgconfig_path`](z_kmpkg_restore_pkgconfig_path.md)。

## 示例

```cmake
z_kmpkg_setup_pkgconfig_path(BASE_DIRS "${CURRENT_INSTALLED_DIR}")
# Build process that may internally invoke pkgconfig
kmpkg_execute_build_process(COMMAND my-buildsystem.py -release ...)
z_kmpkg_restore_pkgconfig_path()
if(NOT KMPKG_BUILD_TYPE)
  z_kmpkg_setup_pkgconfig_path(BASE_DIRS "${CURRENT_INSTALLED_DIR}/debug")
  # Build process that may internally invoke pkgconfig
  kmpkg_execute_build_process(COMMAND my-buildsystem.py -debug ...)
  z_kmpkg_restore_pkgconfig_path()
endi()
```

## Source

[scripts/cmake/z\_kmpkg\_setup\_pkgconfig\_path.cmake](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/z_kmpkg_setup_pkgconfig_path.cmake)
