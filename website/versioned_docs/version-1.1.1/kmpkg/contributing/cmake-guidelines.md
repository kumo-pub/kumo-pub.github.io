---
date: 01/10/2024
---
# cmake样式指南

为 kmpkg 做出贡献的 CMake 风格指南。

我们期望所有 CMake 脚本都是：

- 在 `scripts/` 目录中，或者
- 在 `kmpkg-*` 端口中

应遵循本文件中规定的准则。 现有脚本可能尚未遵循这些准则； 预计我们会继续更新旧脚本
符合这些准则。

这些指南旨在保证我们的脚本的稳定性。 我们希望它们将使向前和向后兼容性变得更容易。

## 准则

- 除了输出参数以外，我们始终使用 `cmake_parse_arguments()` 而不是函数参数或引用 `${ARG<N>}`。
  - 这不一定需要后跟“脚本本地帮助程序函数”
    - 在这种情况下，位置参数应放在函数声明中（而不是使用 `${ARG<N>}`），并应根据本地规则命名（即 `snake_case`）。
    - 例外：在检查 ARGC 后，可选的位置参数应通过 `set(argument_name ${ARG<N>})` 指定名称。
  - 输出参数应该是函数的第一个参数。 示例：
      ```cmake
      function(format out_var)
        cmake_parse_arguments(PARSE_ARGV 1 "arg" ...)
        # ... set(buffer "output")
        set("${out_var}" "${buffer}" PARENT_SCOPE)
      endfunction()
      ```
