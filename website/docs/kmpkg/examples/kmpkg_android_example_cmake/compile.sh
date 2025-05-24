#
# 1. Check the presence of required environment variables
#
if [ -z ${ANDROID_NDK_HOME+x} ]; then
  echo "Please set ANDROID_NDK_HOME"
  exit 1
fi
if [ -z ${KMPKG_ROOT+x} ]; then
  echo "Please set KMPKG_ROOT"
  exit 1
fi

#
# 2. Set the path to the toolchains
#
kmpkg_toolchain_file=$KMPKG_ROOT/scripts/buildsystems/kmpkg.cmake
android_toolchain_file=$ANDROID_NDK_HOME/build/cmake/android.toolchain.cmake


#
# 3. Select a pair "Android abi" / "kmpkg triplet"
# Uncomment one of the four possibilities below
#

android_abi=armeabi-v7a
kmpkg_target_triplet=arm-android

# android_abi=x86
# kmpkg_target_triplet=x86-android

# android_abi=arm64-v8a
# kmpkg_target_triplet=arm64-android

# android_abi=x86_64
# kmpkg_target_triplet=x64-android


#
# 4. Install the library via kmpkg
#
$KMPKG_ROOT/kmpkg install jsoncpp:$kmpkg_target_triplet

#
# 5. Test the build
#
rm -rf build
mkdir build
cd build 
cmake .. \
  -DCMAKE_TOOLCHAIN_FILE=$kmpkg_toolchain_file \
  -DKMPKG_CHAINLOAD_TOOLCHAIN_FILE=$android_toolchain_file \
  -DKMPKG_TARGET_TRIPLET=$kmpkg_target_triplet \
  -DANDROID_ABI=$android_abi
make
