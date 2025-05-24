---
date: 11/30/2022
---
# 内部函数： z_kmpkg_function_arguments

:::warning
这是用于在内部实现 kmpkg 的内部帮助程序函数。 行为和参数将发生颠覆性变化，恕不另行通知。 请勿使用此函数。
:::

获取适合完美转移到另一个函数的函数参数列表。

## 使用情况

```cmake
z_kmpkg_function_arguments(<out-var> [<N>])
```

## 参数

### `<out-var>`

要设置为参数列表的变量

### `<N>`

要开始累积参数的索引。

默认为 `0` 以收集所有参数。

## 说明

该宏对 `ARGV` 进行了改进，使其能够区分列表参数。

| Form         | `ARGV`        | `z_kmpkg_function_arguments()` |
|--------------|---------------|--------------------------------|
| `fun(A B)`   | `"A;B"`       | `"A;B"`                        |
| `fun("A;B")` | `"A;B"`       | `"A\;B"`                       |

## 示例

```cmake
function(fun)
    z_kmpkg_function_arguments(ARGS)
    message("fun() is deprecated, use fun_replacement()")
    fun_replacement(${ARGS})
endfunction()
```

## Source

[`scripts/cmake/z_kmpkg_function_arguments.cmake`](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/z_kmpkg_function_arguments.cmake)