- 没有未解析或未使用的参数。 始终检查 `ARGN` 或 `arg_UNPARSED_ARGUMENTS`。 如果可能则为 `FATAL_ERROR`；如果需要后向兼容性则为 `WARNING`。
- 所有 `cmake_parse_arguments` 必须使用 `PARSE_ARGV`。
- 所有 `foreach` 循环都必须使用 `IN LISTS`、`IN ITEMS` 或 `RANGE`。
- 除非在对用户有帮助的信息中，否则变量 `${ARGV}` 和 `${ARGN}` 均未引用。
  - (即 `message(FATAL_ERROR "blah was passed extra arguments: ${ARGN}")`）
- 我们始终使用函数，而不是宏或顶级代码。
  - 例外：“script-local 帮助程序 宏”。 定义一个小宏有时会很有帮助。 应谨慎执行此操作，并且应首选函数。
  - 例外：`kmpkg.cmake` 的 `find_package`。
- 脚本树中的脚本不应预期在正常运行过程中需要可观测的更改。
  - 示例冲突：`kmpkg_acquire_msys()` 有硬编码的包和版本，由于 `MSYS` 项目删除了旧包，因此需要随着时间的推移进行更新。
  - 例外示例：`kmpkg_from_sourceforge()` 有一个需要维护的镜像列表，但对调用方没有可观察到的行为影响。
- 引用规则：CMake 中有三种类型的参数 - 不带引号 (`foo(BAR)`)、带引号 (`foo("BAR")`) 和带括号 (`foo([[BAR]])`)。 遵循以下规则正确引用：
  - 如果参数包含变量扩展 `${...}`，则必须将其加引号。
    - 例外：`splat` 变量扩展，当一个变量作为多个参数传递给函数时。 在这种情况下，参数应仅为 `${foo}`：
      ```cmake
      kmpkg_list(SET working_directory)
      if(DEFINED "arg_WORKING_DIRECTORY")
        kmpkg_list(SET working_directory WORKING_DIRECTORY "${arg_WORKING_DIRECTORY}")
      endif()
      # calls do_the_thing() if NOT DEFINED arg_WORKING_DIRECTORY,
      # else calls do_the_thing(WORKING_DIRECTORY "${arg_WORKING_DIRECTORY}")
      do_the_thing(${working_directory})
      ```

  - 此外，如果参数包含并非 `\\`、`\` 或 `\$` 的任何转义序列，则该参数必须是带引号的参数。
    - 例如：`foo\nbar` 必须带引号。
  - 此外，如果参数包含 `\`、`"` 或 `$`，则应将该参数括起来。
    that argument should be bracketed.
    - 示例：

      ```cmake
      set(x [[foo\bar]])
      set(y [=[foo([[bar\baz]])]=])
      ```

  - 此外，如果参数包含的字符并非字母数字或 `_`，则应将该参数加引号。
  - 否则，该参数应不加引号。
  - 例外：`<variable|string>` 类型的 `if()` 参数应始终加引号：
    - 比较运算符的两个参数 `-` `EQUAL`、`STREQUAL`、`VERSION_LESS` 等。
    - `TMATCHES` 和 `IN_LIST` 的第一个参数
    - 示例：

      ```cmake
      if("${FOO}" STREQUAL "BAR") # ...
      if("${BAZ}" EQUAL "0") # ...
      if("FOO" IN_LIST list_variable) # ...
      if("${bar}" MATCHES [[a[bcd]+\.[bcd]+]]) # ...
      ```

    - 对于单个表达式和不采用 `<variable|string>` 的其他类型的谓词，请使用常规规则。
- 除了简单的输出参数之外，没有任何“指针”或“输入输出”参数（用户传递变量名称而不是内容）。
- 变量不会假定为空。 如果打算局部使用该变量，则必须将其显式初始化为空：如果是字符串变量则使用 `set(foo "")`，如果列表变量则使用 `kmpkg_list(SET foo)`。
- 不应使用 `set(var)`。 使用 `unset(var)` 取消设置变量，使用 `set(var "")` 将其设置为空字符串，使用 `kmpkg_list(SET var)` 将其设置为空列表。 注意：空字符串和空列表是相同的值；这是表示法差异，而不是结果的差异。
- 应记录预期跨 `API` 边界从父作用域继承的所有变量（即并非文件局部函数）。 三元组文件中提及的所有变量均视为已记录。
- 输出参数仅在 `PARENT_SCOPE` 中设置且永不读取。 另请参阅帮助程序 `z_kmpkg_forward_output_variable()`，以通过函数作用域转发参数。
- `CACHE` 变量仅用于强耦合函数内部共享的全局变量和单个函数中的内部状态，以避免重复工作。 这些变量应非常谨慎地使用，并应使用 `Z_KMPKG_` 前缀以避免与任何其他代码定义的任何局部变量相冲突。
  - 示例:
    - `kmpkg_cmake_configure`'s `Z_KMPKG_CMAKE_GENERATOR`
    - `z_kmpkg_get_cmake_vars`'s `Z_KMPKG_GET_CMAKE_VARS_FILE`
- `include()` 仅允许在 `ports.cmake` 或 `kmpkg-port-config.cmake` 中使用。
- `foreach(RANGE)` 的参数必须始终为自然数，并且 `<start>` 必须始终小于或等于 `<stop>`。
  - 这一点必须通过如下内容进行检查：

    ```cmake
    if("${start}" LESS_EQUAL "${end}")
      foreach(RANGE "${start}" "${end}")
        ...
      endforeach()
    endif()
    ```
  
- 所有基于端口的脚本都必须使用 `include_guard(GLOBAL)` 以避免多次包含。

### 需要的 CMake 版本

- A除 kmpkg.cmake 以外的所有 CMake 脚本都可能采用 ports.cmake 的 cmake_minimum_required 中存在的 CMake 版本。
  - T每次将新版本的 CMake 添加到 kmpkgTools.xml 时都应升级此 cmake_minimum_required，
  就像在所有帮助程序 CMakeLists.txt 文件中的 cmake_minimum_required 一样。
- kmpkg.cmake 采用的 CMake 版本通常必须回到 3.7.2
  - 特定函数和选项可能采用更高的 CMake 版本；如果是这种情况，请确保使用所需的 CMake 版本注释该函数或选项。

### 更改现有函数

- 切勿删除非内部函数中的参数；如果这些参数不再有效，只需将其视为如常，并在使用时发出警告。
- 切勿添加新的强制参数。

### 命名变量

- `cmake_parse_arguments`：将前缀设置为 `arg`
- 局部变量使用 `snake_case` 命名
- 内部全局变量名采用 `Z_KMPKG_` 作为前缀。
- 外部试验性全局变量名采用 `X_KMPKG_` 作为前缀。

- 内部函数采用 `z_kmpkg_` 作为前缀
  - 单个函数的内部函数（即帮助程序函数）命名为 `[z_]<func>_<name>`，其中 `<func>` 是其作为帮助程序的函数的名称，而 `<name>` 是帮助程序函数的作用。
    - 如果 `<func>` 没有 `z_`，应在其前面添加 `z_`，但不要将帮助程序函数命名为 `z_z_foo_bar`。
- 公共全局变量命名为 `KMPKG_`.
