---
date: 11/30/2022
---
# 内部函数： z_kmpkg_forward_output_variable

:::warning
这是用于在内部实现 kmpkg 的内部帮助程序函数。 行为和参数将发生颠覆性变化，恕不另行通知。 请勿使用此函数。
:::

通过局部函数范围将内部函数调用的值转发到指针输出参数。

## 使用情况

```cmake
z_kmpkg_forward_output_variable(<ptr_to_parent_var> <value_var>)
```

## 参数

### `<ptr_to_parent_var>`

设置为所需父变量名称的局部变量的名称。

最常见的情况是，此局部变量是函数指针输出参数的结果。

### `<value_var>`

将传播出去的局部变量的名称。

## 说明

以下两个代码段等效：

```cmake
z_kmpkg_forward_output_variable(ptr_to_parent_var value_var)
```

```cmake
if(DEFINED ptr_to_parent_var)
    if(DEFINED value_var)
        set("${ptr_to_parent_var}" "${value_var}" PARENT_SCOPE)
    else()
        unset("${ptr_to_parent_var}" PARENT_SCOPE)
    endif()
endif()
```

## 示例

```cmake
function(my_function out_var)
    file(SHA512 "somefile.txt" local_var)
    z_kmpkg_forward_output_variable(out_var local_var)
endfunction()
```

## Source

[`scripts/cmake/z_kmpkg_forward_output_variable.cmake`](https://gitee.com/kumo-pub/kmpkg/blob/master/scripts/cmake/z_kmpkg_forward_output_variable.cmake)
