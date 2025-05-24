---
title: Add an explicit usage file to a port.
description: Learn about supplying specific usage instructions in ports
date: 01/10/2024
ROBOTS: NOINDEX
is_archived: true
# Replaced by: maintainers/handling-usage-files.mdx
---
# Add an explicit usage file to a port.

`kmpkg` generates usage text for users who install particular ports, if the user names that specific port. For example:

```
$> kmpkg install zlib:x64-windows
Computing installation plan...
The following packages will be built and installed:
  * kmpkg-cmake[core]:x64-windows -> 2022-09-26
    zlib[core]:x64-windows -> 1.2.12#2
Additional packages (*) will be modified to complete this operation.F
Detecting compiler hash for triplet x64-windows...
Restored 2 package(s) from C:\Users\username\AppData\Local\kmpkg\archives in 77.46 ms. Use --debug to see more details.
Installing 1/2 kmpkg-cmake:x64-windows...
Elapsed time to handle kmpkg-cmake:x64-windows: 10.32 ms
Installing 2/2 zlib:x64-windows...
Elapsed time to handle zlib:x64-windows: 20.89 ms
Total elapsed time: 2.747 s

The package zlib is compatible with built-in CMake targets:

    find_package(ZLIB REQUIRED)
    target_link_libraries(main PRIVATE ZLIB::ZLIB)
```

Ports can explicitly supply usage instructions by creating a file in their package at `share/${PORT}/usage`. If there is no explicit usage installed by the port, kmpkg will generate default usage text by inspecting the installed files.

1. Create a file named `usage` in the port directory with the content you want displayed.
2. To `portfile.cmake`, add
```
file(INSTALL "${CMAKE_CURRENT_LIST_DIR}/usage" DESTINATION "${CURRENT_PACKAGES_DIR}/share/${PORT}")
```
3. Update the `"port-version"` and run `kmpkg x-add-version`.
