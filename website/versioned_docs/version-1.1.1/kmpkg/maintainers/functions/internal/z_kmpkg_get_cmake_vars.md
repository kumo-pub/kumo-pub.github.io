---
date: 11/30/2022
---
# 内部函数： z_kmpkg_get_cmake_vars

:::warning
这是用于在内部实现 kmpkg 的内部帮助程序函数。 行为和参数将发生颠覆性变化，恕不另行通知。 请勿使用此函数。
:::

运行使用虚拟项目配置的 cmake 以提取某些 cmake 变量

## 使用情况

```cmake
z_kmpkg_get_cmake_vars(<out-var>)
```

`z_kmpkg_get_cmake_vars(cmake_vars_file)` 将 `<out-var>` 设置为生成的 CMake 文件的路径，
将检测到的 `CMAKE_*` 变量重新导出为 `KMPKG_DETECTED_*`。

## 说明

避免在端口文件中使用。

对 `z_kmpkg_get_cmake_vars` 所有调用都将得到相同的输出文件；输出文件不会多次生成。

## 示例

```cmake
z_kmpkg_get_cmake_vars(cmake_vars_file)
include("${cmake_vars_file}")
message(STATUS "detected CXX flags: ${KMPKG_DETECTED_CXX_FLAGS}")
```

See also [kmpkg_configure_make](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/kmpkg_configure_make.cmake).

## Source

[scripts/cmake/z\_kmpkg\_get\_cmake\_vars.cmake](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/z_kmpkg_get_cmake_vars.cmake)
