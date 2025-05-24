#
# kmpkg_android.cmake
#
# Helper script when using kmpkg with cmake. It should be triggered via the variable KMPKG_TARGET_ANDROID
#
# For example:
# if (KMPKG_TARGET_ANDROID)
#     include("cmake/kmpkg_android.cmake")
# endif()
# 
# This script will:
# 1 & 2. check the presence of needed env variables: ANDROID_NDK_HOME and KMPKG_ROOT
# 3. set KMPKG_TARGET_TRIPLET according to ANDROID_ABI
# 4. Combine kmpkg and Android toolchains by setting CMAKE_TOOLCHAIN_FILE
#    and KMPKG_CHAINLOAD_TOOLCHAIN_FILE

# Note: KMPKG_TARGET_ANDROID is not an official kmpkg variable.
# it is introduced for the need of this script

if (KMPKG_TARGET_ANDROID)

    #
    # 1. Check the presence of environment variable ANDROID_NDK_HOME
    #
    if (NOT DEFINED ENV{ANDROID_NDK_HOME})
        message(FATAL_ERROR "
        Please set an environment variable ANDROID_NDK_HOME
        For example:
        export ANDROID_NDK_HOME=/home/your-account/Android/Sdk/ndk-bundle
        Or:
        export ANDROID_NDK_HOME=/home/your-account/Android/android-ndk-r21b
        ")
    endif()

    #
    # 2. Check the presence of environment variable KMPKG_ROOT
    #
    if (NOT DEFINED ENV{KMPKG_ROOT})
        message(FATAL_ERROR "
        Please set an environment variable KMPKG_ROOT
        For example:
        export KMPKG_ROOT=/path/to/kmpkg
        ")
    endif()


    #
    # 3. Set KMPKG_TARGET_TRIPLET according to ANDROID_ABI
    # 
    # There are four different Android ABI, each of which maps to 
    # a kmpkg triplet. The following table outlines the mapping from kmpkg architectures to android architectures
    #
    # |KMPKG_TARGET_TRIPLET       | ANDROID_ABI          |
    # |---------------------------|----------------------|
    # |arm64-android              | arm64-v8a            |
    # |arm-android                | armeabi-v7a          |
    # |x64-android                | x86_64               |
    # |x86-android                | x86                  |
    #
    # The variable must be stored in the cache in order to successfully the two toolchains. 
    #
    if (ANDROID_ABI MATCHES "arm64-v8a")
        set(KMPKG_TARGET_TRIPLET "arm64-android" CACHE STRING "" FORCE)
    elseif(ANDROID_ABI MATCHES "armeabi-v7a")
        set(KMPKG_TARGET_TRIPLET "arm-android" CACHE STRING "" FORCE)
    elseif(ANDROID_ABI MATCHES "x86_64")
        set(KMPKG_TARGET_TRIPLET "x64-android" CACHE STRING "" FORCE)
    elseif(ANDROID_ABI MATCHES "x86")
        set(KMPKG_TARGET_TRIPLET "x86-android" CACHE STRING "" FORCE)
    else()
        message(FATAL_ERROR "
        Please specify ANDROID_ABI
        For example
        cmake ... -DANDROID_ABI=armeabi-v7a

        Possible ABIs are: arm64-v8a, armeabi-v7a, x64-android, x86-android
        ")
    endif()
    message("kmpkg_android.cmake: KMPKG_TARGET_TRIPLET was set to ${KMPKG_TARGET_TRIPLET}")


    #
    # 4. Combine kmpkg and Android toolchains
    #

    # kmpkg and android both provide dedicated toolchains:
    #
    # kmpkg_toolchain_file=$KMPKG_ROOT/scripts/buildsystems/kmpkg.cmake
    # android_toolchain_file=$ANDROID_NDK_HOME/build/cmake/android.toolchain.cmake
    #
    # When using kmpkg, the kmpkg toolchain shall be specified first.
    # However, kmpkg provides a way to preload and additional toolchain,
    # with the KMPKG_CHAINLOAD_TOOLCHAIN_FILE option.
    set(KMPKG_CHAINLOAD_TOOLCHAIN_FILE $ENV{ANDROID_NDK_HOME}/build/cmake/android.toolchain.cmake)
    set(CMAKE_TOOLCHAIN_FILE $ENV{KMPKG_ROOT}/scripts/buildsystems/kmpkg.cmake)
    message("kmpkg_android.cmake: CMAKE_TOOLCHAIN_FILE was set to ${CMAKE_TOOLCHAIN_FILE}")
    message("kmpkg_android.cmake: KMPKG_CHAINLOAD_TOOLCHAIN_FILE was set to ${KMPKG_CHAINLOAD_TOOLCHAIN_FILE}")

endif(KMPKG_TARGET_ANDROID)
