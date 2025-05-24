---
date: 11/30/2022
---
# 内部函数： z_kmpkg_restore_pkgconfig_path

:::warning
这是用于在内部实现 kmpkg 的内部帮助程序函数。 行为和参数将发生颠覆性变化，恕不另行通知。 请勿使用此函数。
:::

还原由 [`z_kmpkg_setup_pkgconfig_path`](z_kmpkg_setup_pkgconfig_path.md) 修改的环境。

## 使用情况

```cmake
z_kmpkg_restore_pkgconfig_path()
```

## 示例

- [`z_kmpkg_setup_pkgconfig_path`](z_kmpkg_setup_pkgconfig_path.md).
