---
date: 11/30/2022
---
# 内部函数： z_kmpkg_prettify_command_line

:::warning
这是用于在内部实现 kmpkg 的内部帮助程序函数。 行为和参数将发生颠覆性变化，恕不另行通知。 请勿使用此函数。
:::

将命令行格式设置为字符串。

## 使用情况

```cmake
z_kmpkg_prettify_command_line(<out-var> <argument>...)
```

## 参数

### `<out-var>`

要设置为带格式命令行的变量

### `<argument>...`

要设置格式的命令行。

此参数应与 [`COMMAND` argument of `kmpkg_execute_required_process()`](../kmpkg_execute_required_process.mdx#command) 的 COMMAND 参数形式相同。

## 示例

- [kmpkg_execute_build_process.cmake](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/kmpkg_execute_build_process.cmake)
- [kmpkg_execute_required_process.cmake](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/kmpkg_execute_required_process.cmake)
- [kmpkg_execute_required_process_repeat.cmake](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/kmpkg_execute_required_process_repeat.cmake)

## Source

[`scripts/cmake/z_kmpkg_prettify_command_line.cmake`](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/z_kmpkg_prettify_command_line.cmake)
