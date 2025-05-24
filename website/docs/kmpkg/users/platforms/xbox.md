---
title: Xbox
description: Use x64 community triplets for Xbox development.
author: walbourn
ms.author: viromer
date: 01/10/2024
ms.topic: concept-article
---
# Xbox

> [!NOTE]
> Xbox is not tested as part of kmpkg repository's continuous integration process, so regressions can occur as part of library updates. 

## Xbox community triplets

kmpkg includes [community triplets](https://gitee.com/kumo-pub/kmpkg/tree/master/triplets/community) for [Microsoft GDK](https://aka.ms/gdk) PC and [Xbox](https://aka.ms/gdkx) development. They make use of the MSVC compiler toolset (Visual Studio 2019 version 16.11 or later).

There are two variants for each triplet: static and dynamic linking.

| Console          | kmpkg community triplets     |
|------------------|------------------------------|
| Xbox One         | x64-xbox-xboxone             |
|                  | x64-xbox-xboxone-static      |
| Xbox Series X\|S | x64-xbox-scarlett            |
|                  | x64-xbox-scarlett-static     |

The ``static`` linking triplets are set to use the MSVC Runtime as a DLL (i.e. ``KMPKG_CRT_LINKAGE dynamic``) as that's the recommended and supported usage scenario.

## Building with the Windows SDK

The Windows SDK (19041) or later includes the system headers required to build against the ``WINAPI_FAMILY_GAMES`` API partition used by the Xbox Game OS. Therefore, most libraries can be built against these triplets without having access to the NDA *Microsoft GDK with Xbox Extensions*.

## Building with the Microsoft GDK with Xbox Extensions

Libraries that make use of DirectX graphics APIs must be built using a custom variant of Direct3D 12.X used by the Xbox Game OS, and this requires access to the NDA *Microsoft GDK with Xbox Extensions*. Note that the Xbox Game OS does not support Direct3D 11, Direct2D/DirectWrite, OpenGL, GDI, or any older version of Direct3D.

Libraries that require these headers must use the **`ms-gdkx`** "stub" port to indicate this requirement. This port looks for paths pointed to by ``GameDKLatest``, ``GameGXDKLatest``, and ``GameGRDKLatest`` environment variables.

> [!NOTE]
> Xbox game developers are responsible for ensuring that they and their publishers have appropriate and correct licensing terms for use of any 3rd party software components per the terms of their Title License Agreement. Be sure to seek appropriate legal advice for any use of open-source components in your title.

## UWP on Xbox

If building for UWP on Xbox, use the existing `x64-uwp` triplet instead.

## Maintainer notes

CMake projects for these triplets are built using ``CMAKE_SYSTEM_NAME`` set to "Windows". To indicate the Xbox console being targeted, the `XBOX_CONSOLE_TARGET` variable is set to "`xboxone`" or "`scarlett`".

Xbox triplets build with ``/DWINAPI_FAMILY=WINAPI_FAMILY_GAMES`` and either `/arch:AVX` or `/arch:AVX2` depending on the target console.

The Xbox triplets also build with ``/DUNICODE /D_UNICODE`` as these are both strongly recommended for modern development. See the [UTF-8 Everywhere manifesto](https://utf8everywhere.org/) for more information.

For dynamic libraries, be sure to avoid explict linking to `KERNEL32.LIB` or `ONECORE.LIB`. For the Xbox platform, a platform umbrella library is used instead which conflicts with ``kernel32``, etc. See Microsoft Learn.

## Further reading

For more information, see [this blog post](https://walbourn.github.io/kmpkg-now-supports-targeting-xbox/).

See also the [CMakeExample sample on GitHub](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Tools/CMakeExample).
