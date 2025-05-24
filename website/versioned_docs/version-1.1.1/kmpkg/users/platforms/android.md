---
title: Android support
description: How to target Android devices using C++ with kmpkg
date: 07/11/2024
ms.topic: concept-article
---
# Android

The triplets x64-android, arm-neon-android, and arm64-android are tested by kmpkg's curated registry continuous integration.

## Android build requirements

1. Download the [Android NDK](https://developer.android.com/ndk/downloads/)

2. Set environment variable `ANDROID_NDK_HOME` to your Android NDK installation to set up the Android toolchain. For example:

   ```bash
   export ANDROID_NDK_HOME=/home/your-account/Android/Sdk/ndk-bundle
   ```

   Or:

   ```bash
   export ANDROID_NDK_HOME=/home/your-account/Android/android-ndk-r26d
   ```

Note: you will still need to install g++ or a C++ compiler that targets your host for any host dependencies.

## kmpkg triplets and their corresponding Android ABI

There are six different Android ABIs, each of which maps to a kmpkg triplet. The following table outlines the mapping from kmpkg architectures to android architectures:

|KMPKG_TARGET_TRIPLET       | ANDROID_ABI          | ANDROID_ARM_NEON |
|---------------------------|----------------------|------------------|
|arm64-android              | arm64-v8a            |                  |
|arm-android                | armeabi-v7a          | OFF              |
|arm-neon-android           | armeabi-v7a          | ON               |
|x64-android                | x86_64               |                  |
|x86-android                | x86                  |                  |
|armv6-android              | armeabi              |                  |

## Building Android libraries in a Docker container

You can build Android libraries, such as `jsoncpp` in a Ubuntu Docker container.

Create a `Dockerfile` with the following contents:

```Dockerfile
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND noninteractive

RUN \
  apt-get update && \
  apt-get -y upgrade

RUN \
  apt-get -y --no-install-recommends install git g++ wget curl zip vim pkg-config tar cmake unzip ca-certificates

# Download Android NDK
RUN \
  wget https://dl.google.com/android/repository/android-ndk-r26d-linux.zip && \
  unzip android-ndk-r26d-linux.zip && \
  rm -rf android-ndk-r26d-linux.zip

ENV ANDROID_NDK_HOME /android-ndk-r26d

RUN git clone https://gitee.com/kumo-pub/kmpkg
WORKDIR kmpkg
RUN ./bootstrap-kmpkg.sh

ENV PATH "/kmpkg:$PATH"
ENV KMPKG_ROOT "/kmpkg"

WORKDIR /project
```

Build the image and launch a new container:

```sh
docker build . -t "kmpkg-android"
docker run -it "kmpkg-android" bash
```

In the container, create `/project/kmpkg.json` with the following contents:

```json
{
  "dependencies": [
    "jsoncpp"
  ],
  "builtin-baseline": "1e68748a7c6914642ed686b2e19c3d688bca150a"
}
```

Finally, run `kmpkg install --triplet x64-android` to build `jsoncpp` for android.

## Using Vulkan SDK

kmpkg has a [`vulkan` package](https://gitee.com/kumo-pub/kmpkg/blob/master/ports/vulkan/portfile.cmake) which allows you to `find_package(Vulkan)`. To use it you have to provide the `VULKAN_SDK` environment variable.

```bash
export VULKAN_SDK=/usr/local
./kmpkg install vulkan
```

NDK already contains [Vulkan](https://developer.android.com/ndk/guides/graphics/getting-started) headers and `libvulkan.so` binaries for each of its architectures.

To expose them to kmpkg, you can consider `export VULKAN_SDK=...` for each installation. But by placing `set(ENV{VULKAN_SDK} ...)` in the triplet files, you can skip the tedious work.

If you are using NDK 21.3.6528147 or an earlier version, it will be like the following:

```cmake
# In android triplets... (e.g. arm64-android.cmake)
set(KMPKG_CMAKE_SYSTEM_NAME Android)
# ...
# If your API level is 30, libvulkan.so is at $ENV{ANDROID_NDK_HOME}/platforms/android-30/arch-arm64/usr/lib
set(ENV{VULKAN_SDK} $ENV{ANDROID_NDK_HOME}/sysroot/usr)
```

Notice that **the location of the sysroot has changed since NDK 22**. (For more information, see [\[BUG\] sysroot headers missing since r22?](https://github.com/android/ndk/issues/1407)).

If you prefer using [the latest version](https://developer.android.com/studio/projects/install-ndk#default-ndk-per-agp), check the [BuildSystemMaintainers.md of the NDK document](https://android.googlesource.com/platform/ndk/+/master/docs/BuildSystemMaintainers.md#sysroot) and then put appropriate path for your system.

For example, MacOS users will use the path like this example:

```cmake
# In android triplets... (e.g. arm64-android.cmake)
set(KMPKG_CMAKE_SYSTEM_NAME Android)
# ...
# If your API level is 30, libvulkan.so is at $ENV{ANDROID_NDK_HOME}/toolchains/llvm/prebuilt/darwin-x86_64/sysroot/usr/lib/aarch64-linux-android/30
set(ENV{VULKAN_SDK} $ENV{ANDROID_NDK_HOME}/toolchains/llvm/prebuilt/darwin-x86_64/sysroot/usr)
```

By doing this for all Android triplets, you can install `vulkan` and the packages that require it. (e.g. `vulkan-hpp`)

<details>
  <summary>`kmpkg install vulkan-hpp:arm64-android`</summary>

```console
user@host$ ./kmpkg install vulkan-hpp:arm64-android
Computing installation plan...
The following packages will be built and installed:
  * vulkan[core]:arm64-android -> 1.1.82.1-1
    vulkan-hpp[core]:arm64-android -> 2019-05-11-1
Additional packages (*) will be modified to complete this operation.
Detecting compiler hash for triplet arm64-android...
...
Starting package 1/2: vulkan:arm64-android
Building package vulkan[core]:arm64-android...
-- Using community triplet arm64-android. This triplet configuration is not guaranteed to succeed.
-- [COMMUNITY] Loading triplet configuration from: /.../kmpkg/triplets/community/arm64-android.cmake
-- Querying VULKAN_SDK Environment variable
-- Searching /.../Library/Android/sdk/ndk/22.1.7171670/toolchains/llvm/prebuilt/darwin-x86_64/sysroot/usr/include/vulkan/ for vulkan.h
-- Found vulkan.h
-- Performing post-build validation
-- Performing post-build validation done
...
Building package vulkan[core]:arm64-android... done
Installing package vulkan[core]:arm64-android...
Installing package vulkan[core]:arm64-android... done
Elapsed time for package vulkan:arm64-android: 35.9 ms
Starting package 2/2: vulkan-hpp:arm64-android
Building package vulkan-hpp[core]:arm64-android...
-- Using community triplet arm64-android. This triplet configuration is not guaranteed to succeed.
-- [COMMUNITY] Loading triplet configuration from: /.../kmpkg/triplets/community/arm64-android.cmake
-- Using cached /.../kmpkg/downloads/KhronosGroup-Vulkan-Hpp-5ce8ae7fd0d9c0543d02f33cfa8a66e6a43e2150.tar.gz
-- Cleaning sources at /.../kmpkg/buildtrees/vulkan-hpp/src/e6a43e2150-4f344cd911.clean. Use --editable to skip cleaning for the packages you specify.
-- Extracting source /.../kmpkg/downloads/KhronosGroup-Vulkan-Hpp-5ce8ae7fd0d9c0543d02f33cfa8a66e6a43e2150.tar.gz
-- Using source at /.../kmpkg/buildtrees/vulkan-hpp/src/e6a43e2150-4f344cd911.clean
-- Performing post-build validation
-- Performing post-build validation done
...
Building package vulkan-hpp[core]:arm64-android... done
Installing package vulkan-hpp[core]:arm64-android...
Installing package vulkan-hpp[core]:arm64-android... done
Elapsed time for package vulkan-hpp:arm64-android: 144.5 ms

Total elapsed time: 1.013 s

The package vulkan-hpp:arm64-android is header only and can be used from CMake via:

    find_path(VULKAN_HPP_INCLUDE_DIRS "vulkan/vulkan.hpp")
    target_include_directories(main PRIVATE ${VULKAN_HPP_INCLUDE_DIRS})

```

</details>

## Example Android Project

The folder [docs/examples/kmpkg_android_example_cmake](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake) provides a working example, with an Android library that consumes the jsoncpp library:

### Details

- The [CMakeLists.txt](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake/CMakeLists.txt) simply uses `find_package` and `target_link_library`

- The [compile.sh](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake/compile.sh) script enables you to select any matching pair of "android abi" /  "kmpkg triplet" and to test the compilation

- The dummy [my_lib.cpp](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake/my_lib.cpp) file uses the jsoncpp library

> [!NOTE]
> This example only compiles an Android library, as the compilation of a full-fledged Android App is beyond the scope of this document.

## Test on an example: `kmpkg_android.cmake`

Test using [kmpkg_android.cmake](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake_script/cmake/kmpkg_android.cmake).

The folder [kmpkg_android_example_cmake_script](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake_script) provides the same example, and uses a cmake script in order to simplify the usage.

### Details
- The main [CMakeLists.txt](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake_script/CMakeLists.txt) loads [kmpkg_android.cmake](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake_script/cmake/kmpkg_android.cmake) if the flag `KMPKG_TARGET_ANDROID` is set:

  ```cmake
  if (KMPKG_TARGET_ANDROID)
      include("cmake/kmpkg_android.cmake")
  endif()
  ```

  > [!IMPORTANT]
  > Place these lines before calling `project()`.

- The [compile.sh](https://gitee.com/kumo-pub/kmpkg-docs/tree/main/kmpkg/examples/kmpkg_android_example_cmake_script/compile.sh) script shows that it is then possible to compile for android using a simple cmake invocation, for example:

  ```bash
  cmake .. -DKMPKG_TARGET_ANDROID=ON -DANDROID_ABI=armeabi-v7a
  ```

## Consume libraries using kmpkg, and Android prefab Archives (AAR files)

:::warning
本节介绍 kmpkg 的实验性功能，该功能可能随时更改或删除。
:::

kmpkg can export Android archives ([AAR files](https://developer.android.com/studio/projects/android-library)). Once an archive is created, it can be imported in Android Studio as a native dependent.  The archive is automatically consumed using [Android Studio's prefab tool](https://github.com/google/prefab).

For more information on Prefab, refer to:

- The [official prefab documentation](https://google.github.io/prefab).
- a blog post from Android developers blog: [Native Dependencies in Android Studio 4.0](https://android-developers.googleblog.com/2020/02/native-dependencies-in-android-studio-40.html)

> [!NOTE]
> Android Studio users: prefab packages are supported on Android Studio 4+.

### Requirements

1. `ndk <required>`

Set environment variable `ANDROID_NDK_HOME` to your android ndk installation. For example:

```console
export ANDROID_NDK_HOME=/home/your-account/Android/Sdk/ndk-bundle
```

1. `7zip <required on windows>` or `zip <required on linux>`

1. `maven <optional>`

1. Android triplets

> [!NOTE]
> To use "prefab" (see below), all four architectures are required. If any are missing the export will fail.

### Example exporting \[jsoncpp]

First, run "kmpkg install" for all supported Android architectures (it is mandatory to export all of them):

```console
./kmpkg install jsoncpp:arm-android  jsoncpp:arm64-android  jsoncpp:x64-android  jsoncpp:x86-android
```

Then, export the prefab:

Notes:

- The `--prefab-maven` flag is optional. Call it if maven is installed.
- The `--prefab-debug` flag will output instructions on how to use the prefab archive via gradle.

```console
./kmpkg export --triplet x64-android jsoncpp --prefab --prefab-maven --prefab-debug
```

You will see output like this:

```console
The following packages are already built and will be exported:
    jsoncpp:arm64-android

Exporting package jsoncpp...
[DEBUG] Found 4 triplets
  arm64-android
  x64-android
  x86-android
  arm-android

...
... Lots of output...
...

[INFO] Scanning for projects...
Downloading from central: https://repo.maven.apache.org/maven2/org/apache/maven/plugins/maven-clean-plugin/2.5/maven-clean-plugin-2.5.pom

...
... Lots of output...
...

[INFO] BUILD SUCCESS
[INFO] Total time:  2.207 s
[INFO] Finished at: 2020-05-10T14:42:28+02:00


...
... Lots of output...
...

[DEBUG] Configuration properties in Android Studio
In app/build.gradle

  com.kmpkg.ndk.support:jsoncpp:1.9.2

And cmake flags

    externalNativeBuild {
                cmake {
                    arguments '-DANDROID_STL=c++_shared'
                    cppFlags "-std=c++17"
                }
            }

In gradle.properties

    android.enablePrefab=true
    android.enableParallelJsonGen=false
    android.prefabVersion=${prefab.version}

Successfully exported jsoncpp. Checkout .../kmpkg/prefab 

```

#### The output directory after export

```
prefab
└── jsoncpp/
    ├── aar/
    │   ├── AndroidManifest.xml
    │   ├── META-INF/
    │   │   └── LICENSE
    │   └── prefab/
    │       ├── modules/
    │       │   └── jsoncpp/
    │       │       ├── libs/
    │       │       │   ├── android.arm64-v8a/
    │       │       │   │   ├── abi.json
    │       │       │   │   ├── include/
    │       │       │   │   │   └── json/
    │       │       │   │   │       ├── json.h
    │       │       │   │   │       └── ....
    │       │       │   │   └── libjsoncpp.so
    │       │       │   ├── android.armeabi-v7a/
    │       │       │   │   ├── abi.json
    │       │       │   │   ├── include/
    │       │       │   │   │   └── json/
    │       │       │   │   │       ├── json.h
    │       │       │   │   │       └── ....
    │       │       │   │   └── libjsoncpp.so
    │       │       │   ├── android.x86/
    │       │       │   │   ├── abi.json
    │       │       │   │   ├── include/
    │       │       │   │   │   └── json/
    │       │       │   │   │       ├── json.h
    │       │       │   │   │       └── ....
    │       │       │   │   └── libjsoncpp.so
    │       │       │   └── android.x86_64/
    │       │       │       ├── abi.json
    │       │       │       ├── include/
    │       │       │       │   └── json/
    │       │       │       │       ├── json.h
    │       │       │       │       └── ....
    │       │       │       └── libjsoncpp.so
    │       │       └── module.json
    │       └── prefab.json
    ├── jsoncpp-1.9.2.aar
    └── pom.xml
```

### Example consuming [jsoncpp] via kmpkg and prefab

See the example GitHub repo here:

[`atkawa7/prefab-vpkg-integration-sample`](https://github.com/atkawa7/prefab-vpkg-integration-sample)
