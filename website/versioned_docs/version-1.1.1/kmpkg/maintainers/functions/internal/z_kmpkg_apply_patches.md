---
date: 11/30/2022
---
# 内部函数： z_kmpkg_apply_patches

:::warning
这是用于在内部实现 kmpkg 的内部帮助程序函数。 行为和参数将发生颠覆性变化，恕不另行通知。 请勿使用此函数。
:::

将一组修补程序应用到源树。

## 使用情况

```cmake
z_kmpkg_apply_patches(
    SOURCE_PATH <path-to-source>
    [QUIET]
    PATCHES <patch>...
)
```

## 参数

### SOURCE_PATH

要在其中应用修补程序的路径。

### PATCHES

要应用的修补程序列表。

相对路径解读为从端口目录的根目录开始。

### QUIET

不打印任何消息，也不会在应用修补程序时出现致命错误。

## 说明

大型修补程序的常见模式是使用 `kmpkg_download_distfile()` 进行下载，并将下载的路径传递到 PATCHES 中。

## Source

[scripts/cmake/z\_kmpkg\_apply\_patches.cmake](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/z_kmpkg_apply_patches.cmake)
